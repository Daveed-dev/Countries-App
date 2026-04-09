import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CountryInf = ({ data }) => {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const Country = data.find((c) => c.name === countryName);

  return (
    <>
      <div className='back-btn'>
        <button onClick={() => navigate(-1)}>
          <i className='fa-solid fa-arrow-left'></i> Back
        </button>
      </div>
      <div className='CountryInfDetails'>
        <div className='details-img a'>
          <img src={Country.flags.png} alt={Country.name} />
        </div>
        <div className='card-text detailsFirst-text b'>
          <h3>{Country.name}</h3>
          <p>
            Native Name: <span>{Country.nativeName}</span>
          </p>
          <p>
            Population: <span>{Country.population.toLocaleString()}</span>
          </p>
          <p>
            Region: <span>{Country.region}</span>
          </p>
          <p>
            Sub Region: <span>{Country.subregion}</span>
          </p>
          <p>
            Capital: <span>{Country.capital}</span>
          </p>
        </div>
        <div className='card-text detailsSecond-text c'>
          <p>
            Top Level Domain: <span>{Country.topLevelDomain[0]}</span>
          </p>
          <p>
            Currencies: <span>{Country.currencies[0].code}</span>
          </p>
          <p>
            Languages:{' '}
            <span>{Country.languages.map((lang) => lang.name).join(', ')}</span>
          </p>
        </div>
        <div className='border-countries-container d'>
          <h3 className='border-countries'>Border Countries:</h3>
          {Country.borders?.length > 0 ? (
            Country.borders.slice(0, 3).map((borderCode) => {
              const borderCountry = data.find(
                (c) => c.alpha3Code === borderCode,
              );
              return (
                <button
                  key={borderCode}
                  className='border-country-btn'
                  onClick={() =>
                    navigate(`/country/${borderCountry?.name || borderCode}`)
                  }
                >
                  {borderCode}
                </button>
              );
            })
          ) : (
            <button
              style={{ color: 'var(--color)' }}
              className='border-country-btn'
            >
              None
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CountryInf;
