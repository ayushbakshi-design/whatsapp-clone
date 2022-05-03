import React, { useState } from 'react'
import { Link } from 'react-router-dom' 

import './styles/register.css'
import axios from './axios.js'

function RegisterPage() {



  // code for only manageing state of inputs 
  const [RegUserName, setRegUserName] = useState("");
  const [RegPhone, setRegPhone] = useState("");
  const [RegPassword, setRegPassword] = useState("");

  const handleRegUserName = (e) => {
    setRegUserName(e.target.value);
    console.log(e.target.value)
  }
  const handleRegPhone = (e) => {
    setRegPhone(e.target.value);
  }
  const handleRegPassword = (e) => {
    setRegPassword(e.target.value);
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    axios.post("/register", {
      "UserName": RegUserName,
      "PhoneNumber": RegPhone,
      "Password": RegPassword
    }).then(response => console.log(response)).catch((err) => {console.log(err)
    console.log("from login form")});

    confirm("Are you Sure credentials are correct ? ")
  }

  return (
    <React.Fragment>

      <div className="RegisterForm">

        <img src={require("./resources/logo.png")} alt="" />

        <form className="RegForm" onSubmit={handleRegistration} >
          <input onChange={handleRegUserName} type="text" className='registerInput' placeholder='Username' value={RegUserName} />
          <input onChange={handleRegPhone} type="tel" className='registerInput' placeholder='Phone Number' value={RegPhone} />
          <input onChange={handleRegPassword} type="password" className='registerInput' placeholder='Password' value={RegPassword} />


          <button type='submit' className='registerBtn'>Register Now</button>
        </form>
        <div className="noAccount">
          <p>Already have a account ? <br /><Link to={"/"}>Login Now</Link></p>
        </div>
      </div>
      <div className="decoration">
        <img className='phoneImg' src={require(`${"./resources/phone.png"}`)} alt="" />
      </div>
    </React.Fragment>
  )
}

export default RegisterPage