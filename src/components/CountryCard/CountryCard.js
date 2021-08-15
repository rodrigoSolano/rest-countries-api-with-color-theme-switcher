import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../../context/CountriesContext";
import {
  CountryCard as CountryCardContainer,
  CountryCardImage,
  CountryCardContent,
} from "./CountryCard.elements";

const CountryCard = ({ country }) => {
  const { setSelectedCountry } = useContext(CountriesContext);
  return (
    <Link
      to={`/country/${country.name}`}
      style={{ listStyle: "none", textDecoration: "none", color: "black" }}
      onClick={() => setSelectedCountry(country)}
    >
      <CountryCardContainer>
        <CountryCardImage src={country.flag} alt={country.name} />
        <CountryCardContent>
          <h3>{country.name}</h3>
          <div>
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </CountryCardContent>
      </CountryCardContainer>
    </Link>
  );
};

export default CountryCard;
