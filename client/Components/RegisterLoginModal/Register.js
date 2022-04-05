import React from 'react'

function Register({setRegisterLoginModal}) {
  return (
    <>
      <input type="text" required maxLength={12} minLength={4} placeholder='Username'></input>
      <input type="email" required placeholder='Email'></input>
      <input type="password" required placeholder='Password'></input>
      <input type="password" required placeholder='Confirm Password'></input>
      <div>
        <button onClick={()=>setRegisterLoginModal(true,true)}>Login Instead</button>
        <button>Register</button>
      </div>
    </>
  )
}

export default Register
