import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';

const Globe = () => {
	return (
		<>
			<mesh
                onPointerOver={() => console.log('Earth')}
                onClick={() => console.log('Clicked Earth')}
				visible
				position={[0, 0, 0]}
				rotation={[Math.PI / 2, 0, 0]}>
				<sphereGeometry args={[37, 62, 62]} />
				<meshStandardMaterial color='#607fb3' />
			</mesh>
		</>
	);
};

export default Globe;
