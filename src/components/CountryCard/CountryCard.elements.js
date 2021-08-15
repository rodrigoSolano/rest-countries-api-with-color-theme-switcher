import styled from "styled-components";

export const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.backgroundElements};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const CountryCardImage = styled.img`
  max-height: 200px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const CountryCardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 4rem 3rem;
  background-color: ${(props) => props.theme.colors.backgroundElements};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0.5rem 0.5rem;
  h3 {
    font-size: 1.7rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 2rem;
    gap: 1rem;
    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.text};

      span {
        font-weight: normal;
      }
    }
  }
`;
