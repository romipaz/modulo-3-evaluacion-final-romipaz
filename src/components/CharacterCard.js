import React from 'react';
import '../stylesheets/layout/_Card.scss';


const CharacterCard = (props) => {

    return (
        <div className='card__container'>
            <img className="card__container--img" src={props.image} alt={props.name} />
            <h2 className="card__container--title">{props.name}</h2>
            <div className="card__container--tag">{props.species}</div>
            <div className="card__container--tag">{props.gender}</div>
        </div>
    )
}

export default CharacterCard;