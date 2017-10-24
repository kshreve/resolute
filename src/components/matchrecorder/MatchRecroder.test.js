import React from 'react';
import ReactDOM from 'react-dom';
import MatchRecorder from './MatchRecorder';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MatchRecorder />, div);
});
