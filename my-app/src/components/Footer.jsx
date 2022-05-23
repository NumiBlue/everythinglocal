import React from 'react'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
    return (
      <div className='max-w-[1240px] mx-auto py-16 px-4  bg-gradient-to-r from-black to-[#2A363B]'>
        <div>
            <h1 className='w-full text-3xl font-bond text-[#E84A5F]'>Everything Local</h1>
            <p className='py-4 text-[#99B898]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure quidem doloremque dolor alias aliquam id cum, minus laudantium consequuntur molestias. Necessitatibus, maiores quos. Voluptatum voluptate aperiam numquam laborum accusantium!</p>
            <div className=' text-[#99B898] flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
    </div>
    )
}

export default Footer