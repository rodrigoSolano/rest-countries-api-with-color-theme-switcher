import React, { useContext } from "react";
import { CountryCard } from "../../components";
import { CountryList as CountryListContainer } from "./CountryList.elements";
import CountriesContext from "../../context/CountriesContext";

const CountryList = () => {
  const { allCountries, filteredCountries,searchTerm } = useContext(CountriesContext);

  if (filteredCountries.length === 0 && searchTerm !== "") {
    return <div>No countries found</div>;
  }

  const countries = filteredCountries.length !== 0 ? filteredCountries : allCountries;

  return (
    <CountryListContainer>
      {countries.map((country) => (
        <CountryCard country={country} key={country.name} />
      ))}
    </CountryListContainer>
  );
};

export default CountryList;
