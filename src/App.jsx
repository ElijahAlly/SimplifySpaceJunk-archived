import React from 'react';
import Globe from './components/globe'
import Sun from './components/sun'
import Satellites from './components/satellites'
import { OrbitControls, Stars } from '@react-three/drei';
import { sgp4, propagate, twoline2satrec, degreesToRadians, gstime, degreesLat, degreesLong, eciToGeodetic, radiansToDegrees } from 'satellite.js';
import { Canvas } from '@react-three/fiber';

const App = () => {
    return (
        <Canvas>
            <OrbitControls />
            <Stars/>
            <ambientLight intensity={0.3}/>
            <spotLight position={[10, 5, 10]} angle={0.3}/>
            <Globe />
            <Sun />
            <Satellites />
        </Canvas>
    );
}
 
export default App;