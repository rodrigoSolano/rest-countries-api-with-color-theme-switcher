import { CountryList } from "../../containers";
import { Home as HomeContainer, Two } from "./Home.elements";
import React from "react";
import { SearchBar, Dropdown } from "../../components";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Two>
          <SearchBar />
          <Dropdown />
        </Two>
        <CountryList />
      </HomeContainer>
    </>
  );
};

export default Home;
