import React from 'react'
import CustomButton from './component/CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 

export default function Contact() {
  return (
    <div className='cont'>
        <div className='container d-flex justify-content-center align-items-center flex-column text-center '>
            <div className='row mt-5 mb-5'>
                <div className='col-md-12'>
                    <h2 className='fw-bold'>CONTACT ME</h2>
                    <div className='d-flex justify-content-center align-items-center'>
                                                    <hr className='custom-hr p'/>
                                                    <FontAwesomeIcon icon={faStar} size="2x" /> 
                                                    <hr className='custom-hr p'/>
                                                    </div>
                    <form className='form'>
                        <input className='form-control mb-3' type='text' placeholder='Full Name'/>
                        <input className='form-control mb-3' type='email' placeholder='Email Address'/>
                        <input className='form-control mb-3' type='text' placeholder='Phone Number'/>
                        <textarea className='form-control mb-3' placeholder='Message'/>
                        <div className='text-start'>
                            <CustomButton text='Send' style='send' />
                            </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
