import React, { useState, useEffect } from 'react';
import Cards from './../Cards/Cards';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Search = () => {
  const [info, setInfo] = useState([]);

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

  //  console.log(info);

  return (
    //<Router>
    //  <Switch>
    //    <Route path='/'>
    <div>
      <Cards info={info} />
    </div>

    //    {/*</Route>
    //  </Switch>
    //</Router>*/}
  );
};

export default Search;
