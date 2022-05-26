import React from 'react';
import Typed from 'react-typed';
import backgroundImage from '../assets/mural.jpg';
import FormSignup from '../components/FormSignup';

const Hero = () => {
    return (
    <div name='hero' className='w-full h-screen'>

        <div style={{backgroundImage: `url(${backgroundImage})`}}
        className='bg-cover flex flex-col justify-center text-center h-full'>
        <br></br>
        <br></br>
            <p className='text-[#FF847C] font-bold p-2'>text</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font bold md:py-6 text-[#E84A5F]'>text </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold text-[#E84A5F]'>in</p>
                <Typed 
                className='md:text-5xl sm:text 4xl text-xl font-bold pl-2 text-[#99B898]'
                strings={['Austin, Texas']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop
                 />
                 </div>
                 <div>
                     <button onClick={FormSignup} className='bg w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Sign Up/Sign In</button>
                 </div>
            
        </div>
    </div>
        
        
    )   
}

export default Hero