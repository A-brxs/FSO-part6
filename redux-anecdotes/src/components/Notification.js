
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector( state => state.notification )
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if ( notification.status !== 'hidden' ) {
    return (
      <div style={style}>
        <b>{notification.msg}</b>
      </div>
    )
  } else {
    return null
  }
}

export default Notification