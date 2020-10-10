import React, { useState } from 'react';
//import PokeInfo from './../PokeInfo/PokeInfo';

const Cards = ({ info, handleClick }) => {
  //  const [pokemon, setPokemon] = useState({});

  //  const [loading, setLoading] = useState(true);

  //  const handleClick = async (info) => {
  //    setLoading(true);
  //    const data = await fetch(info.url);
  //    const pokeInfo = await data.json();
  //    console.log(info.url);
  //    setPokemon(pokeInfo);
  //    setLoading(false);
  //  };

  return (
    <div className='col-md-12'>
      <div className='row'>
        {info.map((info, i) => (
          <div key={i}>
            <div className='card mt-4 ml-2'>
              <div className='card-title text-center'>
                <h3 style={{ textTransform: 'uppercase' }}>{info.name}</h3>
              </div>

              <div className='card-body'>
                <button className='btn btn-dark' onClick={() => handleClick(info)}>
                  Learn More...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*<div>{loading ? '' : <PokeInfo pokemon={pokemon} />}</div>*/}
    </div>
  );
};

export default Cards;
