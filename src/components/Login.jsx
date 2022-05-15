import React from 'react'
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Logo from '../assets/Logo.png'

const Login = () => {
    let navigate = useNavigate()
  return (
      <div className='min-h-screen min-w-screen flex flex-col justify-center gap-12 items-center'>
        <img alt="logo" src={Logo} />

        <div className="gradient-bg absolute rounded-md z-0 mt-24 mb-2"></div>

        <div className="bg-gray inline-block px-6 py-8 rounded-md z-10 w-1/4 text-white">
            <h3 className="text-sm text-light-placeholder-gray text-center">WELCOME BACK</h3>
            <h2 className="text-white text-lg font-medium text-center mb-7">Log into your account</h2>

            <label className='text-sm text-dim-white'>Email or Username</label><br />
            <input type="text" placeholder='Enter your email or password' className="input-field" />
            
            <div className="flex justify-between items-center mt-4">
                <label className='text-sm text-dim-white'>Password</label>
                <label className='text-ex-small text-dim-white cursor-pointer'>forgot password?</label>
            </div>
            <div className="relative">
                <input type="text" placeholder='Enter your password' className="input-field" />
                <AiOutlineEye className="absolute top-5 right-4 text-light-placeholder-gray text-lg cursor-pointer" />
            </div>

            <button onClick={() => navigate('/home')} className="bg-blue w-full py-2 rounded-md mt-4">Login now</button>
            <p className='text-ex-small w-full flex mt-4 text-dim-white'>Not registered yet? 
                <span className="text-white ml-2 flex items-center">
                    Register
                    <AiOutlineArrowRight className='ml-1' />
                </span>
            </p>
        </div>
    </div>
  )
}

export default Login