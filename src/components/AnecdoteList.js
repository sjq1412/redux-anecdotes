import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { upvote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter}) => {
    console.log(anecdotes)
    if (filter === "") {
      return anecdotes
    } else {
      return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    }
  })
  const dispatch = useDispatch()

  const makeVote = (id) => {
    console.log('vote', id)
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)

    dispatch(upvote(anecdote))
    dispatch(createNotification(`you voted '${anecdote.content}'`))
  }

  return (
    <div>
        {anecdotes.slice().sort((a,b) => b.votes - a.votes).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                  {anecdote.content}
              </div>
              <div>
                  has {anecdote.votes}
                  <button onClick={() => makeVote(anecdote.id, anecdote.content)}>vote</button>
              </div>
            </div>
        )}
    </div>
  )
}

export default AnecdoteList