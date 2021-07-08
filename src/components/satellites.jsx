import React, { Component, useState, useEffect } from 'react';
import {getSatellites} from '../util/satellite_api'
import Satellite from './satellite'

const Satellites = () => {
    let [satellitesArr, setSatellitesArr] = useState([]);
    
    for (let i = 1; i <= 1; i++) { // change loop to i <= 113 to get ALL of the currently tracked debris
        let satellites = [];

        getSatellites(i).then((res) => {
            satellites.push(...res.data.member);

            if (i === 1) {
                setSatellitesArr(satellites);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

	return (
		<>
            {
                satellitesArr.map((satellite, i) => {
                    return <Satellite key={i} satellite={satellite}/>
                })
                
            }
		</>
	);
};

export default Satellites;
