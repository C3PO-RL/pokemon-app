import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div>
        <Search />
      </div>
    </div>
  );
}

export default App;
