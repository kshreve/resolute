import React, { Component } from 'react';
import NumberPicker from 'react-widgets/lib/NumberPicker'
import './NumberPicker.css';

class Test extends Component {
    render() {
        const { label } = this.props;

        return (
            <div className="input">
                <h4 className="label">{label}</h4>
            </div>
        );
    }
}

export default Test;
