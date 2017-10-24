import React, { Component } from 'react';

import logo from './resolute.png';
import './App.css';
import Leaderboard from './components/leaderboard/Leaderboard'
import MatchRecorder from './components/matchrecorder/MatchRecorder'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Test</h1>
                </header>
                <Leaderboard/>
                <MatchRecorder/>
            </div>
        );
    }
}

export default App;
