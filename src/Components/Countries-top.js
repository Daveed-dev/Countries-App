import React, { useState } from 'react';

const CountriesTop = ({
  search,
  setSearch,
  setGetSearchresult,
  handleRegion,
}) => {
  const [visible, invisible] = useState(true);
  const handleToggle = () => {
    if (visible) {
      invisible(false);
    } else {
      invisible(true);
    }
  };

  return (
    <>
      <div className='top'>
        <div className='input-container'>
          <i className='fa-solid fa-magnifying-glass'></i>
          <input
            type='text'
            placeholder=' Search for a country...'
            className='input'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setGetSearchresult(search);
                setSearch('');
              }
            }}
          />
        </div>
        <div className='option-container'>
          <h5>
            Filter by region
            <i
              onClick={handleToggle}
              className='fa-solid fa-angle-down arrow-down'
            ></i>
          </h5>
          <div className={visible ? 'option-continent' : 'none'}>
            <p
              onClick={() => {
                handleRegion('Africa');
                invisible(false);
              }}
            >
              Africa
            </p>
            <p
              onClick={() => {
                handleRegion('Americas');
                invisible(false);
              }}
            >
              America
            </p>
            <p
              onClick={() => {
                handleRegion('Asia');
                invisible(false);
              }}
            >
              Asia
            </p>
            <p
              onClick={() => {
                handleRegion('Europe');
                invisible(false);
              }}
            >
              Europe
            </p>
            <p
              onClick={() => {
                handleRegion('Oceania');
                invisible(false);
              }}
            >
              Oceania
            </p>
            <p
              onClick={() => {
                handleRegion('Asia');
                invisible(false);
              }}
            ></p>
            <p
              onClick={() => {
                handleRegion('All Countries');
                invisible(false);
              }}
            >
              All Countries
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountriesTop;
