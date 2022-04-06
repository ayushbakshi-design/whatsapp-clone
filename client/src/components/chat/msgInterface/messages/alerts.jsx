import React from 'react'
import {FaLock} from 'react-icons/fa'

function Alerts() {
  return (
    <React.Fragment>

        <div className="Alert">
            <p className='encryptedChatAlert'>
                <FaLock />
                Messages and calls are end-to-end encrypted. No one outside of this chat, not even whatsapp, can read or listen to them. Tap to learn more.
            </p>
        </div>
    </React.Fragment>
  )
}

export default Alerts