import styled from "styled-components";

export const StyledDescription = styled.div`
  font-size: 15px;
  color: #333; 
`;

export default StyledDescription;





export const StyledIllustrationCard = styled.div`
  display: inline-block;
  //flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  align-items: center; 
`;

export const StyledIllustrationImgHeader = styled.div`
  position: relative;
  flex: 1;
  //display: flex;
  //margin-left: 50px;
  align-items: center;

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
      background-color: #1f410b;
    }
    .offerText {
      padding-left: 5px;
      color: #0b6777;
      font-weight: bold;
    }
    .offerText:hover {
      color: #a53805;
    }
  }
`;

