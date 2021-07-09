import React, { Component } from 'react';

const Sun = () => {
	return (
		<>
			<mesh
                onPointerOver={() => console.log('Sun')}
				visible
				position={[120, 0, 120]}
				rotation={[Math.PI / 2, 0, 0]}
				roughness={0.3}
                >
				<sphereGeometry args={[146, 32, 32]} />
				<meshStandardMaterial color='#f7c956' />
			</mesh>
		</>
	);
};

export default Sun;
