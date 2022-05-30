import React, { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    if(!localStorage.getItem("loggedIn")){
      localStorage.setItem("loggedIn",false);
    }
  },[]);
  return (
    <div>
      
    </div>
  )
}
