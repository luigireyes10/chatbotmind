import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledWallPaperCard = styled(AppCard)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  position: relative;
  min-height: 320px;
  justify-content: center;
  align-items: center;
  display: flex;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    background-color: ${({ theme }) => rgba(theme.palette.tooltipBg, 0.35)};
    border-radius: inherit;
  }

  & > * {
    position: relative;
    z-index: 3;
  }
`;

export const StyledDescuento = styled.div`
  
  position: absolute;


  h1 {
    font-weight: bold;
    color: #fff;
  }
`
export const Styleinfo = styled.div`
  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 100%; 

  h3 {
    font-weight: bold;
    color: #fff;
  }


`

export const StyledWallpaperHeader = styled.div`
 display: flex;
  align-items: center;
  justify-content: center; 
  margin-bottom: 16px;
  padding-top: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
    padding-top: 5px;
    margin-bottom: 12px; 
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-top: 2px;
    margin-bottom: 8px; 
  }

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    margin-bottom: 0;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: ${({ theme }) => theme.font.size.md};
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      font-size: ${({ theme }) => theme.font.size.sm};
    }
  }
`;


export const StyledDedc = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 100%; 
  top: -20px; 
  left: 20px; 

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    top: -15px; 
    left: 15px; 
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    top: -10px; 
    left: 10px; 
  }

  h1 {
    font-weight: bold;
    color: #fff;
    font-size: 2em;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: 1.5em;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      font-size: 1.2em;
    }
  }
`;

export const StyledWallpaperHeaderAction = styled.div`
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }

  & .anticon-heart {
    font-size: 20px;
  }
`;

export const StyledWallpaperContent = styled.div`
  padding-top: 40px;
`;

export const StyledWallpaperAvatar = styled(Avatar)`
  margin-bottom: 24px;
  width: 70px;
  height: 70px;
`;

export const StyledWallpaperTitle = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  margin: 0;
  font-size: 20px;
  line-height: 1.25;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    font-size: 30px;
  }
`;

export const StyledWallpaperContentFooter = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StyledWallpaperContentAction = styled.div`
  margin-left: auto;
  margin-right: -12px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  display: flex;
  font-size: ${({ theme }) => theme.font.size.base};

  [dir='rtl'] & {
    margin-left: -12px;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    font-size: 18px;
  }
`;

export const StyledWallpaperContentActionItem = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
  padding-right: 8px;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-left: 12px;
    padding-right: 12px;
    flex-direction: row;
  }

  & .middle-icon {
    display: block;
    font-size: 20px;
    margin-bottom: 5px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      vertical-align: middle;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 0;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 10px;
      }
    }
  }
`;
