import styled from "styled-components";

export const Switcher = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  gap: 1rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.backgroundElements};
  svg {
    width: 2rem;
    height: 2rem;
  }
  fill: ${(props) => props.theme.colors.text};
`;
