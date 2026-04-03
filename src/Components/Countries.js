import React, { useState } from 'react';
import CountriesTop from './Countries-top';
import CountriesCards from './CountriesCards';
import data from '../../data.json';

const Countries = () => {
  const [search, setSearch] = useState('');
  const [getSearchresult, setGetSearchresult] = useState('');
  const [region, setRegion] = useState('');

  const handleRegion = (region) => {
    setRegion(region);
    if (region === 'All Countries') {
      setRegion('');
    }
  };

  const filterCountries = data.filter((value) => {
    const searchMatch = value.name.toLocaleLowerCase().includes(
      search.toLocaleLowerCase(),
      //  || getSearchresult.toLocaleLowerCase(),
    );

    const regionMatch = region === '' || value.region === region;
    return regionMatch && searchMatch;
  });
  return (
    <>
      <div className='countries'>
        <CountriesTop
          search={search}
          setSearch={setSearch}
          setGetSearchresult={setGetSearchresult}
          handleRegion={handleRegion}
        />
        <div className='countries-card'>
          {filterCountries.length === 0 && search !== '' ? (
            <h2 className='not-found'>No country found</h2>
          ) : (
            filterCountries.map((value, index) => {
              return (
                <CountriesCards
                  key={index}
                  country={value.name}
                  img={value.flags.png}
                  population={value.population}
                  region={value.region}
                  capital={value.capital}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Countries;
