import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FaCommentDots } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdOutlineModeComment } from 'react-icons/md';
import SignupModal from './SignupModal';
import Login from './Login';
import PfpOne from '../assets/pfp1.avif'
import PfpTwo from '../assets/pfp2.avif'

const Home = () => {
    const [ showModal, setShowModal ] = useState(false)

  return (
    <div className={`${showModal && 'h-screen overflow-hidden'} flex justify-center items-center`}>
        {showModal && <SignupModal setShowModal={setShowModal} /> }

        <div className="w-2/4">
            {/* GREETINGS */}
            <div className="w-full my-12">
                <h1 className="text-dim-white text-xl font-medium">Hello Jane</h1>
                <p className="text-light-placeholder-gray text-md w-3/4 font-normal">How are you doing today? Would you like to share something with the community 🤗</p>
            </div>

            {/* CREATE POST */}
            <div onClick={() => setShowModal(true)} className="bg-gray p-4 rounded-md border-2 border-border-color flex flex-col items-end">
                <p className="text-lg text-white w-full">Create post</p>

                <div className="mt-5 bg-post-black p-4 rounded-md flex w-full ">
                    <FaCommentDots className='text-2xl p-3 rounded-full bg-gray text-white' />
                    <textarea placeholder='How are you feeling today?' className="text-light-placeholder-gray ml-5 bg-transparent resize-none outline-none w-full"></textarea>
                </div>

                <button className='bg-blue py-2 px-7 mt-4 cursor-pointer rounded-md text-white font-medium'>Post</button>

            </div>

            {/* POST-1 */}
            <div onClick={() => setShowModal(true)} className="bg-gray p-4 rounded-md border-2 border-border-color mt-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img className='rounded-full h-14 w-14 object-cover' alt="pfp" src={PfpOne} />
                        <div className="ml-2">
                            <h1 className="text-md text-dim-white">Theresa Webb</h1>
                            <p className="text-light-placeholder-gray text-sm">5min ago</p>
                        </div>
                    </div>

                    <FiMoreHorizontal className='text-lg text-dim-white cursor-pointer' />
                </div>

                <div className="mt-5 bg-post-black p-4 rounded-md flex w-full items-start ">
                    <p className='text-lg p-3 rounded-full bg-gray text-white'>👋🏻</p>

                    <p className="text-light-placeholder-gray ml-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                <div className="flex items-center mt-4">
                    <MdOutlineModeComment className='text-dim-white font-lg' />
                    <p className='text-dim-white text-sm ml-2'>24 comment</p>
                </div>
            </div>

            {/* POST-2 */}
            <div onClick={() => setShowModal(true)} className="bg-gray p-4 rounded-md border-2 border-border-color mt-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img className='rounded-full h-14 w-14 object-cover' alt="pfp" src={PfpTwo} />
                        <div className="ml-2">
                            <h1 className="text-md text-dim-white">Marvin McKinney</h1>
                            <p className="text-light-placeholder-gray text-sm">8min ago · Edited</p>
                        </div>
                    </div>

                    <FiMoreHorizontal className='text-lg text-dim-white cursor-pointer' />
                </div>

                <div className="mt-5 bg-post-black p-4 rounded-md flex w-full items-start ">
                    <p className='text-lg p-3 rounded-full bg-gray text-white'>😔</p>

                    <p className="text-light-placeholder-gray ml-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                <div className="flex items-center mt-4">
                    <MdOutlineModeComment className='text-dim-white font-lg' />
                    <p className='text-dim-white text-sm ml-2'>24 comment</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home