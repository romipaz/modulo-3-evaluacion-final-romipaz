import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
    return (
      <ul className="characterList-container">
        {props.data
  
          .filter(
            (characterObj) =>
              props.inputValue === '' ||
              characterObj.name.toLowerCase().includes(props.inputValue.toLowerCase())
          )
          .map((characterObj) => (
            <li key={characterObj.id}>
              <Link to={`/detail/${characterObj.id}`}>
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