import React from 'react'
import './chat.css'
import ChatInput from './chatInput/chatInput'
import ChatNav from './chatNav/ChatNav'
import MsgInterface from './msgInterface/msgInterface'

function Chat(props) {
  return (
    <React.Fragment>
      <div className="mainChatInterface">
        <ChatNav />
        <MsgInterface />
        <ChatInput />
      </div>
    </React.Fragment>
  )
}

export default Chat