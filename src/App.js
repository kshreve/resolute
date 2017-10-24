import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import logo from './resolute.png';
import './App.css';
import 'react-widgets/dist/css/react-widgets.css';
import Leaderboard from './components/leaderboard/Leaderboard'
import MatchRecorder from './components/matchrecorder/MatchRecorder'
import { USERS } from './constants';
class App extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        fetch(USERS).then((response) => response.json()).then((users) => {
            this.setState({
                users
            });
        });
    }

    render() {
        const { users } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Test</h1>
                </header>
                <div className="main">
                    <Leaderboard users={users}/>
                    <MatchRecorder users={users}/>
                </div>
            </div>
        );
    }
}

export default App;
