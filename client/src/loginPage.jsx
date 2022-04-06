import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './styles/register.css'




function LoginPage() {

  
  const [LogUserName, setLogUserName] = useState("");
  const [LogPassword, setLogPassword] = useState("");


  // Functions for updating the state of input boxes 
  const handleLogUserName = (e) =>{
    setLogUserName(e.target.value);
    console.log(e.target.value)
  }
  const handleLogPassword = (e) =>{
    setLogUserName(e.target.value);
  }

  const handleLoginForm = (e) =>{
    e.preventDefault();
  }

  return (
    <React.Fragment>
      <div className="RegisterForm">

        <img src={require("./resources/logo.png")} alt="logo" />

        <form className="loginForm" onSubmit={handleLoginForm} >
          <input type="text" onChange={handleLogUserName} className='registerInput' placeholder='Username or Number' value={LogUserName} />
          <input type="text" onChange={handleLogPassword} className='registerInput' placeholder='Password' value={LogPassword} />

          <button type='submit' className='registerBtn'>Login Now</button>
        </form>
        <div className="noAccount">
          <p>not have a account ? <br/><Link to={"/register"}>Create One Now</Link></p>
        </div>

      </div>
      <div className="decoration">
        <img className='phoneImg' src={require(`${"./resources/phone.png"}`)} alt="" />
      </div>
    </React.Fragment>
  )
}

export default LoginPage