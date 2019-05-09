import React, { Component } from 'react';

import './ChoresDisplay.css'



class ChoresDisplay extends Component {

    render() {
        // This is mapping over the chores list and displaying each item
        const choresMapped = this.props.choreList.map((choreObj) => {
            return <div className='choreItem' key={choreObj.id}>
                <div className='btnBox'>
                    <button>X</button>
                </div>
                <h2>{choreObj.listing}</h2>
                <span className='points'>{choreObj.points}</span>
            </div>
        })
        // console.log(chores[1].id)
        return (
            <div>{choresMapped}</div>
        )
    }
}

export default ChoresDisplay;