import React from 'react';
import { Box, Sphere, Cylinder, Plane, Sky, Text, Scene } from 'react-aframe-ar';
import backgroundImage from '../assets/image/sky.jpg';

const Home = () => {
  return (
    <div>
      <Scene>
        <Sky src={backgroundImage} rotation='0 -130 0' />
        <Box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow />
        <Sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow />
        <Cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
        <Plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BCBA4" shadow />
      </Scene>
    </div>
  )
}

export default Home;
