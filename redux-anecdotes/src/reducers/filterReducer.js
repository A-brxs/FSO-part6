export const setFilter = (filter) => {

  return {
    type: 'FILTER',
    filter
  }
}

const filterReducer = (state = '', action) => {
  switch(action.type) {
    case 'FILTER':
      console.log('this is filter: ',action.filter)
      return action.filter
    default:
    console.log('filter default')
      return state
  } 
}


export default filterReducer