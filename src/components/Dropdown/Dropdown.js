import React, { useContext, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import CountriesContext from "../../context/CountriesContext";
import {
  Dropdown as DropdownContainer,
  DropdownTrigger,
  DropdownMenu,
  DropdownElement,
} from "./Dropdown.elements";

const Dropdown = ({ defaultValue, elements }) => {
  const { filterByRegion, setFilter, filter } = useContext(CountriesContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  const changeFilter = (value) => {
    filterByRegion(value);
    setFilter(value);
    setShowMenu(false);
  };

  return (
    <DropdownContainer>
      <DropdownTrigger onClick={handleClick}>
        {filter === "" ? (
          <DropdownElement isDefaultValue={true}>
            {defaultValue}
          </DropdownElement>
        ) : (
          <DropdownElement isDefaultValue={true}>{filter}</DropdownElement>
        )}
        <BiChevronDown />
      </DropdownTrigger>
      {showMenu && (
        <DropdownMenu show={showMenu}>
          {elements.map(({ value }) => (
            <DropdownElement key={value} onClick={() => changeFilter(value)}>
              {value}
            </DropdownElement>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
