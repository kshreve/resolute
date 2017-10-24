import React, { Component } from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';
import './Leaderboard.css';

class Leaderboard extends Component {
    render() {
        const { users } = this.props;

        return (
            <div>
                <h2>Leaderboard</h2>
                <ReactTable data={users}
                            columns={[{
                                Header:   'Name',
                                accessor: 'name',
                            }, {
                                Header:   'Win Total',
                                accessor: 'wins'
                            }, {
                                Header:   'Total Points Scored',
                                accessor: 'totalPoints'
                            }]}
                            defaultSorted={[
                                {
                                    id:   'wins',
                                    desc: true
                                }
                            ]}
                            defaultPageSize={5}/>
            </div>
        );
    }
}

export default Leaderboard;
