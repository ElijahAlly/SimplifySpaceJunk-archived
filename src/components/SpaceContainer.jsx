import React, { useCallback, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls as OrbitControlsImpl } from '@react-three/drei';
import { getSatellites } from '@/util/satellite_api';

import Sun from '@/components/sun';
import Satellites from '@/components/satellites';
import SatelliteInfoModal from '@/components/satellite_info_modal';
import Globe from '@/components/globe';
import GetMoreSatellites from '@/components/get_more_satellites';
import ChangeSunColor from '@/components/change_sun_color';

// OrbitControls Component
const OrbitControls = ({ controlsRef }) => {
    const { camera, gl } = useThree();

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.minDistance = 5;
            controlsRef.current.maxDistance = 600;
            controlsRef.current.zoomSpeed = 0.6;
        }
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.update();
    }, [controlsRef]);

    return <OrbitControlsImpl ref={ controlsRef } args={ [camera, gl.domElement] } />;
};

// TODO: Update to smoothly transition back to origin from satellite
// TODO: Fix Dependencies in package.json
// * TODO: Search for other TODO's

const SpaceContainer = () => {
    const [sunColor, setSunColor] = useState('white');
    const [satellitesArr, setSatellitesArr] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const controlsRef = useRef();

    const [numOfSats, setNumOfSats] = useState(100);

    const handleGetMoreClick = () => {
        setIsFetching(true);
        setNumOfSats((prev) => prev + 100);
    }

    const handleGetMoreReset = () => {
        setNumOfSats(100);
    }

    const focusOnSatellite = (satellitePosition) => {
        if (Array.isArray(satellitePosition) && controlsRef.current) {
            controlsRef.current.target.set(...satellitePosition);
            controlsRef.current.object.position.set(satellitePosition[0], satellitePosition[1], satellitePosition[2] + 5);
            controlsRef.current.update();
        }
    };

    const updateSunColor = (color) => {
        setSunColor(color);
    };

    const getAllSatellites = useCallback(async () => {
        const pageNum = numOfSats / 100;
        let satellites = [];
        for (let i = 1; i <= pageNum; i++) {
            // i <= 113 will get back every satellite tracked by NASA - will take forever to load :(
            let tempSat = await getSatellites(i);
            if (tempSat) satellites.push(...tempSat);
        }

        setSatellitesArr(satellites);
    }, [numOfSats]);
    
    useEffect(() => {
        const fetchData = async () => {
            await getAllSatellites();
            const timeoutId = setTimeout(() => setIsFetching(false), 42);
            return () => clearTimeout(timeoutId);
        };

        fetchData();
    }, [numOfSats, getAllSatellites]);

    return (
        <div className="outer-viewer-container">
            <div id="root">
                <SatelliteInfoModal />
                <GetMoreSatellites numOfSats={ numOfSats } isFetching={ isFetching } handleClick={ handleGetMoreClick } handleReset={ handleGetMoreReset } />
                <ChangeSunColor updateColor={ updateSunColor } currentColor={ sunColor } />
                <Canvas camera={ { position: [-210, 39, 30], fov: 48, near: 0.5, far: 1000 } }>
                    <OrbitControls controlsRef={ controlsRef } />
                    <ambientLight intensity={ 0.93 } color={ sunColor } />
                    <spotLight position={ [500, 0, 120] } angle={ 0.3 } />
                    <Globe focusOnSatellite={ focusOnSatellite } />
                    <Sun sunColor={sunColor} />
                    <Satellites satellitesArr={ satellitesArr } focusOnSatellite={ focusOnSatellite } sunColor={ sunColor } />
                </Canvas>
            </div>
        </div>
    );
};

export default SpaceContainer;