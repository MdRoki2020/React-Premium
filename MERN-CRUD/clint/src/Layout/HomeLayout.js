import React from 'react'
import Home from '../components/pages/Home'
import NavBar from '../components/pages/NavBar'

const HomeLayout = () => {
  return (
    <div>
      <NavBar/>
        <Home />
    </div>
  )
}

export default HomeLayout
