import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
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

  const makeVote = (id, content) => {
    console.log('vote', id)
    dispatch(vote(id))
    dispatch(createNotification(`you voted '${content}'`))
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