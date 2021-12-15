import anecdoteService from './../services/anecdotes'

export const createAnecdote = (data) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createAnecdote(data)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: anecdote
    })
  }
}

export const voteFor = (anecdote) => {
  return async dispatch => {
    
    const votedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const updatedAnecdote = await anecdoteService.castVote(votedAnecdote)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export const initiateAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [{content: '', id: '', votes: ''}], action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'VOTE': {
      const id = action.data.id
      return state.map(a =>
        a.id !== id ? a : action.data 
      )
     }
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer