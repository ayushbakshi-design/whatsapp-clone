/* eslint-disable */

import React, { useState, useEffect } from 'react'
import SideNav from './sideNav/SideNav'
import Search from './search/Search'
import './sidebar.css'
import Conversation from './conversation/Conversation'
// this file has its own custom css file

// custom axios import for fetching data
import axios from '../../axios.js'


function Sidebar(props) {

  let tempVar = '';


  const [converSS, setConversations] = useState([
    {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }

  ]);





  // // using tempvar as useeffct trigger ;
  // useEffect(() => {
  //   axios.post("/findConversations", {
  //     name: props.currentUser
  //   }).then((responce) => {
  //     tempVar = responce
  //     console.log(responce)
  //   }).catch((err) => { console.log(err) })
    
  //   setConversations(tempVar)
  // }, [tempVar])



  return (
    <React.Fragment>
      <div className="MainSideBarDiv">
        <SideNav />
        <Search />
        <div className="ContactScrooler">

          {converSS.map((item, index) => {
            return (
              <Conversation key={index} dpImage={item.dpImage} titleName={item.titleName} lastMsg={item.lastMsg} lastTime={item.lastTime} />
            )
          })}

        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar