import {Button, List} from 'antd';
import {darken, lighten} from 'polished';
import styled from 'styled-components';
import AppScrollbar from '../AppScrollbar';

export const StyledDrowdownWrapper = styled.div`
  & .header-notify-messages {
    width: 260px;
    padding: 0;

    .ant-dropdown-menu {
      padding: 0;
    }

    @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}px) {
      width: 300px;
    }

    @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
      width: 380px;
    }

    & .ant-dropdown-menu-item {
      padding: 0;
      white-space: normal;

      &:hover {
        background-color: transparent;
      }

      &:first-child {
        padding: 12px 20px;
        font-weight: ${({theme}) => theme.font.weight.medium};
        cursor: inherit;

        &:hover,
        &:focus {
          background-color: transparent;
        }
      }
    }
  }
`;

export const StyledNotifyScrollSubmenu = styled(AppScrollbar)`
  height: 200px;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
    height: 380px;
  }
`;

export const StyledNotifyList = styled(List)`
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledNotifyButtonAll = styled(Button)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  width: 100%;
  text-transform: capitalize;
`;

export const StyledNotifyLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${({theme}) => theme.font.size.lg};
  border-radius: 0;
  padding: 18px 12px;
  margin-top: -10px;
  color: ${({theme}) => theme.palette.text.primary};

  &:hover,
  &:focus {
    color: ${({theme}) => theme.palette.text.primary};
    background-color: transparent;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
    font-weight: ${({theme}) => theme.font.weight.medium};
    text-transform: uppercase;
    margin-top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: ${({theme}) => theme.palette.text.secondary} !important;
    padding: 9px;
    border-radius: ${({theme}) => theme.sizes.borderRadius.circle};
    border: 1px solid transparent;
    line-height: 1;

    

    &:hover,
    &:focus {
        & span {
          color: #00A3E1;
        }
    }
  }
`;

export const StyledNotifyIcon = styled.span`
  position: relative;
  display: none;
  color: white;
  &:focus,
  &:hover {
    color: #00A3E1;
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
    display: block;
  }
`;

export const StyledNotifyText = styled.span`
  font-size: ${({theme}) => theme.font.size.lg};
  font-weight: ${({theme}) => theme.font.weight.regular};

  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
    display: none;
  }
`;


export const StyleContadorNotify = styled.div`


        background-color: red;
        color: white;
        border-radius: 50%;
        width: 17px;
        height: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 3px;
        left: 19px;
        z-index: 1;
 

`

export const Styledcontent = styled.div`
position:relative;
`

export const Styledcontenttext = styled.div`
  font-size: 13px;
  margin-top: -3px;
`