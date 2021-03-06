import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'
const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createAnecdote = async content => {
  const object = { content, votes: 0, id: getId() }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const castVote = async (anecdoteObject) => {
  const response = await axios.put( `${baseUrl}/${anecdoteObject.id}`, anecdoteObject )
  return response.data
}


export default { 
  getAll, 
  createAnecdote,
  castVote,
}