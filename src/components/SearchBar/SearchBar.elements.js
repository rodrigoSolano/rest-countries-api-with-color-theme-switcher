import styled from "styled-components";
const searchBarHeight = "5rem";
const maxSearchBarWidth = "35rem";
export const SearchBar = styled.form`
  max-width: ${maxSearchBarWidth};
  width: 100%;
  height: ${searchBarHeight};
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  align-content: center;
  gap: 1rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.colors.backgroundElements};
  &:hover {
    cursor: text;
  }
`;

export const SearchBarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  &:hover {
    cursor: pointer;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
  fill: ${(props) => props.theme.colors.text};
`;

export const InputText = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem;
  border: none;
  font-size: 1.7rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.backgroundElements};
  outline: none;
  &:focus {
    outline: none;
  }
  &:placeholder {
    color: ${(props) => props.theme.colors.text};
  }
`;
