import styled from "styled-components";

export const StyledFeed = styled.div`
  display: grid;
  grid-template-columns: 316px 1fr 1fr;
  gap: 10px;
  background-color: transparent;
  width: 100%;
  margin-top: -20px;
  

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 143%;
  }
`;

export const LateralFeed = styled.div`
  height: auto;
  padding: 0 80px 0 80px;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-column: 1 / span 1;
    width: auto;
    margin: 0;
  }
`;

export const Category = styled.div`
  margin-top: 30px;
  background-color: #fff;
  padding: 20px 20px 20px 20px;

  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  h1 {
    font-family: "Open Sans";
    font-size: 13px;
    font-weight: bold;
    text-align: center;
  }

  .eclipse-container {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
    text-align: center;
  }

  .image {
    width: 40px;
    height: 60px;
    display: block;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    text-align: center;

    h1 {
      font-size: 4vw;
      line-height: 5vw;
    }

    .image {
      width: 7vw;
      height: 8vw;
    }
  }
`;

export const Publication = styled.div`
  grid-column: 2 / span 2;
  width: 70%;
  justify-content: center;
  align-items: center;
  padding: 10px;
   
  @media screen and (max-width: 768px) {
    grid-column: 1 / span 1;
    margin: 0;
  }
`;

export const NavbarPublication = styled.div`
  background-color: #3f3f3f;
  height: 70px;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  .menu {
    background-color: #3f3f3f;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 1px;
    margin-left: 180px;
    margin-top: -43px;
  }

  .ant-menu-item {
    color: #fff;
  }

  h1 {
    color: #fff;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    margin-left: 25px;
    margin-top: -5px;
  }
`;

export const CartRecomendation = styled.div`
  margin: 0 20px;
`;

export const PublicationProducts = styled.div`
  width: 100%;

`;

export const StyledLoading = styled.div`
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 10px;
    aspect-ratio: 1;
    border-radius: 50%;
    animation: l5 1s infinite linear alternate;
  }
  @keyframes l5 {
    0% {
      box-shadow: 20px 0 #000, -20px 0 #0002;
      background: #000;
    }
    33% {
      box-shadow: 20px 0 #000, -20px 0 #0002;
      background: #0002;
    }
    66% {
      box-shadow: 20px 0 #0002, -20px 0 #000;
      background: #0002;
    }
    100% {
      box-shadow: 20px 0 #0002, -20px 0 #000;
      background: #000;
    }
  }
`;

export const Eclipse = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f3f2f0;
  border: 3px solid #dddddd;
  border-radius: 50%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 120px;
    height: 150px;
  }
`;
