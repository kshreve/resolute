import React, { Component } from 'react';

import logo from './resolute.png';
import './App.css';
import Leaderboard from './Leaderboard'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Test</h1>
                </header>
                <p className="App-intro">
                    <Leaderboard/>
                </p>
            </div>
        );
    }
}

export default App;
