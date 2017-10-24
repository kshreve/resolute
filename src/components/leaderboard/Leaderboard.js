import React, { Component } from 'react';
import ReactTable from 'react-table';
import fetch from 'isomorphic-fetch';
import 'react-table/react-table.css'
import './Leaderboard.css'

import { API_ROOT } from '../../constants';

let data = [
    {
        name:        'kevin',
        wins:        0,
        totalPoints: 0,
    }, {
        name:        'paul',
        wins:        0,
        totalPoints: 0,
    }, {
        name:        'john',
        wins:        0,
        totalPoints: 0,
    }, {
        name:        'kurt',
        wins:        0,
        totalPoints: 0,
    }, {
        name:        'zak',
        wins:        0,
        totalPoints: 0,
    }, {
        name:        'steve',
        wins:        0,
        totalPoints: 0,
    },
];

class Leaderboard extends Component {
    componentDidMount() {
        fetch(API_ROOT).then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                <h2>Leaderboard</h2>
                <ReactTable data={data}
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
