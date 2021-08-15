import styled from "styled-components";

const headerHeight = "6.4rem";
const paddingLeft = "2rem";
const paddingRight = "2rem";
const paddingTop = "2rem";
const paddingBottom = "2rem";

export const Header = styled.header`
  width: 100%;
  height: ${headerHeight};
  background-color: ${(props) => props.theme.colors.backgroundElements};
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  padding: ${paddingLeft} ${paddingRight} ${paddingTop} ${paddingBottom};
  @media (min-width: 1024px) {
    padding: 3rem 5rem 3rem 5rem;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.text};
`;
