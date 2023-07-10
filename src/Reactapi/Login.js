import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Silder from './Silder'
const Login = () => {
  const [showsite, setShowsite] = useState(false)
  const  localSign = localStorage.getItem("Signup")
  const name  = useRef()
  const email = useRef()
  const password = useRef()
  const handlechange = () => {
    // e.preventDefault()
  }

  const handlebtn = () => {
    console.log(name.current.value,email.current.value,password.current.value)
    if(name.current.value,email.current.value,password.current.value){
    localStorage.setItem("name",name.current.value)
    localStorage.setItem("email",email.current.value,)
    localStorage.setItem("password",password.current.value)
    localStorage.setItem("Signup",email.current.value)
    alert("Yes! Your Idea Is SuccessFully!!")
    window.location.reload()
    }
  }
  useEffect(()=>{
    if(localSign)
    {
      setShowsite(true)
    }
  })
  return (
    <div>
      {showsite?<Navbar />:
    <div className='bg-1'>
      <div className='cen'>
        <div className='bg-login'>
        <h4>WEL COME</h4>
        <div className='input-bg'>
          <FontAwesomeIcon icon={faUser} className='input-icon'/> <input type='text' name='name ' ref={name} 
           onChange={handlechange} placeholder='Username' />
        </div>
        <div className='input-bg'>
           <FontAwesomeIcon icon={faEnvelope} className='input-icon'/><input type='text' name='email'ref={email} 
            onChange={handlechange} placeholder='Email' />
        </div>
        <div className='input-bg'>
          <FontAwesomeIcon icon={faKey} className='input-icon'/><input type="password" name='password' ref={password} 
           onChange={handlechange} placeholder='Password' />
        </div>
        <div>
            <button className='btn-login' onClick={handlebtn}>Sign Up</button>
        </div>
            <div className='login-text-1'>
                <h6>OR LOGIN WITH</h6>
            </div>
            <div className='line'></div>
            <div className='bott-text'>
                <h5>FORGOT PASSWORD ?</h5>
            </div>
            </div>
      </div>
    </div>
}
    </div>
  )
}

export default Login
