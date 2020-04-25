import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/_CardDetail.scss';

const CharacterDetail = (props) => {
    const { image, name, gender, species, origin, status, episode } = props.characterObj;
    const whichKind = species === 'Human' ? 'Human' : '👽'
    const whichStatus = status === 'Alive' ? '❤️❤️❤️' : '💀💀💀'
    return (
        <div className="details__container">
            <section className="details__img">
                <img src={image} alt={name} />
            </section>
            <section className="details__info">
                <h1 className="details__info--title">{name}</h1>
                <div className="details__info--tag">{gender}</div>
                <div className="details__info--tag">{whichKind}</div>
                <p>Origin: {origin.name}</p>
                <p>Status: <span className="details__info--stat">{whichStatus}</span></p>
                <p>Episodes: {episode.length}</p>
                <div className="details__info--back">
                <Link to="/">Back</Link>
                </div> 
            </section>
        </div>
    );
}


export default CharacterDetail;