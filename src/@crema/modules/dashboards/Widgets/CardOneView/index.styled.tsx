import styled from "styled-components";

export const StyledIllustrationCard = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  //border: 2px solid #00a3e1;
  border-radius: 10px;
  //box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  width: 100%;
`;

export const StyledIllustrationImgHeader = styled.div`
  position: relative;
  flex: 1;
  display: flex;

  & .img-full {
    width: 100%;
  }
`;

export const StyledIllustrationContent = styled.div`
  padding: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 24px;
  }

  & h4 {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  .a-size-mini {
    cursor: pointer;
    .offer {
      color: #ffffff;
      padding: 8px;
      background-color: #6e0202;
    }
    .offerText {
      padding-left: 4px;
      color: #0b6777;
      font-weight: bold;
    }
    .offerText:hover {
      color: #a53805;
    }
  }
`;
