import React from 'react';
import '../stylesheets/layout/_Header.scss';

const Filters = (props) => {

    const updateInputValue = (evt) => {
        const value = evt.target.value;
        props.handleInputValue(value)
    }
    const preventDefault = (evt) => evt.preventDefault()

    return (
        <form className="Header__form" onSubmit={preventDefault}>
            <label htmlFor="value">Search character:
            <span> $find ./</span>
            </label>
            <input
                type="text"
                value={props.inputValue}
                name="value"
                onChange={updateInputValue}
                placeholder="'Type'" />
        </form>
    );
};


export default Filters;