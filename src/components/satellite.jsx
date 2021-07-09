import React, { Component } from 'react';
import { propagate, twoline2satrec } from 'satellite.js';
import { formatPostion, chooseColor } from '../util/satellite_helpers';

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

	// reduce coordinates to fit canvas
	satelliteX = formatPostion(satelliteX);
	satelliteY = formatPostion(satelliteY);
	satelliteZ = formatPostion(satelliteZ);

	return (
		<>
			<mesh
				onPointerOver={() => console.log(satellite.name)}
				visible
				position={[satelliteX, satelliteY, satelliteZ]}
				rotation={[Math.PI / 2, 0, 0]}>
				<sphereGeometry args={[.5, 12, 12]} />
				<meshStandardMaterial color={chooseColor()} />
			</mesh>
		</>
	);
};

export default Satellite;
