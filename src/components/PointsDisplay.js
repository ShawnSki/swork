import React from 'react';
import './PointsDisplay.css'


function PointsDisplay(props) {

    return (

        <div className='pointsContainer'>
            <div className='pointsCounter'>
            <h1>{props.points}</h1>
                </div>
        </div>
    )
}


export default PointsDisplay;