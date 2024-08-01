import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import { Input } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';
import { Select } from 'antd';
const { Option } = Select;

export const StyledCreatePostCard = styled(AppCard)`
  margin-bottom: 32px;
  position: relative;
`;

export const StyledCreatePostMain = styled.div`
  display: flex;
`;

export const StyledCreatePostMainContent = styled.div`
  margin-left: 14px;
  flex: 1;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }
`;


export const StyledSelectorDesing = styled.div`
 
`;


export const StyledSearch = styled.div`
 display: flex;
 z-index: 1000;


`;

export const CustomStyledAppSelect = styled(Select)`
 font-size: ${({ theme }) => theme.font.size.lg};
  border-radius: 50px;
  overflow: hidden;
  width: 100px;
  height: 38px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;

  /* Establecer el borde izquierdo sin redondear */
  

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    border-radius: ${({ theme }) => theme.cardRadius};

    & .ant-input-suffix {
      margin-left: -8px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: -8px;
      }
    }

    &:before {
      display: none;
    }
  }

  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 44px;
    background-color: #EEEEEE;
  }

  &.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 28px;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  &.ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 28px;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const StyledOption = styled(Option)`
  cursor: pointer;
  padding: 8px;
  font-size: ${({ theme }) => theme.font.size.base};
`;





export const StyledPostInput = styled(Input)`
  font-size: ${({ theme }) => theme.font.size.lg};
  border-radius: 50px;
  overflow: hidden;
  width: 200px;
  height: 38px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  background-color: ${({ theme }) => theme.palette.background.paper};

  /* Establecer el borde izquierdo sin redondear */
  /* border-top-left-radius: 0;
  border-bottom-left-radius: 0; */

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    border-radius: ${({ theme }) => theme.cardRadius};

    & .ant-input-suffix {
      margin-left: -8px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: -8px;
      }
    }

    &:before {
      display: none;
    }
  }
`;














export const StyledCreatePostInput = styled(Input)`
  font-size: ${({ theme }) => theme.font.size.lg};
  border-radius: 50px;
  overflow: hidden;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  background-color: ${({ theme }) => theme.palette.background.paper};

  /* Establecer el borde izquierdo sin redondear */
  /* border-top-left-radius: 0;
  border-bottom-left-radius: 0; */

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    border-radius: ${({ theme }) => theme.cardRadius};

    & .ant-input-suffix {
      margin-left: -8px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: -8px;
      }
    }

    &:before {
      display: none;
    }
  }
`;

export const StyledCreatePostAction = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledCreatePostActionBtn = styled.span`
  border: 0 none;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: transparent;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  width: 36px;
  height: 36px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${() => rgba('black', 0.05)};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover,
    &:focus {
      background-color: ${() => rgba('black', 0.05)};
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  & svg {
    display: block;
    font-size: 18px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 20px;
    }
  }
`;

export const StyledCreatePostImgList = styled(AppList)`
  margin-bottom: 8px;
  display: flex !important;
  flex-wrap: wrap;
  flex-direction: row !important;
`;

export const StyledCreatePostImgItem = styled.div`
  padding: 4px;

  & img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
