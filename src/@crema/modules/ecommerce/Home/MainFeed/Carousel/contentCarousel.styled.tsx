import AppCard from '@crema/components/AppCard';
import { Button } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledHeaderImgCard = styled(AppCard)`
  border-radius: 0; // Agrega esta línea
  color: ${({ theme }) => theme.palette.primary.contrastText};
  position: relative;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  text-align: center;
  .ant-card-head-title {
    margin-top: 100px;
    font-size: 2em; // Ajusta este valor a tus necesidades
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    background-color: #00000031;
  }

  & > * {
    position: relative;
    z-index: 3;
  }

  & .ant-card-head-title {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  @media (max-width: 768px) {
    .ant-card-head-title {
      margin-top: 50px;
      font-size: 1.5em;
    }
  }
`;

export const StyledHeaderImgContent = styled.div`
  margin-top:-50px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px; // Ajusta este valor a tus necesidades
  max-width: 1080px;
 
  @media (max-width: 768px) {
    max-width: 1100px;
    font-size: 16px;
    
  }
`;

export const StyledHeaderImgFooter = styled.div`
display: flex;
position: relative;

 
`;

export const StyledHeaderImgBtn = styled(Button)`

background-color:transparent;
border-color:transparent;
  & + & {
    margin-left: 16px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 16px;
    }
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;


export const StyledBotton = styled.a`


  &.btnfos-3 {
    background: linear-gradient(to right, rgb(255, 142, 22), rgb(255, 142, 22));
    border: none;
    color: white;
    text-shadow: none;
    box-shadow: 0px 2px 0 white, 2px 4px 6px #eee;
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.5s ease;
    padding: 13px 25px;
    border-radius: 5px;
    display: inline-block;
    text-decoration: none;
    
  }

  

  &.btnfos-3:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    transform: scale(1.05);
    text-decoration: none;
  }



  &.btnfos-4 {
    background: linear-gradient(to right, rgb(245, 244, 244), rgb(243, 243, 243));
    border: none;
    color: #000000;
    text-shadow: none;
    box-shadow: 0px 2px 0 white, 2px 4px 6px #eee;
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.5s ease;
    padding: 13px 25px;
    border-radius: 5px;
    display: inline-block;
    margin-left: 70px;
    text-decoration: none;
    
  }

  &.btnfos-4:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    transform: scale(1.05);
    text-decoration: none;
  }
`;