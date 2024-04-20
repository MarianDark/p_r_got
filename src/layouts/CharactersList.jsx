import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  // eslint-disable-next-line no-empty-pattern
  const [] = useState('');

  useEffect(() => {
    axios.get('https://thronesapi.com/api/v2/Characters')
      .then(response => setCharacters(response.data))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="characters-list">


      {/* Renderizar los personajes */}
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharactersList;

