import React from 'react';
import { useParams } from 'react-router-dom';

const CountryInf = () => {
  const { countryName } = useParams();
  return (
    <div>
      <button>Back</button>
      <h1>Welcone to {countryName}</h1>
    </div>
  );
};

export default CountryInf;
