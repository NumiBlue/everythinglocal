import React from 'react'
import Success from '../assets/success-img.jpg'


const FormSuccess = () => {
  return (
    <div>
        <div className='bg-cyan-100 text-center'>Congrats! You're now part of the Everything Local community!</div>
        <img src={Success} alt='success'
        className='form-img'/>
    </div>
  )
}

export default FormSuccess