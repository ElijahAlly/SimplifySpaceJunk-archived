import React from 'react';
import Satellite from './satellite';

const Satellites = ({ satellitesArr, sunColor, focusOnSatellite }) => {
	if (satellitesArr.length === 0) return <></>;
	return (
		<>
			{satellitesArr.map((satellite, i) => (
				<Satellite
					key={i}
					satellite={satellite}
					sunColor={sunColor}
					focusOnSatellite={focusOnSatellite}
				/>
			))}
		</>
	);
};

export default Satellites;
