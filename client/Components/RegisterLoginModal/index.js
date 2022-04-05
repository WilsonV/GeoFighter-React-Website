/* eslint-disable eol-last */
import React from 'react'
import Register from './Register'
import Login from './Login'

const RegisterLoginModal = ({ setRegisterLoginModal, login }) => {
  return (
    <div className='modal'>
      <section className='modal-main'>
        <button className='close' onClick={()=>setRegisterLoginModal(false)}>X</button>
        {login ? <Login setRegisterLoginModal={setRegisterLoginModal} />: <Register setRegisterLoginModal={setRegisterLoginModal}/>}

      </section>

    </div>
  )
}

export default RegisterLoginModal
