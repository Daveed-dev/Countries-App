import React from 'react';

const CountriesCards = (props) => {
  return (
    <>
      <div className='card'>
        <img src={props.img} alt='' />
        <div className='card-text'>
          <h3>{props.country}</h3>
          <p>
            Population:<span>{props.population.toLocaleString()}</span>
          </p>
          <p>
            Region:<span>{props.region}</span>
          </p>
          <p>
            Capital:<span>{props.capital}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CountriesCards;
