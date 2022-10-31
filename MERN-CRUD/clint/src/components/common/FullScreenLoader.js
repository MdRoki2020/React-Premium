import React from 'react'
import loader from "../assets/images/loading.svg"
import '../Style/loader.css';

function FullScreenLoader(){
    return(
        <div className='ProcessingDiv'>
            <div className='center-screen'>
                <img className='loader-size' src={loader} alt='loader'/>
            </div>
        </div>
    )
}



export default FullScreenLoader;