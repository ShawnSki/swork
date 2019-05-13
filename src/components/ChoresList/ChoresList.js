import React, { Component } from 'react';
import axios from 'axios';

import ChoreBox from '../ChoreBox/ChoreBox';
import Header from '../Header/Header';
import PointsDisplay from '../PointsDisplay/PointsDisplay';

import './ChoresList.css';


class ChoresList extends Component {
    constructor(props){
      super(props)
      this.state = {
        chores: [],
        newChoreListing: '',
        newChorePoints: null,
        spousePoints: 0
      }
    }

    componentDidMount() {
            this.handleGetAllChores()
    }

    handleUpdateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleGetAllChores = () => {
        axios.get('/api/chores').then((res) => {
            this.setState({
                chores: res.data
            })
        })
    }

    handleDeleteChore = (data) => {
        this.setState({
            chores: data
        })
    }

    handleUpdateChore = (data) => {
        this.setState({
            chores: data
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

      handleUpdateScore = (points) => {
        let pointUpdater = this.state.spousePoints += +points;
        this.setState({
          spousePoints: pointUpdater
        })
      
        console.log(this.state.spousePoints)
      }

  
    render() {
        // console.log(this.state.chores)
        const choresMapped = this.state.chores.map((choreObj, ind) => {
            return (
                <ChoreBox key={ind}
                        choreObj={choreObj}
                        deleteChore={this.handleDeleteChore}
                        updateChore={this.handleUpdateChore}
                        updateScore={this.handleUpdateScore} />
            )
        })
      return (
        <div>
         <Header handleAddChore={this.handleAddChore} handleUpdateInput={this.handleUpdateInput} />
         <div className='choresContainer'>{choresMapped.reverse()}</div>
         <PointsDisplay points={this.state.spousePoints}/>
        </div>
      );
    }
  }

export default ChoresList;
