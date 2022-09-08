import React from 'react'
import { } from 'react-bootstrap'
import '../Style/Home.css'
import { AiOutlineUserSwitch } from "react-icons/ai";

const Home = () => {
  return (
        
        <div className='wrapper'>
          <div className='container'>
            <div className='row'>

            <div className='col-md-3'></div>
            <div className='col-md-6'>
            <div className='textWrapper'>


            <div className='title'>

              <h1>Welcome to Rich World</h1>

              </div>
              <div className='description'>

                <p>Get Free Membership And Come To Our World. After That Have A Good Time With Your Partner ND Every Premium Rocking Moment Share Our Timeline.</p>
                          
              </div>
              <div className='membershipButton'>
                <button className='btn shadow memberShipButton'>Membership <AiOutlineUserSwitch /></button>
            </div>


            </div>
            </div>
            <div className='col-md-3'></div>

            </div>
          </div>
        </div>
        
  )
}

export default Home
