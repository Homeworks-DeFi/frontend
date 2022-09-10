import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./login.css"
function Login() {
    const [emailVal, setemailVal] = useState("");
    const [passwordVal, setpasswordVal] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='main_login'>
            <div className="login_container">
                <div className="container">
                    <div>
                        <img src="" alt="logo"  id='img__id'/>
                    </div>
                    <form onSubmit={handleSubmit} className="form">
                    <label className='label' for="email">Email</label>
                        <input className='input' placeholder='Email' type="email" id="email" value={emailVal} onChange={(e)=>{setemailVal(e.target.value)}}/>
                    <label className='label' for="pwd">Password</label>
                        <input  className='input' placeholder='Password'  type="password" id="pwd" value={passwordVal} onChange={(e) => {setpasswordVal(e.target.value)}}/>
                        <button type='submit' className='login__button'>Login</button>
                    </form>

                    <div className="footer">
                        <h4>Don't have an account yet? <Link to="/Signup" className='link'>Sign Up Now</Link></h4>
                    </div>

                </div>
            

        </div>
    </div>
  )
}

export default Login