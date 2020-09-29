import React, { useState, useEffect } from 'react';

const PokeInfo = ({ pokemon }) => {
  console.log(pokemon);

  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    if (pokemon) {
      console.log(pokemon.abilities);
      setAbilities(pokemon.abilities);
    }
  }, [pokemon]);

  console.log(abilities);

  return (
    <div>
      <div className='card-body'>
        <h3>{pokemon.height}</h3>
      </div>

      {abilities.length
        ? abilities.map((a, i) => (
            <div key={i}>
              <h3>{a.ability.name}</h3>
            </div>
          ))
        : ''}
    </div>
  );
};

export default PokeInfo;
