import React, { Component } from 'react';
import '../css/get-satellites.css'

const GetMoreSatellites = () => {

    const handleClick = () => {
        let numSats: any = document.getElementById('number-of-satellites');
        const pageNum = (parseInt(numSats.innerText.split(' ')[0]) / 100) + 1;
        localStorage.removeItem('pageNum');
        localStorage.setItem('pageNum', `${pageNum}`);
        window.location.reload();
    }

    const handleReset = () => {
        localStorage.removeItem('pageNum');
        localStorage.setItem('pageNum', `${1}`);
        window.location.reload();
    }

    let numOfSats = `${parseInt(localStorage.getItem('pageNum') || '1') * 100} Satellites`;

    return (
        <div className='get-satellites'>
            <div id='satellite-count'>
                <h4 id='currently-showing'>Currently Showing:</h4>{' '}
                <h4 id='number-of-satellites'>{numOfSats}</h4>
            </div>
            <button 
                id='get-more-btn'
                onClick={() => handleClick()}
            >
                Get More
            </button>
            <button 
                id='reset-btn'
                onClick={() => handleReset()}
            >
                Reset To 100
            </button>
        </div>
    );
}

export default GetMoreSatellites;