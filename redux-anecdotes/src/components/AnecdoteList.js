import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    props.voteFor(anecdote)
    props.setNotification(`Voted for: ${anecdote.content.substring(0,20)}...`,10)
  }


  return (
    <div>
      {props.anecdotes
        .filter( c => c.content.toLowerCase().includes(props.filter.toLowerCase()))
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

const mapDispatchToProps = {
  voteFor,
  setNotification,
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)
export default ConnectedAnecdoteList