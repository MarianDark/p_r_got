import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <img src={character.imageUrl} alt={character.fullName} />
      <h2>{character.fullName}</h2>
      <p>{character.title}</p>
      <p1>{character.family}</p1>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterCard;
