import React, { Component } from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
import './Dropdown.css';

class Dropdown extends Component {
    render() {
        const { label } = this.props;

        return (
            <div className="input">
                <h4 className="label">{label}</h4>
                <DropdownList {...this.props}/>
            </div>
        );
    }
}

export default Dropdown;
