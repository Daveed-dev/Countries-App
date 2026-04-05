import React from 'react';
import { useNavigate } from 'react-router-dom';

const CountriesCards = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className='card'
        onClick={() => navigate(`/country/${props.country}`)}
      >
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
