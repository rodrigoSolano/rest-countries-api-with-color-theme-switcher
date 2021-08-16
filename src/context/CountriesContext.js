import React, { createContext, useState, useEffect } from "react";

const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);


  useEffect(() => {
    getAllContries();
  }, []);

  const getAllContries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then(
        (countries) => {
          setAllCountries(countries);
          setLoading(false);
        },
        (err) => {
          setError(err);
        }
      );
  };

  const searchByName = () => {
    setFilteredCountries(
      allCountries.filter(({ name }) =>
        name.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
    if (filter) {
      console.log(filter);
      return searchByNameAndRegion();
    }
  };

  const filterByRegion = (regionFilter) => {
    setFilteredCountries(
      allCountries.filter(
        ({ region }) => region.toLowerCase() === regionFilter.toLowerCase()
      )
    );
    if (searchTerm !== "") {
      console.log(searchTerm);
      searchByNameAndRegion();
    }
  };

  const searchByNameAndRegion = () => {
    setFilteredCountries(
      allCountries.filter(
        ({ name, region }) =>
          name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
          region.toLowerCase() === filter.toLowerCase()
      )
    );
  };

  const resetSearch = () => {
    setSearchTerm("");
    if (filter) {
      filterByRegion(filter);
    } else {
      setFilteredCountries([]);
    }
  };

  const data = {
    allCountries,
    filteredCountries,
    searchTerm,
    setSearchTerm,
    searchByName,
    filterByRegion,
    setFilter,
    filter,
    resetSearch,
    selectedCountry,
    setSelectedCountry,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CountriesContext.Provider value={data}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
export { CountriesProvider };
