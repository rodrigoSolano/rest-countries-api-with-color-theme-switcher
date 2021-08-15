import "boxicons";
import React from "react";
import { Switcher as SwitcherContainer } from "./Switcher.elements";

const Switcher = ({ changeTheme, themeIndex }) => {
  const icon =
    themeIndex === 0 ? (
      <box-icon type="solid" name="moon" />
    ) : (
      <box-icon type="solid" name="sun" />
    );
  const label = themeIndex === 0 ? <p>Dark mode</p> : <p>Light mode</p>;
  return (
    <SwitcherContainer onClick={changeTheme}>
      {icon}
      {label}
    </SwitcherContainer>
  );
};

export default Switcher;
