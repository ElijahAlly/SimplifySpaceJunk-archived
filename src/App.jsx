import React from 'react';
import Globe from './components/globe';
import Sun from './components/sun';
import SatelliteInfoModal from './components/satellite_info_modal';
import Satellites from './components/satellites';
import GetMoreSatellites from './components/get_more_satellites';
import { OrbitControls } from '@react-three/drei';
import { Canvas, extend } from '@react-three/fiber';
extend({ OrbitControls })

const App = () => {
	return (
		<>
			<SatelliteInfoModal />
			<GetMoreSatellites />
			<Canvas>
				<OrbitControls />
				<ambientLight intensity={0.3} />
				<spotLight position={[100, 5, 10]} angle={0.3} />
				<Globe />
				<Sun />
				<Satellites />
			</Canvas>
		</>
	);
};

export default App;
