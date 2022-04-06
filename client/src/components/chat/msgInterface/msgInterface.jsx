import React from 'react'
import Alerts from './messages/alerts'
import Msgs from './messages/msgs'

function MsgInterface() {
  return (
    <React.Fragment>
        <div className="msgInterface">
            <Alerts />
            <Msgs />
        </div>
    </React.Fragment>
  )
}

export default MsgInterface