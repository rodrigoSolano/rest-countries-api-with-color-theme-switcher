import styled from "styled-components";

const paddingLeft = "2rem";
const paddingRight = "2rem";
const paddingTop = "3rem";
const paddingBottom = "2rem";

export const Home = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 1024px) {
    padding: 3rem 5rem 3rem 5rem;
  }
`;

export const Two = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  grid-gap: 3rem;
  align-items: flex-end;
  position: relative;
`;
