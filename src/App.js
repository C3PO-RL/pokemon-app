import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Navbar from './components/Navbar/Navbar';
import PokeInfo from './components/PokeInfo/PokeInfo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [info, setInfo] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const obtenerDatos = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const poke = await data.json();
    console.log(poke.results);
    setInfo(poke.results);
  };

  useEffect(() => {
    console.log('useEffect');
    obtenerDatos();
  }, []);

  const handleClick = async (info) => {
    setLoading(true);
    const data = await fetch(info.url);
    const pokeInfo = await data.json();
    console.log(pokeInfo);
    setPokemon(pokeInfo);
    setLoading(false);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentInfo = info.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <Navbar postsPerPage={postsPerPage} totalInfo={info.length} paginate={paginate} />
      <div>
        <Cards info={currentInfo} handleClick={handleClick} />
      </div>
      <div>{loading ? '' : <PokeInfo pokemon={pokemon} />}</div>
    </div>
  );
}

export default App;
