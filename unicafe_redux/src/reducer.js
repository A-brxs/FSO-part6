const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const updateGood = {
        ...state,
        good: state.good + 1
      }
      state = updateGood
      return state
    case 'OK':
      const updateOk = {
        ...state,
        ok: state.ok + 1
      }
      state = updateOk
      return state
    case 'BAD':
      const updateBad = {
        ...state,
        bad: state.bad + 1
      }
      state = updateBad
      return state
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer