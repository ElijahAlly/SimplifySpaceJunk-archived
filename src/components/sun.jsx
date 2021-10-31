import React, { Component } from 'react';

const Sun = () => {
	return (
		<>
			<mesh
				onPointerOver={() => console.log('Sun')}
				visible
				position={[500, 0, 120]}
				rotation={[Math.PI / 2, 0, 0]}>
				<sphereGeometry args={[30, 40, 40]} />
				<meshStandardMaterial color='#f7c956' />
			</mesh>
		</>
	);
};

export default Sun;
