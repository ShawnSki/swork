import React from 'react';
import './PointsDisplay.css'


function PointsDisplay(props) {

    return (

        <div className='pointsContainer'>
            <div className='pointsCounter'>
                <div className='titleContainer'>
                    <h2>Spouse Points</h2>
                </div>
                <div>
                    <h1>{props.points}</h1>
                </div>
            </div>
        </div>
    )
}

export default PointsDisplay;