/* eslint-disable eol-last */
import React from 'react'

const RegisterModal = ({ handleVisibility }) => {
  return (
    <div className='modal'>
      <section className='modal-main'>
        <button className='close' onClick={handleVisibility}>X</button>
        <input type="text" maxLength={12} placeholder='Username'></input>
        <input type="email" placeholder='Email'></input>
        <input type="password" placeholder='Password'></input>
        <div>
          <button>Login Instead</button>
          <button>Register</button>
        </div>

      </section>

    </div>
  )
}

export default RegisterModal
