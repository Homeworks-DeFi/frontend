import React , { useState }from 'react'
import "./signup.css";
import {Link} from "react-router-dom"
function Signup() {
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  return (
      <div className="signup__container">
        <div className="top__right">

          <p>Already have an account?
          <Link id='links__login' to="/login">Login here</Link>
          </p>

          </div>
          <div className="main__body">
            <div className="body__container">
              <div className="h1">
              <h1>Create Account</h1>

              </div>
            <form onSubmit={handleSubmit}>
              <div className="input__group">
                <h5>
                  First Name
                </h5>
                <input placeholder='First name' type="text" name="FirstName" value={firstName} onChange={(e)=>{setfirstName(e.target.value)}} id="firstName" />                
                <h5>
                  Last Name
                </h5>
                <input type="text" placeholder='Last name' name="LastName" value={lastName} onChange={(e)=>{setlastName(e.target.value)}} id="lastName" />                
                <h5>
                  Email
                </h5>
                <input type="Email" placeholder='Email' name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} id="email" />                
                <h5>
                  Password
                </h5>
                <input type="password" placeholder='Password' value={password1} onChange={(e)=>{setpassword1(e.target.value)}} name="Password" id="password1" />                
                <h5>
                  Confirm password
                </h5>
                <input type="password" placeholder='Confirm Password' value={password2} onChange={(e)=>{setpassword2(e.target.value)}} name="Password" id="password2" />
              </div>
              <div className="button__parent">
              <button type='submit' className='signup__button'>Sign Up</button>
              </div>

            </form>
            </div>
          </div>
        </div>

  )
}

export default Signup