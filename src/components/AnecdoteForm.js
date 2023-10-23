import React from 'react'
import { useDispatch } from 'react-redux'

import anecdoteService from "../services/anecdotes"
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = async (event) => {
        event.preventDefault()

        const {value} = event.target.anecdote
        event.target.anecdote.value = ""

        const anecdote = await anecdoteService.create(value)
        dispatch(createAnecdote(anecdote))
      }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div><input name="anecdote" /></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm