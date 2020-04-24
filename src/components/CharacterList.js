import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
    const { dataList, inputValue } = props
    return (
        <ul className="cardlist__container">
            {dataList
                .filter(
                    (characterObj) =>
                        inputValue === '' ||
                        characterObj.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((characterObj) => (
                    <li className="cardlist__container--li" key={characterObj.id}>
                        <Link to={`/details/${characterObj.id}`}>
                            <CharacterCard
                                image={characterObj.image}
                                name={characterObj.name}
                                gender={characterObj.gender}
                                species={characterObj.species}
                                origin={characterObj.origin}
                                status={characterObj.status}
                                episode={characterObj.episode}
                            />
                        </Link>
                    </li>
                ))}
        </ul>
    );
};
export default CharacterList;