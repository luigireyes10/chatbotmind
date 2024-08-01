import { Avatar, Input } from 'antd';
import styled from 'styled-components';

export const StyledProductDetailAvailableOffer = styled.div`
  margin-bottom: 20px;
`;
export const StyledProductDetailAvailableOfferItem = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  display: flex;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 12px;
`;

export const StyledAvailableOfferItemInner = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledAvailableOfferPara = styled.span`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-right: 6px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 6px;
  }
`;
export const StyledAvailableOfferItemIcon = styled.span`
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;

export const StyledProductDetailItemTitle = styled.h3`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.font.size.lg};
  margin-bottom: 12px;
`;

export const StyledDeliveryInput = styled(Input)`
  height: 40px;
  margin-top: 8px;
`;

export const StyledProductDeliveryInfoPara = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  margin-top: 8px;
  margin-bottom: 4px;

  & span {
    margin-right: 12px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }
  }
`;

export const StyledProductDetailService = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.lg};

  &:not(:first-child) {
    margin-top: 12px;
  }
`;

export const StyledProductDetailServicePara = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: 12px;
  display: flex;
  align-items: center;
  margin-bottom: 0;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 12px;
  }
`;



export const StyledProductView = styled.div`
  position: relative;
  & .priceRecomended {
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  & .devolucion {
    margin-top: 5px;
    color: #00A3E1;
    text-align: justify;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    & span {
      color: #00A3E1;
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  & span.line-through {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: ${({ theme }) => theme.font.size.lg}; 
    margin-left: 4px;
    text-decoration: line-through;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 12px;
    }
  }
`;
export const StyledProductViewTitle = styled.h3`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 20px;
  margin-bottom: 4px;

  & h1 {
    color: #000;
    margin-top: 10px;
    margin-bottom: 0;
    text-align: justify;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .OpcionPopular-Container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;

  }

  & p {
    color: #505050;
    text-align: justify;
    font-family: Open Sans;
    font-size: 12px;
    font-style: normal;
    margin: 0;
    font-weight: 400;
    line-height: normal;
  }

  & .detailsProduct {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 5px;
  }

  & .OpcionPopular {
    position: relative;
    display: flex;
    width: max-content;
    align-items: center;
    justify-content: center;
    & p {
      color: #FFF;
      text-align: justify;
      font-family: Open Sans;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      position: absolute;
      margin: auto;
      padding-right: 10px;
      & span {
        color: #FF8E16;
        font-family: Open Sans;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    
  }


`;

export const StyledProductDetailPrice = styled.div`
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

  & .discount {
    color: #F25151;
    text-align: justify;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
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
`

export const StyledStrokeSubtitle = styled.h4`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.font.size.lg};
  margin-bottom: 16px;
`;

export const StyledProductDetailSpecification = styled.div`
  position: relative;

  & .ant-row > .ant-col {
    margin-bottom: 0;
  }

  & p {
    margin-bottom: 12px;
  }
`;

export const StyledProductDetailReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const StyledProductDetailReviewCirProgressView = styled.div`
  max-width: 150px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 20px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }
`;
export const StyledProductDetailReviewCirProgressInside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    font-size: ${({ theme }) => theme.font.size.base};
    display: flex;
    align-items: center;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & p {
    margin-left: 8px;
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.light};
    margin-bottom: 0;
    color: ${({ theme }) => theme.palette.text.primary};

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }

  & .anticon {
    font-size: ${({ theme }) => theme.font.size.base} !important;
    margin-left: 4px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 4px;
    }
  }
`;

export const StyledProductDetailReviewContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProductDetailReviewitem = styled.div`
  padding: 4px;
  font-size: ${({ theme }) => theme.font.size.base};
  display: flex;
  align-items: center;

  & .anticon {
    margin-left: 4px;
    margin-right: 4px;
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

export const StyledProductDetailReviewResult = styled.span`
  margin-left: 8px;
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};
  min-width: 30px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;

export const StyledProductDetailReviewCell = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
`;
export const StyledProductDetailReviewCellInfo = styled.div`
  position: relative;
  display: flex;
`;

export const StyledProductDetailReviewCellBadge = styled.span`
  background-color: ${({ theme }) => theme.palette.green[7]};
  color: white;
  width: 34px;
  height: 18px;
  margin-right: 8px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.font.size.sm};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }

  & .anticon {
    margin-left: 2px;
    font-size: 10px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 2px;
    }
  }
`;
export const StyledProductDetailReviewCellContent = styled.div`
  flex: 1;
  margin-left: 16px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 16px;
  }

  & h3 {
    color: ${({ theme }) => theme.palette.text.primary};
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 0;
  }
`;

export const StyledProductDetailCellAvatar = styled(Avatar)`
  height: 50px;
  width: 50px;
  overflow: hidden;
`;
export const StyledProductDetailCellTime = styled.span`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.palette.text.hint};
`;

export const StyledProductDetailCellAction = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  bottom: 2px;
  right: 2px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.font.size.base};

  [dir='rtl'] & {
    right: auto;
    left: 2px;
  }

  & .ant-btn {
    margin-left: 15px;
    margin-right: 5px;
    width: 25px;
    height: 25px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    padding: 2px;

    [dir='rtl'] & {
      margin-left: 5px;
      margin-right: 15px;
    }
  }
`;
