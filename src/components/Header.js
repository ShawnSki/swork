import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {
    constructor() {
        super() 
        this.state = {
            newChoreListing: ''
        }
    }
// This updates State 'input box name' with the value of the input box
    handleUpdateInput = (e) => {
        // console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Need a function that pushes the new chore to server
    handleAddChore = (e) => {
        e.preventDefault();
        axios.post('/api/addChore', {
            listing: this.state.newChoreListing
        })
        .then((res) => {
            return res;
            // console.log(res)
        })
    }

    render() {
        // console.log(this.state.newChoreListing)
        return (
            <div>
                <div>header</div>
                <form onSubmit={this.handleAddChore}>
                <input placeholder='something' name='newChoreListing' onChange={this.handleUpdateInput} />
                <button>send</button>
                </form>
            </div>
        )
    }

}

export default Header;