import React, { useEffect, useState } from 'react';
import { Pannellum } from 'pannellum-react';
import myImage from '../assets/image/6.jpg';
import Axios from 'axios';

const PannellumReact = () => {

    const [roomImage,setRoomImage]=useState({});

    useEffect(()=>{
        fetchRoom();
    },[])

    const fetchRoom= async()=>{
        try{
            const res=await Axios.get('http://localhost:5000/api/v1/GetImage/643f8e49e4b6a8a13931e994');
            setRoomImage(res.data);
        }catch(err){
            console.error(err);
        }
    }

  return (
    <div>
      <h1>Pannellum React Component</h1>
      <Pannellum
  width="800px"
  height="500px"
  image={roomImage.image}
  pitch={10}
  yaw={180}
  hfov={110}
  autoLoad
  autoRotate={20}
  onLoad={() => {
    console.log("panorama loaded");
  }}
/>
    </div>
  );
};

export default PannellumReact;
