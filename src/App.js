import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import ChoresDisplay from './components/ChoresDisplay';
import PointsDisplay from './components/PointsDisplay';
import Header from './components/Header'


class App extends Component {
  constructor() {
    super()
    this.state = {
      chores: [],
      newChoreListing: '',
      newChorePoints: null
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

// Adding new chore functionality below
  handleUpdateInput = (e) => {
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddChore = (e) => {
    e.preventDefault();
    axios.post('/api/addChore', {
      listing: this.state.newChoreListing,
      points: this.state.newChorePoints
    })
      .then((res) => {
        this.setState({
          chores: res.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (
      <div className="App">
        <Header handleAddChore={this.handleAddChore} handleUpdateInput={this.handleUpdateInput} />
        <ChoresDisplay choreList={this.state.chores} />
        <PointsDisplay />
      </div>
    );
  }
}

export default App;
