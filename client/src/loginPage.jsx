import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// personal dependices
import './styles/register.css'
import axios from './axios.js'




function LoginPage(props) {

  let navigate = useNavigate();


  const [LogUserName, setLogUserName] = useState("");
  const [LogPassword, setLogPassword] = useState("");


  // Functions for updating the state of input boxes 
  const handleLogUserName = (e) => {
    setLogUserName(e.target.value);
  }
  const handleLogPassword = (e) => {
    setLogPassword(e.target.value);
  }

  const handleLoginForm = (e) => {
    e.preventDefault();
    axios.post('/login', {
      "UserName": LogUserName,
      "Password": LogPassword
    }
    ).then((data) => {
      if (data.data.length > 0) {
        navigate('/home')

        // Sending data to App.js component as Username for furthur Msg conversation model
        props.getUserData(LogUserName);


      } else {
        navigate('/')
        alert("Credentials not found")
      }
    })
      .catch((err) => {
        console.log(err)
        console.log("from login from")
      });
  }

  return (
    <React.Fragment>
      <div className="RegisterForm">

        <img src={require("./resources/logo.png")} alt="logo" />

        <form className="loginForm" onSubmit={handleLoginForm} >
          <input type="text" onChange={handleLogUserName} className='registerInput' placeholder='Username or Number' value={LogUserName} />
          <input type="password" onChange={handleLogPassword} className='registerInput' placeholder='Password' value={LogPassword} />

          <button type='submit' className='registerBtn'>Login Now</button>
        </form>
        <div className="noAccount">
          <p>not have a account ? <br /><Link to={"/register"}>Create One Now</Link></p>
          <p className='forgot'> Forgot password ? </p>

        </div>

      </div>
      <div className="decoration">
        <img className='phoneImg' src={require(`${"./resources/phone.png"}`)} alt="" />
      </div>
    </React.Fragment>
  )
}

export default LoginPage