import React from 'react';


const CharacterCard = (props) => {

    return (
        <div className='character-card'>
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <div>{props.species}</div>
            <div>{props.gender}</div>
        </div>
    )
}

export default CharacterCard;