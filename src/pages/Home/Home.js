import { CountryList } from "../../containers";
import { Home as HomeContainer, Two } from "./Home.elements";
import React from "react";
import { SearchBar, Dropdown } from "../../components";

const Home = () => {
  const filters = [
    { value: "Africa", action: () => console.log("Africa") },
    { value: "Americas", action: () => console.log("North America") },
    { value: "Asia", action: () => console.log("Asia") },
    { value: "Europe", action: () => console.log("Europe") },
    { value: "Oceania", action: () => console.log("Oceania") },
  ];
  return (
    <>
      <HomeContainer>
        <Two>
          <SearchBar />
          <Dropdown defaultValue={"Filter by Region"} elements={filters} />
        </Two>
        <CountryList />
      </HomeContainer>
    </>
  );
};

export default Home;
