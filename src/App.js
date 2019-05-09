import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ChoresDisplay from './components/ChoresDisplay';


class App extends Component {
    constructor() {
        super()
        this.state = {
            chores: [],
            test: 1
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

    render() {
  return (
    <div className="App">
    <ChoresDisplay choreList={this.state.chores} />
    </div>
  );
}
}

export default App;
