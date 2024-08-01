import styled from "styled-components";

export const StyledCarrusel = styled.div`
  width: 100%; 
  max-width: 900px;
  margin: 0 auto; 
  border: none;

  .image {
    width: 100%;
    height: 60%;
  }

  @media (max-width: 768px) {
    max-width: 930px;
  }
  @media (max-width: 1920px) {
    max-width: 989px;
  }
`;

export const StyledCarruselShort = styled.div`
  overflow: hidden;
  margin-top: -149px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: -50px;
  }
`;
