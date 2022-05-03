import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'

function Home(props) {
    
    return (
        <React.Fragment>
            <Sidebar currentUser={props.currentuser}/>
            <Chat currentUser={props.currentuser}/>
        </React.Fragment>
    )
}

export default Home