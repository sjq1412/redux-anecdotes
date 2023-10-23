import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
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

export const { createAnecdote, vote, setAnecdotes, addAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer