import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Countries from './Components/Countries';

const App = () => {
  const [mode, setMode] = useState('Dark');

  return (
    <>
      <div className={mode === 'Dark' ? 'dark' : 'light'}>
        <Navbar mode={mode} setMode={setMode} />
        <Countries />
      </div>
    </>
  );
};

export default App;
