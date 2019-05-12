import React, { Component } from 'react';
import axios from 'axios';


class ChoreBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            edittedPoints: null
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
            points: this.state.edittedPoints
        })
            .then(res => {
                // console.log(res.data)
                this.props.updateChore(res.data)
                this.editToggle();
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        // console.log(this.props.choreObj.listing)
        return (
            <div>
                {(this.state.edit === false)
                    ? (<div>
                        <h2>{this.props.choreObj.listing}</h2>
                        <div>{this.props.choreObj.points}</div>
                        <button onClick={this.handleDelete}>X</button>
                        <button onClick={this.editToggle}>Edit</button>
                    </div>) : (
                        <div>
                            <h2>{this.props.choreObj.listing}</h2>
                            <input name='edittedPoints' onChange={this.handleUpdateInput} />
                            <button onClick={() => this.handleChoreUpdate(this.props.choreObj.id)}>Submit</button>
                            <button onClick={this.handleDelete}>X</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ChoreBox