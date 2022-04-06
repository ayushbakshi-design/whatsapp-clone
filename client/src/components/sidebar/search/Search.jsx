import React from 'react'
import '../../../styles/extra.css'
// this file will import css from 'extra.css

// icon imports 
import { BiSearchAlt2 } from 'react-icons/bi'

function Search() {
  return (
    <React.Fragment>
      <div className="searchContainer">
        <div className="searchIconDiv">
          <BiSearchAlt2 className='searchIcon' color='#8696A0'  size={"1.7rem"}/>
        </div>
        <input className='searchBar' type="text" placeholder='search or start a new chat' />
      </div>
    </React.Fragment>
  )
}

export default Search