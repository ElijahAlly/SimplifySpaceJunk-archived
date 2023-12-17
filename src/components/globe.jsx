import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
// import EarthImg from '../../public'

const Globe = ({ focusOnSatellite }) => {
	const earthTexture = useLoader(TextureLoader, '/images/earth.jpg');

	return (
		<>
			<mesh
				onPointerOver={ () => console.log('Earth') }
				onClick={ () => focusOnSatellite([0, 0, 0]) }
				visible
				position={ [0, 0, 0] }
				rotation={ [Math.PI / 14, 3, 6] }>
				<sphereGeometry args={ [2, 34, 34] } />
				<meshStandardMaterial map={ earthTexture } />
			</mesh>
		</>
	);
};

export default Globe;
