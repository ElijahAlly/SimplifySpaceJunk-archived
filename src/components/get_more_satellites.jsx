import React from 'react';

const GetMoreSatellites = ({ numOfSats, handleClick, handleReset, isFetching }) => {
    return (
        <div className='get-satellites'>
            <div id='satellite-count'>
                <h4 id='currently-showing'>Currently Showing:</h4>{' '}
                <h4 id='number-of-satellites'>{numOfSats} Satellites</h4>
            </div>
            <button 
                id='get-more-btn'
                className={isFetching ? 'get-more-disabled' : 'get-more'}
                onClick={() => handleClick()}
                disabled={isFetching}
            >
                Get 100 More
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