import React from 'react';
import '../stylesheets/layout/_Header.scss';

const Filters = (props) => {

    const updateInputValue = (evt) => {
        evt.preventDefault();
        props.handleInputValue(evt.currentTarget.value)
    }

    return (
        <form className="Header__form">
            <label htmlFor="value">Search character:
            <span> $find ./</span>
            </label>
            <input
                type="text"
                value={props.value}
                name="value"
                onChange={updateInputValue}
                placeholder="'Type Name'"/>
        </form>
    );
};


export default Filters;