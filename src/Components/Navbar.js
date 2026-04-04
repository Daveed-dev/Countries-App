import React, { useState } from 'react';

const Navbar = ({ mode, setMode }) => {
  const handleColor = () => {
    setMode(mode === 'Dark' ? 'Light' : 'Dark');
  };
  return (
    <>
      <header className='navbar'>
        <div>
          <h1>Where in the World?</h1>
        </div>
        <div>
          <p onClick={() => handleColor()}>
            <i className='fa-solid fa-moon'></i> {mode} mode
          </p>
        </div>
      </header>
    </>
  );
};

export default Navbar;
