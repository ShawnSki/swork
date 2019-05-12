import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import ChoresDisplay from './components/ChoresDisplay';
import PointsDisplay from './components/PointsDisplay';
import Header from './components/Header'
import ChoresList from './components/ChoresList';


class App extends Component {
  constructor() {
    super()
    this.state = {
      chores: [],
      newChoreListing: '',
      newChorePoints: null,
      spousePoints: 0,
      updatedChoreNotes: '',
      editChore: false
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
        document.getElementById('choreForm').reset();
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleUpdateChoreNotes = (e) => {
    e.preventDefault();
    console.log(e.target.name)
    axios.put(`/api/updateChore/${e.target.name}`, {
      notes: this.state.updatedChoreNotes
    })
      .then((res) => {
        console.log(res.data)
        this.setState({
          chores: res.data,
          // editChore: !this.state.editChore
        })
      })
      .catch(error => {
        console.log(error)
      })
  }


  //   updateEditSwitch = () => {
  //     this.setState({
  //         editChore: !this.state.editChore
  //     })
  // }



  // Deleting a chore functionality
  handleDeleteChore = (e) => {
    axios.delete(`/api/chore/${e.target.name}`)
      .then((res) => {
        this.setState({
          chores: res.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  // This updates the score when chkbox is clicked
  handleCompleteChore = (e) => {
    let pointUpdater = this.state.spousePoints += +`${e.target.name}`;
    this.setState({
      spousePoints: pointUpdater
    })
  
    console.log(this.state.spousePoints)
  }




  render() {

    return (
      <div>
        <ChoresList />
        <Header handleAddChore={this.handleAddChore} handleUpdateInput={this.handleUpdateInput} />
        <div className='choresContainer'>
          <ChoresDisplay choreList={this.state.chores}
            editSwitch={this.state.editChore}
            handleDeleteChore={this.handleDeleteChore}
            handleCompleteChore={this.handleCompleteChore}
            handleUpdateChoreNotes={this.handleUpdateChoreNotes}
            handleUpdateInput={this.handleUpdateInput}
            updateEditSwitch={this.updateEditSwitch} />
        </div>
        <PointsDisplay points={this.state.spousePoints}/>
        
      </div>
    );
  }
}

export default App;
