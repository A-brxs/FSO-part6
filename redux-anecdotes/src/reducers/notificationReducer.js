const initialState = {
  msg: '',
  status: 'hidden'
}

export const notificationChange = notification => {
  return {
    type: 'SET_NOTIFICATION',
    msg: notification,
    status: 'shown'
  }
}

export const hideNotification = () => {

  return {
    type: 'HIDE_NOTIFICATION',
    msg: '',
    status: 'hidden'
  }
}

const notificationReducer = (state = initialState, action) => {
  console.log('initial state', initialState)
  switch(action.type) {
    case 'SET_NOTIFICATION':
      console.log('set notification')
      // const showNotifState = {
      //   ...state,
      //   data: action.data,
      //   status: 'shown'
      // }
      // state = showNotifState
      return action
      case 'HIDE_NOTIFICATION':
      console.log('hide notification')
      // const hideNotifState = {
      //   ...state,
      //   status: 'hidden'
      // }
      // state = hideNotifState
      return action
      default:
      console.log('default')
      return state
  } 
}


export default notificationReducer