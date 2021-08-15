import styled from "styled-components";

export const BackButtonContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 2rem;
  display: grid;
  grid-gap: 4rem;
  @media (min-width: 1024px) {
    padding: 2rem 5rem 2rem 5rem;
  }
`;

export const CountryDetail = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 2rem;
  display: grid;
  grid-gap: 10rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    padding: 3rem 5rem 3rem 5rem;
  }
`;

export const CountryImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center center;
`;

export const CountryInfo = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  align-items: center;
  align-content: center;
  grid-gap: 4rem;
  color: ${(props) => props.theme.colors.text};
  p {
    font-weight: 600;
    margin-bottom: 1rem;
    span {
      font-weight: 300;
    }
  }
  div:last-child {
    h3 {
      margin-top: 2rem;
    }
  }
`;

export const CountryName = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BorderCountries = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  align-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  h3 {
    margin-right: 2rems;
  }
`;

export const BorderCountry = styled.div`
  min-width: 10rem;
  width: auto;
  height: auto;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.5rem;
  background-color: ${(props) => props.theme.colors.backgroundElements};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
