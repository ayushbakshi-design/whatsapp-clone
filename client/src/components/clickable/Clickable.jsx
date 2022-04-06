import React from 'react'
import '../../styles/extra.css'


function Clickable(props) {
  return(
    <React.Fragment>
          <div className="outerCircle">
            {props.icon}
          </div>
    </React.Fragment>
  )
}

export default Clickable;