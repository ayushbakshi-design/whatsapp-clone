import React from 'react'
import Clickable from '../../clickable/Clickable'

// icon imorts 
import {MdWhatshot} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai';
import {BsThreeDotsVertical} from 'react-icons/bs';


// 
function SideNav() {
    return (
        <React.Fragment>
            <div className="wrapperSideNav">

                {/* profile pricture */}
                <div className="leftContainerSideNav">
                    <img src={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"} alt="" className="SideNavImg" />

                </div>

                <div className="rightContainerSideNav">

                    <Clickable  icon={<MdWhatshot className="NavIcons" size={"2rem"} color={"#AEBAC1"}/>} />
                    <Clickable  icon={<AiOutlineMessage className="NavIcons" size={"2rem"} color={"#AEBAC1"}/>} />
                    <Clickable  icon={<BsThreeDotsVertical className="NavIcons" size={"2rem"} color={"#AEBAC1"} />} />
                </div>



            </div>
        </React.Fragment>
    )
}

export default SideNav