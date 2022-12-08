import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const QUESTIONS_URL = 'http://localhost:5000/api/questions'

export const fetchQuestions = createAsyncThunk('api/questions', async () => {
  try {
    const response = await axios.get(QUESTIONS_URL)
    const shuffledQuestions = response.data.map((question) => ({
      ...question,
      answers: [...question.answers]
        .map((answer) => ({ ...answer, num: Math.random() }))
        .sort((a, b) => a.num - b.num),
    }))
    return shuffledQuestions
  } catch (error) {
    return error.message
  }
})

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    status: '',
    error: null,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    currentAnswer: '',
    open: false,
  },
  reducers: {
    startQuiz: (state) => {
      state.open = true
      state.status = 'idle'
    },
    handleAnswer: (state, action) => {
      state.score = action.payload.isAnswerCorrect
        ? state.score + 1
        : state.score
      state.currentAnswer = action.payload
    },
    handleNextQuestion: (state) => {
      state.currentQuestionIndex = state.currentQuestionIndex + 1
      state.currentAnswer = ''
    },
    handleRestart: (state) => {
      state.currentQuestionIndex = 0
      state.score = 0
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.questions = action.payload
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed'
      })
  },
})

export default quizSlice.reducer
export const { handleNextQuestion, handleAnswer, handleRestart, startQuiz } =
  quizSlice.actions
