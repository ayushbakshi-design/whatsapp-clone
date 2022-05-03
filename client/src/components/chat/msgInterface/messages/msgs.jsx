/* eslint-disable */
import React, { useState } from 'react'


function Msgs() {

  const [MsgList, setMsgList] = useState([
    {
      message: "Hi, John how are you",
      status: "sent",
      seen: "yes",
      time: "02:14"
    },
    {
      message: "Hello, Ayush I am good how are you",
      status: "recived",
      seen: "yes",
      time: "02:14"
    },
    {
      message: "I am good too, where are you ? ",
      status: "sent",
      seen: "yes",
      time: "02:14"
    },
    {
      message: "Actually i am in toronto related to my work with a new compnay you remember na i joined a new company recently so because of that its hard too meet soon sry man",
      status: "recived",
      seen: "yes",
      time: "02:14"
    },
    {
      message: "i understand man i am also busy working on my new company!!! remember to i told you i am gonna start an Ai solutions company i officialy registered it last week and now hiring people to work",
      status: "sent",
      seen: "yes",
      time: "02:14"
    }
  ])

  return (
    <React.Fragment>

      {MsgList.map((item,index) => {
        return (
            <div className="MsgContainer" key={index}>
              <div className={item.status==="sent"? "sentMsg msg":"recivedMsg msg"}>
                <p>{item.message}</p>
                <p className='msgTime'>{item.time}</p>
              </div>
            </div>
        )
      })} 

    </React.Fragment>
  )
} 

export default Msgs