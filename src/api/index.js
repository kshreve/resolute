import { USER } from '../constants';
import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';

export const updateUser = (user, score, winner: false) => {
    if ( user ) {
        let updateData = {
            name:        user.name,
            wins:        winner ? user.wins + 1 : user.wins,
            totalPoints: Number(user.totalPoints || 0) + Number(score)
        };

        return fetch(USER(user._id.$oid), {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body:    JSON.stringify(updateData),
        });
    } else {
        return Promise.resolve();
    }
};
