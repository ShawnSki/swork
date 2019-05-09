import React, { Component } from 'react';
import axios from 'axios';

class ChoresDisplay extends Component {
    constructor() {
        super()
        this.state = {
            chores: []
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
        const {chores} = this.state;
        console.log(chores)
        
        return (
            <div>Chores Display</div>
        )
    }
}

export default ChoresDisplay;