import styled from "styled-components";

export const StyledIllustrationCard = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  overflow: hidden;
  border-radius: 10px;
  align-items: center; 

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 2fr; 
  }
`;

export const StyledIllustrationImgHeader = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;

  & .img-full {
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    & .img-full {
      width: 30%;
    }
  }
`;

export const StyledIllustrationContent = styled.div`
  padding: 20px;
  cursor: pointer;
  width: 100%; 
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 24px;
    width: 200px; 
  }

  & h4 {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;