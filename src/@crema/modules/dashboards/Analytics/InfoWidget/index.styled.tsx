import styled from 'styled-components';
import AppCard from '@crema/components/AppCard';

export const StyledAnaInfoWidgetCard = styled(AppCard)`
  & .ant-card-body {
    cursor: pointer;
    padding-left: 8px;
    padding-right: 8px;
    background-color: #858381 !important;
    color: #fff;
    width: 500;
  }
`;

export const StyledAnaInfoWidgetInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledAnaInfoWidgetImg = styled.div`
  margin-bottom: 16px;
  width: 60px;
  height: 60px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: 80px;
    height: 80px;
  }
`;

export const StyledAnaInfoWidgetContent = styled.div`
  text-align: center;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%; 

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 18px;
    color: white;
    margin-bottom: 0;
    margin-top: 10px; // Ajusta este valor para mover el texto más abajo
  }

  & p {
    margin-bottom: 0;
    margin-top: 10px; // Ajusta este valor para mover el texto más abajo
    text-align: center;
    color: white;
  }
`;

