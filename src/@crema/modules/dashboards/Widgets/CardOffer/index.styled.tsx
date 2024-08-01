import styled from "styled-components";

export const StyledIllustrationCard = styled.div`
  display: flex;
  //flex-direction: column;

  align-items: center;
`;

export const StyledIllustrationImgHeader = styled.div`
  padding: 15px;
  gap: 10px;
  height: 200px;
  width: 200px;
  justify-content: center;
  @media only screen and (max-width: 480px) {
  }
`;

export const StyledIllustrationContent = styled.div`
  width: 100px;
  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 24px;
  } */
  /* 
  & h4 {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  .a-size-mini {
    cursor: pointer;
    .offer {
      color: #ffffff;
      background-color: #1f410b;
    }
    .offerText {
      color: #0b6777;
      font-weight: bold;
    }
    .offerText:hover {
      color: #a53805;
    }
  } */
`;
export const StyledSpanContent = styled.span`
  display: flex;
  gap: 10px;
  .offer {
    padding: 3px;
    color: #ffffff;
    background-color: #1f410b;
  }
  .offerText {
    color: #0b6777;
    font-weight: bold;
  }
`;
