import React, { useEffect, useState, useContext } from "react";
import SyncLoader from "react-spinners/SyncLoader";

import { BackButton } from "../../components";
import {
  BackButtonContainer,
  CountryDetail as CountryDetailContainer,
  CountryImage,
  CountryInfo,
  CountryName,
  BorderCountries,
  BorderCountry,
  Grid,
} from "./CountryDetail.elements";
import CountriesContext from "../../context/CountriesContext";

const CountryDetail = () => {
  const { selectedCountry } = useContext(CountriesContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [country, setCountry] = useState({});

  useEffect(() => {
    getCountryData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCountryData = () => {
    setCountry(selectedCountry);
    setIsLoaded(true);
    // fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setCountry(result[0]);
    //       setIsLoaded(true);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   );
  };

  if (!isLoaded) {
    return <SyncLoader />;
  }

  return (
    <>
      <BackButtonContainer>
        <BackButton />
      </BackButtonContainer>
      <CountryDetailContainer>
        <CountryImage src={country.flag} />
        <CountryInfo>
          <CountryName>{country.name}</CountryName>
          <Grid>
            <div>
              <p>
                Native name: <span>{country.nativeName}</span>{" "}
              </p>

              <p>
                Population: <span>{country.population}</span>
              </p>

              <p>
                Region <span>{country.region}</span>
              </p>

              <p>
                Subregion: <span>{country.subregion}</span>
              </p>

              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{country.topLevelDomain}</span>
              </p>
              <p>
                Currencies:{" "}
                {country.currencies.map(({ code }) => (
                  <span key={code}>{code},</span>
                ))}
              </p>
              <p>
                Lenguages:{" "}
                {country.languages.map(({ name }) => (
                  <span key={name}>{name} </span>
                ))}
              </p>
            </div>
          </Grid>
          <BorderCountries>
            <h3>Border Countries: </h3>
            {country.borders.map((border) => (
              <BorderCountry key={border}>{border}</BorderCountry>
            ))}
          </BorderCountries>
        </CountryInfo>
      </CountryDetailContainer>
    </>
  );
};

export default CountryDetail;
