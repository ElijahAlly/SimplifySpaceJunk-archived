import React from 'react';
import Globe from './components/globe';
import Sun from './components/sun';
import Satellites from './components/satellites';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const App = () => {
	return (
		<Canvas>
			<OrbitControls />
			<ambientLight intensity={0.3} />
			<spotLight position={[100, 5, 10]} angle={0.3} />
			<Globe />
			<Sun />
			<Satellites />
		</Canvas>
	);
};

export default App;
