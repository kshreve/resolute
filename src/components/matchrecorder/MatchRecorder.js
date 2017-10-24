import React, { Component } from 'react';
import Dropdown from '../dropdown/Dropdown';
import NumberPicker from '../numberPicker/NumberPicker';

import { updateUser } from '../../api';

import './MatchRecorder.css';

class MatchRecorder extends Component {
    state = {
        user1:      null,
        user2:      null,
        user1Score: null,
        user2Score: null,
    };

    sendScores(e) {
        e.preventDefault();
        const { user1, user2, user1Score, user2Score } = this.state;

        if ( user1 && user2 && user1Score !== null && user2Score !== null ) {
            if ( user1 === user2 ) {
                alert('you can\'t play a game with yourself');
            }

            if ( user1Score === user2Score ) {
                alert('games cannot end in a tie');
            } else {
                if ( user1Score < user2Score ) {
                    updateUser(user1, user1Score).then(() => {
                        return updateUser(user2, user2Score, true);
                    }).then(() => {
                        window.location = '/';
                    });
                } else {
                    updateUser(user1, user1Score, true).then(() => {
                        return updateUser(user2, user2Score);
                    }).then(() => {
                        window.location = '/';
                    });
                }
            }
        } else {
            alert('Please fill out the form completely');
        }
    }

    userChange(prop, user) {
        this.setState({ [prop]: user });
    }

    numberChange(prop, event) {
        this.setState({ [prop]: Number(event.target.value) });
    }

    render() {
        const { users } = this.props;

        return (
            <div>
                <h2>Match Recorder</h2>
                <form className="form" onSubmit={this.sendScores.bind(this)}>
                    <div className="row">
                        <Dropdown data={users}
                                  label="user1"
                                  textField="name"
                                  onChange={this.userChange.bind(this, 'user1')}/>
                        <Dropdown data={users}
                                  label="user2"
                                  textField="name"
                                  onChange={this.userChange.bind(this, 'user2')}/>
                        <NumberPicker data={users}
                                      label="score user1"
                                      textField="name"
                                      onChange={this.numberChange.bind(this, 'user1Score')}/>
                        <NumberPicker data={users}
                                      label="score user2"
                                      textField="name"
                                      onChange={this.numberChange.bind(this, 'user2Score')}/>
                    </div>
                    <div className="row">
                        <input type="submit" value="submit" className="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default MatchRecorder;
