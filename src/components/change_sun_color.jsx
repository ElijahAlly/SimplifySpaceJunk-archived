import React from 'react';

const ChangeSunColor = ({ updateColor, currentColor }) => {
    const COLORS = [
        'blue',
        'green',
        'yellow',
        'red',
    ];

    return (
        <div className='change-sun-color-container'>
            <div id='current-color-container'>
                <h4 id='current-color-label'>Current Color:</h4>{ ' ' }
                <h4 id='current-color'>{ currentColor }</h4>
            </div>
            <button
                id='get-sun-colors'
                // TODO: Make not random color chooser (allow vistor to choose color)
                onClick={ () => updateColor((COLORS[Math.floor(Math.random() * COLORS.length)])) }
            >
                Change The Sun's Color
            </button>
            <button
                id='reset-color-btn'
                onClick={ () => updateColor('white') }
            >
                Reset Color
            </button>
        </div>
    );
}

export default ChangeSunColor;
