import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledProductListView = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledProductListMainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const StyledProductRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-gap: 20px;
  margin: 0 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
    }
`;