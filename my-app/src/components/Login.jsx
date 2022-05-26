import React from 'react'
import loginImg from '../assets/austin.jpg'


export default function Login () {
    return (
        <div className='relative w-full h-screen bg-[#2A363B]/50'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
        
        <div className='flex jusify-center items-center h-full'>
            <form className='max-w-[400px] w-full mx-auto bg-[#2A363B] text-white p-8 rounded-3xl'>
                <h2 className='text-4xl font-bold text-center py-4'>Everything Local</h2>
                <div className='flex flex-col mb-4'>
                    <label>Username:</label>
                    <input 
                    className='border relative bg-gray-100 text-black p-2' 
                    type='text' 
                    placeholder='Please enter your username'/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Password:</label>
                    <input 
                    className='border relative bg-gray-100 text-black p-2' 
                    type='password' 
                    placeholder='Please enter your password'/>
                </div>
                <button className='w-full py-3 mt-6 relative text-white'>Sign In</button>
                <span className='text-center mt-6'>Not a member? Sign up <a href='../components/FormSignup'>HERE</a>
                </span>
            </form>
        </div>
        </div>
    )
}