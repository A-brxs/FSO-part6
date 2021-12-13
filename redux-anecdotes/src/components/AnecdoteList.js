import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from './../reducers/anecdoteReducer'
import { hideNotification, notificationChange } from './../reducers/notificationReducer'


const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(voteFor(anecdote.id))
    dispatch(notificationChange(`Voted for: ${anecdote.content.substring(0,20)}...`))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
  }

  return (
    <div>
      {anecdotes
        .filter( c => c.content.toLowerCase().includes(filter.toLowerCase()))
        .sort( (a,b) => b.votes - a.votes )
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={ () => vote(anecdote) }>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList