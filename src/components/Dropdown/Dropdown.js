import React, { useContext, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import CountriesContext from "../../context/CountriesContext";
import { filters } from "../../constants/constants";
import {
  Dropdown as DropdownContainer,
  DropdownTrigger,
  DropdownMenu,
  DropdownElement,
} from "./Dropdown.elements";

const Dropdown = () => {
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
            {filters[0].label}
          </DropdownElement>
        ) : (
          <DropdownElement isDefaultValue={true}>{filter}</DropdownElement>
        )}
        <BiChevronDown />
      </DropdownTrigger>
      {showMenu && (
        <DropdownMenu show={showMenu}>
          {filters.map(({ label, value }) => (
            <DropdownElement key={label} onClick={() => changeFilter(value)}>
              {label}
            </DropdownElement>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default React.memo(Dropdown);
