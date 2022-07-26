import React from 'react'

const Message = ({msg, bgColor}) => {
  let styles = {
      backgroundColor: bgColor, 
  }
    return (
    <div style={styles} className="msg">
        <p>{msg}</p>
    </div>
  )
}

export default Message