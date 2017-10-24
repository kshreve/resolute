import React, { Component } from 'react';

import logo from './resolute.png';
import './App.css';
import Leaderboard from './Leaderboard'

class App extends Component {
    componentDidMount() {
        fetch('http://localhost:3000/').then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Test</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <Leaderboard/>
                </p>
            </div>
        );
    }
}

export default App;
