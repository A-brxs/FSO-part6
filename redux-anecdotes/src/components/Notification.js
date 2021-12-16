
import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if ( props.notification.status !== 'hidden' ) {
    return (
      <div style={style}>
        <b>{props.notification.msg}</b>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification