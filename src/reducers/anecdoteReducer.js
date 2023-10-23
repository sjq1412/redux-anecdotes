import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const anecdote = action.payload
      state.push(asObject(anecdote))
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

export const { createAnecdote, vote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer