import React from 'react'

// importing icons
import {BsEmojiSmile, BsFillMicFill} from 'react-icons/bs'
import {AiOutlinePaperClip}  from 'react-icons/ai'


function ChatInput() {
  return (
    <React.Fragment>
        <div className="chatBottom">

            <div className="leftemoji">
                <BsEmojiSmile className='BottomChatIcon' size={"1.6rem"}/>
                <AiOutlinePaperClip className='BottomChatIcon' size={"1.6rem"}/>
            </div>

            <div className="mainInputChat">
                <input className='mainInput' type="text" placeholder='Type a message'/>
            </div>

            <div className="recordDiv">
                <BsFillMicFill className='BottomChatIcon' size={'1.6rem'}/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ChatInput