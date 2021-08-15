import styled from "styled-components";

const width = "12rem";

export const BackButton = styled.button`
  width: ${width};
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.5rem;
  background-color: ${(props) => props.theme.colors.backgroundElements};
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
