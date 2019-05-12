import React, { Component } from 'react';
import axios from 'axios';

import ChoreBox from './ChoreBox';

class ChoresList extends Component {
    constructor(props){
      super(props)
      this.state = {
        chores: []
      }
    }

    componentDidMount() {
            this.handleGetAllChores()
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
  
    render() {
        const choresMapped = this.state.chores.map((choreObj, ind) => {
            return (
                <ChoreBox key={ind}
                        choreObj={choreObj}
                        deleteChore={this.handleDeleteChore}
                        updateChore={this.handleUpdateChore} />
            )
        })
      return (
        <div>
         <h1>hi</h1>
         <div>{choresMapped}</div>
        </div>
      );
    }
  }

export default ChoresList;