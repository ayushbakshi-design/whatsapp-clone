import React from 'react'

// icon imporsts 
import {BsCheck2All} from 'react-icons/bs';


function Contact(props) {
    return (
        <React.Fragment>
            <div className="ContactDiv">

                <div className="leftContactDiv">

                    {/* profile picture */}
                    <div className="ContactImgDiv">
                        <img className='ContactImage' src={props.dpImage} alt="dpImage" />
                    </div>


                    <div className="contactDetails">
                        <p className="titleName">{props.titleName}</p>
                        <p className='descriptionTxt'><BsCheck2All size={"0.8rem"}/>{props.lastMsg}</p>
                    </div>
                </div>


                <div className="timeDisplayContact">
                    <p className='timeDisplay'>{props.lastTime}</p>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Contact