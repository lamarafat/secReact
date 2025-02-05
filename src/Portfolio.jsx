import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import port1 from './assets/cabin.png';
import port2 from './assets/cake.png';
import port3 from './assets/circus.png';
import port4 from './assets/game.png';
import port5 from './assets/safe.png';
import port6 from './assets/submarine.png';

export default function Portfolio() {
  return (
    <div className='portfolio'>
        <div className='container d-flex justify-content-center align-items-center flex-column text-center '>
            <div className='row mt-5 mb-5'>
                <div className='col-md-12'>
                    <h1 className=' fw-bold'>PORTFOLIO</h1>
                    <div className='d-flex justify-content-center align-items-center'>
                                <hr className='custom-hr p'/>
                                <FontAwesomeIcon icon={faStar} size="2x" /> 
                                <hr className='custom-hr p'/>
                                </div>
                                <div className='d-flex justify-content-center align-items-center flex-wrap m-5'>
                                    <div className='col-md-3 m-1'>
                                        <img className='img-fluid' src={port1} width={500}  />
                                    </div>
                                    <div className='col-md-3 m-1'>
                                        <img className='img-fluid' src={port2} width={500} />
                                    </div>
                                    <div className='col-md-3 m-1'>
                                        <img className='img-fluid' src={port3} width={500} />
                                    </div>
                                    <div className='col-md-3 m-1'>
                                        <img className='img-fluid' src={port4} width={500}  />
                                    </div>
                                    <div className='col-md-3 m-1'>
                                        <img className='img-fluid' src={port5} width={500} />
                                    </div>
                                    <div className='col-md-3 m-1'>
                                        <img className='img-fluid' src={port6} width={500} />
                                    </div>
                                    
                                    
                                    </div>
                                    
                    </div>
            </div>
        </div>
    </div>
  )
}
