import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Countries from './Components/Countries';

const App = () => {
  const [mode, setMode] = useState('Dark');

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === 'Dark' ? 'hsl(0, 100%, 100%)' : 'hsl(207, 26%, 17%)';
  }, [mode]);
  return (
    <>
      <div className={mode === 'Dark' ? 'light' : 'dark'}>
        <Navbar mode={mode} setMode={setMode} />
        <Countries />
      </div>
    </>
  );
};

export default App;
