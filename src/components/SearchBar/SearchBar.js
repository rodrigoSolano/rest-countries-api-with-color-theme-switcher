import "boxicons";
import {
  InputText,
  SearchBar as SearchBarForm,
  SearchBarIcon,
} from "./SearchBar.elements";
import React, { useState, useContext } from "react";
import CountriesContext from "../../context/CountriesContext";

const SearchBar = () => {
  const { searchByName, searchTerm, setSearchTerm, resetSearch } =
    useContext(CountriesContext);

  const [searchTextValue, setSearchTextValue] = useState(searchTerm);

  const handleChanfSearchTerm = (event) => {
    setSearchTextValue(event.target.value);
    setSearchTerm(event.target.value);
    searchByName();
    if (event.target.value === "") {
      resetSearch();
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <SearchBarForm onSubmit={handleOnSubmit}>
      <SearchBarIcon>
        <box-icon name="search-alt-2" />
      </SearchBarIcon>
      <InputText
        placeholder="Search for a country..."
        value={searchTextValue}
        onChange={handleChanfSearchTerm}
      />
    </SearchBarForm>
  );
};

export default SearchBar;
