import { Header as HeaderContainer, HeaderTitle } from "./Header.elements";

import React from "react";
import { Switcher } from "../../components";

const Header = ({changeTheme,themeIndex}) => {
  return (
    <HeaderContainer>
      <HeaderTitle>Where in the world?</HeaderTitle>
      <Switcher changeTheme={changeTheme} themeIndex={themeIndex}/>
    </HeaderContainer>
  );
};

export default Header;
