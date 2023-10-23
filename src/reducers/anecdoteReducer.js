import { createSlice } from "@reduxjs/toolkit"

import anecdoteService from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      const anecdote = action.payload
      state.push(anecdote)
    },
    vote(state, action) {
      const id = action.payload
      const anecdotes = state.map(anecdote => {
        return anecdote.id !== id
                 ? anecdote 
                : {...anecdote, votes: anecdote.votes + 1 }
      })
      return anecdotes
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { appendAnecdote, vote, setAnecdotes, addAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.create(content)
    dispatch(appendAnecdote(anecdote))
  }
}

export const upvote = (anecdote) => {
  return async (dispatch) => {   
      const object = {content: anecdote.content, votes: anecdote.votes + 1}
      const updatedAnecdote = await anecdoteService.update(anecdote.id, object)
      dispatch(vote(updatedAnecdote.id)) 
  }
}

export default anecdoteSlice.reducer