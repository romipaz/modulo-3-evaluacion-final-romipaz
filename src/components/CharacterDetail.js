import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/_CardDetail.scss';

const CharacterDetail = (props) => {
    console.log(props)
    //aquí estoy recibiendo el objeto entero por props con lo cual para acceder a cada una de sus propiedades
    //tengo que llamar a props.elObjeto.propiedad
    return (
        <div className="details__container">
            <section className="details__img">
                <img src={props.characterObj.image} alt={props.characterObj.name} />
            </section>
            <section className="details__info">
                <h2 className="details__info--title">{props.characterObj.name}</h2>
                <div className="details__info--tag">{props.characterObj.gender}</div>
                <div className="details__info--tag">{props.characterObj.species}</div>
                <p>Origin: {props.characterObj.origin.name}</p>
                <p>Status: {props.characterObj.status}</p>
                <p>Appears on {props.characterObj.episode.length} episodes</p>
                <div className="details__info--back">
                <Link to="/">Back</Link>
                </div> 
            </section>
        </div>
    );
}


export default CharacterDetail;