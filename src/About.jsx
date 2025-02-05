import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import CustomButton from './component/CustomButton';

export default function About() {
  return (
    <div className='about'>
        <div className='container d-flex justify-content-center align-items-center flex-column text-center '>
            <div className='row mt-5 mb-5'>
                <div className='col-md-12'>
                <h2 className='text-white fw-bold'>ABOUT</h2>
                <div className='d-flex justify-content-center align-items-center'>
                                                <hr className='custom-hr '/>
                                                <FontAwesomeIcon icon={faStar} size="2x"color='white' /> 
                                                <hr className='custom-hr '/>
                                                </div>
                <div className='d-flex justify-content-center align-items-center flex-wrap m-5 text-start'>
                    <div className='col-md-5 m-2'>
                    <p className='text-white fs-5'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className='col-md-5 m-2'>
                    <p className='text-white fs-5'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
                </div>
                <CustomButton text='Free Download' style='download' />
                

                </div>
            </div>
            </div>
        
        
    </div>
  )
}
