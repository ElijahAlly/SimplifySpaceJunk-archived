import React, { useState, useEffect, useCallback } from 'react';
import { getSatellites } from '../util/satellite_api';
import Satellite from './satellite';

const Satellites = () => {
	let [satellitesArr, setSatellitesArr] = useState([]);

	const getAllSatellites = useCallback(async () => {
		const pageNum = parseInt(localStorage.getItem('pageNum') || '1')
		
		let satellites = [];
		for (let i = 1; i <= pageNum; i++) {
			// i <= 113 will get back every satellite tracked by NASA - will take forever to load :(
			let tempSat = await getSatellites(i);
			satellites.push(...tempSat);
		}

		setSatellitesArr(satellites);
	}, [satellitesArr]);

	useEffect(() => {
		getAllSatellites();
	}, []);

	if (satellitesArr.length === 0) return <></>;

	return (
		<>
			{satellitesArr.map((satellite, i) => (
				<Satellite key={i} satellite={satellite} />
			))}
		</>
	);
};

export default Satellites;
