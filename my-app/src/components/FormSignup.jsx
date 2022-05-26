import React from 'react';
import signupImg from '../assets/austin.jpg';
import useForm from '../components/useForm';
import validate from '../components/validateInfo';



const FormSignup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors }
     = useForm( 
         submitForm, validate
         );
    
    return (
        <div className='relative w-full h-screen bg-[#2A363B]/50'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={signupImg} alt="austin" />
        
        <div className='flex jusify-center items-center h-full'>
            <form className='max-w-[400px] w-full mx-auto bg-[#2A363B] text-white p-8 rounded-3xl' onSubmit={handleSubmit}>
                <h1 className='text-3xl font-bold text-center py-4 '>Everything Local</h1>
                <h2>Sign up today! Create your account by filling out the information below.</h2>
                <br></br>
                <div className='flex flex-col mb-4'>
                    <label>Username:</label>
                    <input 
                    id='username' 
                    name='username' 
                    className='border relative bg-gray-100 text-black p-2' 
                    type='text' 
                    placeholder='Please enter your username'
                    value={values.username}
                    onChange={handleChange}
                    />
                    {errors.username && <p className='text-red-600'>{errors.username}</p>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Email:</label>
                    <input 
                    id='email' 
                    name='email' 
                    className='border relative bg-gray-100 text-black p-2' 
                    type='email' 
                    placeholder='Please enter your email'
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p className='text-red-600'>{errors.email}</p>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Password:</label>
                    <input 
                    id='password' 
                    name='password' 
                    className='border relative bg-gray-100 text-black p-2' 
                    type='password' 
                    placeholder='Please enter your password'
                    value={values.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p className='text-red-600'>{errors.password}</p>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Confirm Password:</label>
                    <input 
                    id='confirmPassword' 
                    name='confirmPassword' 
                    className='border relative bg-gray-100 text-black p-2' 
                    type='Password' 
                    placeholder='Please confirm your password'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword}</p>}
                </div>
                <button className='w-full py-3 mt-6 relative text-white'>Register</button>
                <span className='text-center mt-6'>Already have an account? Sign in <a href='../components/Login'>HERE</a>
                </span>
            </form>
        </div>
        </div>
    )
}

export default FormSignup