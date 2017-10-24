import React, { Component } from 'react';
import Dropdown from '../dropdown/Dropdown';
import NumberPicker from '../numberPicker/NumberPicker';

import './MatchRecorder.css'

class MatchRecorder extends Component {
    render() {
        const { users } = this.props;

        return (
            <div>
                <h2>Match Recorder</h2>
                <div className="form">
                    <Dropdown data={users}
                              label="user1"
                              textField="name"/>
                    <Dropdown data={users}
                              label="user2"
                              textField="name"/>
                    <NumberPicker data={users}
                                  label="score user1"
                                  textField="name"/>
                    <NumberPicker data={users}
                                  label="score user2"
                                  textField="name"/>
                </div>
            </div>
        );
    }
}

export default MatchRecorder;
