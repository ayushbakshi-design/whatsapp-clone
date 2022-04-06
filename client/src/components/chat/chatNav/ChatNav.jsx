import React from 'react'

// importing Icons
import { BiSearchAlt2 } from 'react-icons/bi'
import {BsThreeDotsVertical} from 'react-icons/bs';


function ChatNav() {
  return (
    <React.Fragment>

        <div className="ChatNavBar">

        <div className="leftNavChat">


        <img className='ContactProfile' src={"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"} alt="man" />

        <div className="OnlineName">
            <p className='Name'>John</p>
            <p className='onlineStatus'>online</p>
        </div>

        </div>


        <div className="rightNavChat">
          <BiSearchAlt2 color='#8B979D' size={'1.5rem'} />
          <BsThreeDotsVertical color="#8B979D" size={'1.5rem'}/>
        </div>


        </div>

    </React.Fragment>
  )
}

export default ChatNav