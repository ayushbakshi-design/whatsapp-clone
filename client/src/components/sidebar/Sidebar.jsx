import React, { useState } from 'react'
import SideNav from './sideNav/SideNav'
import Search from './search/Search'
import './sidebar.css'
import Contact from './contact/Contact'
// this file has its own custom css file

function Sidebar() {

  const [contacts, setContacts] = useState([
    {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }, {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }, {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }, {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }, {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }, {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }, {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }, {
      titleName: "sofia",
      lastMsg: "hey meet me at 10",
      lastTime: "10/12/24",
      dpImage: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },


  ]);

  return (
    <React.Fragment>
      <div className="MainSideBarDiv">
        <SideNav />
        <Search />
        <div className="ContactScrooler">

          {contacts.map((item, index) => {
            return (
                <Contact key={index} dpImage={item.dpImage} titleName={item.titleName} lastMsg={item.lastMsg} lastTime={item.lastTime} />
            )
          })}

        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar