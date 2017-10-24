import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

let data = [
    {
        name: 'kevin',
        wins: 0
    }, {
        name: 'paul',
        wins: 0
    }, {
        name: 'john',
        wins: 0
    }, {
        name: 'kurt',
        wins: 0
    }, {
        name: 'zak',
        wins: 0
    }, {
        name: 'steve',
        wins: 0
    },
];

class Leaderboard extends Component {
    componentDidMount() {
        fetch('http://localhost:3000/').then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                <h2>Leaderboard</h2>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header:   'Name',
                            accessor: 'name',
                        },
                        {
                            Header:   'Win Total',
                            accessor: 'wins'
                        }
                    ]}
                />
            </div>
        );
    }
}

export default Leaderboard;
