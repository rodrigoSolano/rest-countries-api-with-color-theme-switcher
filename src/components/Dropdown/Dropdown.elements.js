import styled from "styled-components";

const width = "22rem";
const height = "5rem";

export const Dropdown = styled.div`
  width: ${width};
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  position: relative;
  @media (min-width: 658px) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const DropdownTrigger = styled.div`
  width: 100%;
  height: ${height};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.colors.backgroundElements};
  color: ${(props) => props.theme.colors.text};
  &:hover {
    cursor: pointer;
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  fill: ${(props) => props.theme.colors.text};
`;

export const DropdownMenu = styled.div`
  width: ${width};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  background-color: ${(props) => props.theme.colors.backgroundElements};
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  display: ${({ show }) => (show ? "flex" : "none")};
  position: ${({ show }) => (show ? "absolute" : "relative")};
  bottom: ${({ show }) => (show ? "-19.5rem" : "0")};
`;

export const DropdownElement = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.text};
  padding: ${({ isDefaultValue }) => (isDefaultValue ? "0 0" : "1rem 2rem")};
  transition: all 0.1s ease-in-out;
  pointer-events: ${({ isDefaultValue }) => (isDefaultValue ? "none" : "auto")};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.hover};
  }
`;
