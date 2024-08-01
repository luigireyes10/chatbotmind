import AppCard from "@crema/components/AppCard";
import styled from "styled-components";

export const StyledProductGridCard = styled(AppCard)`
  margin: 8px;
  box-shadow: 0 0 0 0 transparent !important;
  /* & .ant-card-body {
    padding: 20px;
  } */
`;
export const StyledProductGridCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-top: 8px;
  //margin-bottom: 20px;
`;

export const StyledProductGridCardHeaderThumb = styled.div<{ backgroundImage }>`
  min-height: 260px;
  flex: 1;
  text-align: center;

  position: relative;

  :hover {
    & img {
      opacity: 0;
    }
    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(${(props) => props.backgroundImage});
    }
  }
`;
export const StyledProductGridCardHeaderBadge = styled.span`
  font-size: ${({ theme }) => theme.font.size.base};
  max-height: 30px;
  //width: 48px;
  // background-color: ${({ theme }) => theme.palette.gray[10]};;
  color: ${({ theme }) => theme.palette.gray[10]};
  font-size: 17px;
  padding: 4px 8px;
  display: flex;
  justify-content: start;
  align-items: start;
  // font-weight: ${({ theme }) => theme.font.weight.medium};
  border-radius: 8px;

  & .anticon {
    margin-left: 4px;

    [dir="rtl"] & {
      margin-left: 0;
      margin-right: 4px;
    }
  }
`;

export const StyledProductListFavorCheck = styled.div`
  & .anticon {
    color: ${({ theme }) => theme.palette.gray[10]};
    font-size: 20px;
    cursor: pointer;
    margin-top: 5px;
    /* display: inline-block;
    justify-content: end; */
    //margin-bottom: -10px;
  }
`;

export const StyledProductListSearchCheck = styled.div`
  & .anticon {
    color: ${({ theme }) => theme.palette.gray[10]};
    font-size: 20px;
    cursor: pointer;
    margin-top: -20px;
    display: flex;
    justify-content: end;
    //margin-bottom: -10px;
  }
`;

export const StyledProductGridCardTitle = styled.h3`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.xl};
`;

export const StyledProductGridCardPara = styled.p`
  margin-bottom: 12px;
  // margin-left: 8px;

  color: ${({ theme }) => theme.palette.text.secondary};

  [dir="rtl"] & {
    margin-right: 0;
    margin-left: 24px;
  }
`;

export const StyledProductGridAction = styled.div`
  margin-left: -4px;
  margin-right: -4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.sm};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;
export const StyledProductGridActionItem = styled.span`
  padding-left: 4px;
  padding-right: 4px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.text.primary};

  &.cut {
    text-decoration: line-through;
  }

  &.green {
    color: ${({ theme }) => theme.palette.green[5]};
  }
`;
