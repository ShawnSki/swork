import React, { Component } from 'react'

class Header extends Component {
    constructor() {
        super() 
        this.state = {
            newChoreListing: ''
        }
    }

    handleUpdateInput = (e) => {
        // console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.state.newChoreListing)
        return (
            <div>
                <div>header</div>
                <form>
                <input placeholder='something' name='newChoreListing' onChange={this.handleUpdateInput} />
                </form>
            </div>
        )
    }

}

export default Header;