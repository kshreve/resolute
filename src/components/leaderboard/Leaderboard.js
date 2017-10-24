import React, { Component } from 'react';
import ReactTable from 'react-table';
import fetch from 'isomorphic-fetch';
import 'react-table/react-table.css'
import './Leaderboard.css'

import { USERS } from '../../constants';

class Leaderboard extends Component {
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
            <div>
                <h2>Leaderboard</h2>
                <ReactTable data={users}
                            columns={[
                                {
                                    Header:   'Name',
                                    accessor: 'name',
                                },
                                {
                                    Header:   'Win Total',
                                    accessor: 'wins'
                                },
                                {
                                    Header:   'Total Points Scored',
                                    accessor: 'totalPoints'
                                }
                            ]}
                            defaultPageSize={5}/>
            </div>
        );
    }
}

export default Leaderboard;
