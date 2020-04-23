import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
    console.log(props)
    //aquí estoy recibiendo el objeto entero por props con lo cual para acceder a cada una de sus propiedades
    //tengo que llamar a props.elObjeto.propiedad
    return (
        <div className="character-details">
            <Link to="/">Back</Link>
            <img src={props.characterObj.image} alt={props.characterObj.name} />
            <h2>{props.characterObj.name}</h2>
            <div>{props.characterObj.gender}</div>
            <div>{props.characterObj.species}</div>
            <p>Origin: {props.characterObj.origin.name}</p>
            <p>Status: {props.characterObj.status}</p>
            <p>Appears on {props.characterObj.episode.length} episodes</p>
        </div>
    );
}


export default CharacterDetail;