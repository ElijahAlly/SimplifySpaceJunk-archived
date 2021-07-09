import React, { Component } from 'react';
import {
	propagate,
	twoline2satrec,
} from 'satellite.js';

const Satellite = ({ satellite }) => {
	// Initialize a satellite record
	let satrec = twoline2satrec(satellite.line1, satellite.line2);
	const positionAndVelocity = propagate(satrec, new Date());

	// get position
	let positionEci = positionAndVelocity.position;

	// x, y, z, coordinates
	let satelliteX = positionEci.x;
	let satelliteY = positionEci.y;
	let satelliteZ = positionEci.z;

    // reduce coordinates to fit
	
	return (
		<>
			<mesh
				visible
				position={[satelliteX, satelliteY, satelliteZ]}
				rotation={[Math.PI / 2, 0, 0]}>
				<sphereGeometry args={[1, 12, 12]} />
				<meshStandardMaterial color='pink' />
			</mesh>
		</>
	);
};

export default Satellite;
