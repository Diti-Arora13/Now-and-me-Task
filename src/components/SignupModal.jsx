import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const SignupModal = ( { setShowModal }) => {
  const [signup, setSignup] = useState(true)

  return (
    <div className='absolute flex justify-center items-center bg-black z-10 top-0 bg-opacity-50 h-screen w-full'>
      {/* gradient border */}
      <div className={`${signup ? 'h-bigger-h' : 'h-smaller-h'} gradient-bg absolute rounded-md z-20`}></div>

      <div className="bg-gray inline-block px-6 py-8 rounded-md relative z-30 w-1/4 text-white">
          <AiOutlineClose onClick={() => setShowModal(false)} className='absolute bg-black-bg rounded-full p-2 text-xl right-3 top-3 cursor-pointer' />
          
          <h3 className="text-sm text-light-placeholder-gray text-center">{signup ? 'SIGN UP' : 'WELCOME BACK'}</h3>
          <h2 className="text-white text-lg font-medium text-center mb-7">{signup ? 'Create an account to continue' : 'Log into your account'}</h2>

          <label className='text-sm text-dim-white'>{signup ? 'Email' : 'Email or Username'}</label><br />
          <input type="text" placeholder={signup ? 'Enter your email' : 'Enter your email or password'} className="input-field" />

          {signup && <><label className='text-sm text-dim-white mt-4 inline-block'>Username</label><br />
          <input type="text" placeholder='Choose a preferred username' className="input-field" /></>}
          
          <div className="flex justify-between items-center mt-4">
              <label className='text-sm text-dim-white'>Password</label>
              {!signup && <label className='text-ex-small text-dim-white cursor-pointer'>forgot password?</label>}
          </div>
          <div className="relative">
              <input type="text" placeholder={signup ? 'Choose a strong password' : 'Enter your password'} className="input-field" /> 
              <AiOutlineEye className="absolute top-5 right-4 text-light-placeholder-gray text-lg cursor-pointer" />
          </div>

          <button className="bg-blue w-full py-2 rounded-md mt-4">{signup ? 'Continue' : 'Login now'}</button>
          <p onClick={() => setSignup(!signup)} className=' cursor-pointer text-ex-small w-full flex mt-4 text-dim-white'>{signup ? 'Already have an account' : 'Not registered yet?'} 
              <span className="text-white ml-2 flex items-center">
                  {signup ? 'Login ' : 'Register'}
                  <AiOutlineArrowRight className='ml-1' />
              </span>
          </p>
      </div>
    </div>
  )
}

export default SignupModal