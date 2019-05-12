import React, { Component } from 'react';
import axios from 'axios';


class ChoreBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            edittedListing: ''
        }
    }
    editToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleDelete = () => {
        axios.delete(`/api/chore/${this.props.choreObj.id}`)
            .then(res => {
                this.props.deleteChore(res.data)
            })
    }

    handleUpdateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChoreUpdate = (id) => {
        axios.put(`/api/updateChore/${id}`, {
            listing: this.state.edittedListing
        })
        .then(res => {
            // console.log(res.data)
                this.props.updateChore(res.data)
                this.editToggle();
            })
    }

    render() {
        // console.log(this.props.choreObj.listing)
        return (
            <div>
                {(this.state.edit === false)
                    ? (<div>
                        <h2>Listing: {this.props.choreObj.listing}</h2>
                        <div>Points: {this.props.choreObj.points}</div>
                        <button onClick={this.handleDelete}>X</button>
                        <button onClick={this.editToggle}>Edit</button>
                    </div>) : (
                        <div>
                            <input name='edittedListing' placeholder='Edit the chore listing . . .' onChange={this.handleUpdateInput} />
                            <button onClick={() => this.handleChoreUpdate(this.props.choreObj.id)}>Submit</button>
                            <div>Points: {this.props.choreObj.points}</div>
                            <button onClick={this.handleDelete}>X</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ChoreBox