import React, { Component } from 'react';
import axios from 'axios';

import './ChoresDisplay.css'

class ChoresDisplay extends Component {
    constructor() {
        super()
        this.state = {
            chores: [],
            test: 1
        }
    }

    componentDidMount() {
        axios.get('/api/chores').then((res) => {
            // console.log(res.data)
            this.setState({
                chores: res.data
            })
        })
    }



    render() {
        // This is mapping over the chores list and displaying each item
        const choresMapped = this.state.chores.map((choreObj) => {
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