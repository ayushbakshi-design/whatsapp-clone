import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'

function Home() {
    return (
        <React.Fragment>
            <Sidebar />
            <Chat />
        </React.Fragment>
    )
}

export default Home