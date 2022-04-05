import React from 'react'

function Login({setRegisterLoginModal}) {
  return (
    <>
      <input type="text" maxLength={12} placeholder='Username'></input>
      <input type="password" placeholder='Password'></input>
      <div>
        <button onClick={()=>setRegisterLoginModal(true,false)}>Register Instead</button>
        <button>Login</button>
      </div>
    </>
  )
}

export default Login
