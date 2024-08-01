import styled from 'styled-components';


export const StyledProductProductCardAdd = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 10px;
  border: 1.5px solid #00A3E1;
  background: #FBFBFB;
  & h2 {
    color: #000;

    text-align: justify;
    font-family: Open Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const StyledProductCardAddStock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  & h2 {
    color: #00A3E1;
    text-align: justify;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .ant-select {
    
    max-width: 120px;
    width: 100%;
  }
`;

export const StyledProductImageSlideRoot = styled.div`
  position: relative;
  display: flex;

  & .BrainhubCarousel__container {
    margin-left: 10px;
    border-radius: 10px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 10px;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      margin-bottom: 20px;
    }

    & .BrainhubCarousel {
      height: 100%;
    }
  }

  & .BrainhubCarousel__dots {
    flex-direction: column;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      display: none;
    }

    & .BrainhubCarousel__thumbnail {
      opacity: 1;
      background-color: transparent;
      border-radius: 10px;
      margin-bottom: 10px;
      border: 1px solid ${({ theme }) => theme.palette.borderColor};

      &.BrainhubCarousel__thumbnail--selected {
        border: solid 2px ${({ theme }) => theme.palette.gray[600]};
      }
    }

    & img {
      height: 80px;
    }
  }
`;

export const StyledProductFav = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  font-size: 20px;
  cursor: pointer;

  [dir='rtl'] & {
    right: auto;
    left: 10px;
  }
`;

export const StyledProductCardAddAction = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: column;

  & .btn-secondary {
    border-radius: 10px;
    background: #FF8E16;
    color: #2F2F2F;
    height: 35px;
  }

  & .primary {
    border-radius: 10px;
    background: #00A3E1;
    color: #fff;
    height: 35px;
  }

`;

export const StyledProductCardAddHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: column;

  & .devolucion {
    color: #00A3E1;
    text-align: justify;
    font-family: Open Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    & span {
      color: #00A3E1;
      font-family: Open Sans;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }

  & p {

    & span {
      color: #00A3E1;
      font-family: Open Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    
  }
`;

export const StyledProductCardAddFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  gap: 3px;
  & p {
    color: #595959;
    text-align: justify;
    font-family: Open Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0;
    margin: 0;
  }

  & span {
    color: #00A3E1;
    text-align: left;
    font-family: Open Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
  }
`;


export const StyledProductCardAddPrice = styled.div`
  display: flex;
  gap: 5px;
  & h2 {
    
    color: #000;
    text-align: justify;
    font-family: Open Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & span {
    color: #000;
    text-align: justify;
    font-family: Open Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
