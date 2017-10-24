import React, { Component } from 'react';
import './NumberPicker.css';

class Test extends Component {
    render() {
        const { label, onChange } = this.props;

        return (
            <div className="input">
                <h4 className="label">{label}</h4>
                <input type="number" onChange={onChange}/>
            </div>
        );
    }
}

export default Test;
