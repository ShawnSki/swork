import React, { Component } from 'react';

import './ChoresDisplay.css'



class ChoresDisplay extends Component {

    render() {
        // This is mapping over the chores list and displaying each item
        const choresMapped = this.props.choreList.map((choreObj) => {
            return <div className='choreItem' key={choreObj.id}>
                <div className='btnBox'>
                    <button>chk</button>
                </div>
                <h2>{choreObj.listing}</h2>
                <span className='points'>{choreObj.points}</span>
                <button name={choreObj.id} onClick={this.props.handleDeleteChore}>delete {choreObj.id}</button>
            </div>
        })
        // console.log(chores[1].id)
        return (
            <div>{choresMapped.reverse()}</div>
        )
    }
}

export default ChoresDisplay;