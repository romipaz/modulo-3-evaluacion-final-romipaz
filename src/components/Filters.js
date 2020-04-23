import React from 'react';

const Filters = (props) => {

    const updateInputValue = (evt) => {
        evt.preventDefault();
        props.handleInputValue(evt.currentTarget.value)
    }

    return (
        <form>
            <label htmlFor="value">Search a character </label>
            <input
                type="text"
                value={props.value}
                name="value"
                onChange={updateInputValue}
                placeholder=" Ex: 'Morty'" />
        </form>
    );
};


export default Filters;