import React, { Component } from 'react';
// import axios from 'axios';


class Header extends Component {
    constructor() {
        super() 
        this.state = {
            newChoreListing: ''
        }
    }


    render() {
        
        // console.log(this.state.newChoreListing)
        return (
            <div>
                <div>header</div>
                <form onSubmit={this.props.handleAddChore}>
                <input placeholder='something' name='newChoreListing' onChange={this.props.handleUpdateInput} />
                <button>send</button>
                </form>
            </div>
        )
    }

}

export default Header;