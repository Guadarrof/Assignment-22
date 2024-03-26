import React from 'react';


const Message = ({message, display}) => {
  return (
    <div className='form_message' style= {{display}}>
        <p className='message_p'>{message}</p>
    </div>
  )
}

export default Message