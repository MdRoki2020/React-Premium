import React from 'react'
import roundLoader from "../assets/images/loading2.svg"
import '../Style/loader.css';


function RoundLoader(){
  return (
    <div className='ProcessingDiv'>
        <div className='center-screen'>
            <img className='loader-size' src={roundLoader} alt='loader'/>
        </div>
    </div>
  )
}

export default RoundLoader;
