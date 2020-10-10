import React from 'react';

const NavBar = ({ postsPerPage, totalInfo, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalInfo / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark'>
        <a href='#' className='text-white'>
          POKEMON APP
        </a>
        <ul className='pagination'>
          {pageNumbers.map((number) => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='!#' className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
