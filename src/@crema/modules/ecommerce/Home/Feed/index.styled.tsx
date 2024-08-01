import { Button } from "antd";
import styled from "styled-components";

export const StyledProductListView = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 350px;
  width: 100%;
  z-index: 1000;
  align-items: center; 
`;

export const StyledProductListMainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 20px;
  width: 100%;
  align-items: center; 
`;

export const StyledButton = styled(Button)`
  color: #fff;
  background-color: #9eafbd;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;

 
`;



export const StyledProductRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 0 20px;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
`;

export const StyledProductCardContinue = styled.div`
  background-color: #ffff;
  padding: 20px;
  width: 100%;
  align-self: center; 
  
`;



export const StyledRecomendationsProd = styled.div`
background-color: #ffff;
  padding: 20px;
  width: 100%;
  align-self: center; 
  
`;

export const StyledUniformEmpresa = styled.div`
  background-color: #ffff;
  padding: 20px;
  width: 100%;
  align-self: center; 

  h2 {
    margin-bottom: 20px;
  }
`;

export const ProductsOffers = styled.div`
  width: 100%;
  align-items: center; 
`;

export const ProductsVisited = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px; 
  margin-bottom: 20px;
  /* width: 95%;
  height: 95%; */
 /// justify-content: center;
`;

export const ProductsVisitedMore = styled.div`
  //display: flex;
  //grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  /* width: 95%;
  height: 95%; */
 /// justify-content: center;
`;

export const ProductsVisitedOffer = styled.div`
  //display: ;
  //grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  // width: 80%;
  /* height: 95%;  */
  justify-content: center;
  margin-left: 10px;
`;

export const StyledPageScroll = styled.div`
  height: calc(100vh - 50px);
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 3px;
  }
`;

export const StyledDivCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center; 
`;
