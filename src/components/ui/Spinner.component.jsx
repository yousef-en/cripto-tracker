import React from 'react'
import spinnerImg from '../../assets/image/spinner.gif'

const Spinner = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center ">
        <img 
          src={spinnerImg} 
          alt="spinner" 
          style={{ width: '160px', height: '160px' }}
        />
    </div>
  )
}

export default Spinner