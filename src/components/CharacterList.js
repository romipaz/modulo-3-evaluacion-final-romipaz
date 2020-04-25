import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/layout/_CardDetail.scss';
import faces from '../images/faces.gif';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
    const { charList, inputValue } = props
    const sortCharacter = !charList.length ? (
        <div className="errorText">
           <p><span className="errorText--error">ERROR!</span><br></br>Oh Geez, <span className="errorText--input">"{inputValue}"</span> does NOT exist in this dimension.</p><img className="errorText--img" src={faces}></img>
        </div>
    ) : ("");
    return (
        <div className="cardlist__box">
            {sortCharacter}
            <ul className="cardlist__container">
                {charList
                    .sort(
                        (a, b) => {
                            if (a.name < b.name) {
                                return -1;
                            }
                            if (a.name > b.name) {
                                return 1;
                            }
                            return 0;
                        })
                    .map((characterObj) => (
                        <li className="cardlist__container--li" key={characterObj.id}>
                            <Link to={`/details/${characterObj.id}`}>
                                <CharacterCard
                                    image={characterObj.image}
                                    name={characterObj.name}
                                    gender={characterObj.gender}
                                    species={characterObj.species}
                                />
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default CharacterList;