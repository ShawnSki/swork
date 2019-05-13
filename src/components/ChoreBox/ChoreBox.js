import React, { Component } from 'react';
import axios from 'axios';

import './ChoreBox.css';


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
        this.props.updateScore(this.props.choreObj.points);
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
                    ? (<div className="choreBoxContainer">
                        <div className='leftSideBox'>
                            <button onClick={this.handleDelete}></button>
                            <h2>{this.props.choreObj.listing}</h2>
                        </div>
                        <div className='rightSideBox'>
                            <h3>{this.props.choreObj.points}</h3>
                            <button onClick={this.editToggle}>edit</button>
                        </div>
                    </div>) : (
                        <div className="choreBoxContainer">
                            <div className='leftSideBox'>
                                <button onClick={this.handleDelete}></button>
                                <h2>{this.props.choreObj.listing}</h2>
                            </div>
                            <div className='rightSideBox'>
                                <div>
                                    <form>
                                        <input placeholder={this.props.choreObj.points} name='edittedPoints' onChange={this.handleUpdateInput} />
                                        <button onClick={() => this.handleChoreUpdate(this.props.choreObj.id)}>submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ChoreBox;