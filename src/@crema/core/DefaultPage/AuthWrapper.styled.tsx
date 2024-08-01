import { Card, Layout } from 'antd';
import styled from 'styled-components';
import AppScrollbar from '@crema/components/AppScrollbar';
export const StyledAuthWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledAuthCard = styled(Card)`

  max-width: 1200px;
  min-height: 300px;
  border-radius: 5px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  border: 0 none;
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    min-height: 350px;
  }

  & .ant-card-body {
    
    padding: 0;
    display: flex;
    flex: 1;
    flex-direction: row;
  }
`;

export const StyledAuthMainContent = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  flex: 1;
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 20px;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 40%;
    padding: 40px;
  }
`;

export const StyledAuthTextLine = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  ::before {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0; /* La línea ocupa la mitad izquierda del elemento */
    border-bottom: 1px solid #999; /* Puedes ajustar el grosor y el color de la línea */
  }
  & span {
    position: relative;
    background-color: #fff;
    padding: 0 10px;
    color: #999;
    font-size: 14px;
  }


`;

export const StyledAuthCardHeader = styled.div`
  font-size: 40px;
  font-family: 'lobster', cursive;
  font-weight: bold;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 25px;
  }

  & h2 {
    color: #000;
    font-family: 'Lobster', cursive;
    
    font-size: 36px;
  }

  & p {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;

  }

  & .StyledSignUpGrayText{
    margin-top: 15px;
    display: flex;
    width: 100%;
  }


  & .texto{
    margin:0px 10px;
    width: calc(100% - 250px) ;    
    border-top:1px solid #999;
    position: relative;
    top:10px;
    float:left;
  }

  & .leyenda {
    font-size: 14px;
  float:left;
 }
 .small-logo {
  width: 90px;
  height: 90px;
}

`;

export const StyledAuthWellAction = styled.div`
  position: relative;
  padding: 24px;
  display: none;
  font-size: ${({ theme }) => theme.font.size.base};
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 60%;
    padding: 30px;
  }

  & h2 {
    color: black;
    font-size: 30px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & p {
    line-height: 1.6;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledAuthWelContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAuth = styled(Layout)`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  //background-color: @primary-color;

  & .ant-layout-content {
    padding: 20px;
    justify-content: center;
    display: flex;
  }

  & .main-auth-scrollbar {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  & .footer {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const StyledMainAuthScrollbar = styled(AppScrollbar)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
