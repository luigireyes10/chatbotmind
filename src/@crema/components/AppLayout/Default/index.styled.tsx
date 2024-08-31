


import AppScrollbar from "../../AppScrollbar";
import { Layout, Input } from "antd";
import styled from "styled-components";
import MainSidebar from "../components/MainSidebar";

const { Header } = Layout;
const { Search } = Input;
const icon= '/assets/modalcintillooferta_img/Imagenmodaaal.png'

export const StyledHeaderLogo = styled.div`
  display: flex;
  right: calc(100% + 15px);
  align-items: center;
  justify-content: center;
  width: 200px;
  height: auto;
  top: -15px;
`;



export const StyledHe = styled.div`
background-color: #d38106;
color: white;
  padding: 5px;
  text-align: center;
  width: 93.1%;
  cursor: pointer;

  span {
    margin-right: 10px;
  }

  button {
    color: white;
    text-decoration: underline;
  }
`;





const StyledOfferContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .offer-item {
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-image: url(${icon});
    background-size: cover;
    background-position: center;
  }

  .content {
    position: relative;
    z-index: 1;
  }

  .content h3,
  .content p {
    background-color: rgb(0, 0, 0); 
    padding: 10px;
    border-radius: 5px;
    color: white; 
  }

  .small-text {
    font-size: 12px;
    margin-top: 10px;
    text-align: left;
  }

  .button-container {
    margin-top: 20px;
  }
`;

export const StyledHeaderColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 80%;
  gap: 20px;
`;

export const StyledHeaderSearchColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledHeaderIconsColumn = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

export const StyledAppHeader = styled(Header)`
color: ${({ theme }) => theme.palette.text.primary}!important;
background-color: ${({ theme }) => theme.palette.gray.FOREGROUND_NAV};
height: 70px;
line-height: 1;
border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor}!important;
transition: all 0.1s linear;
position: sticky;
right: 0;
left: 0;
top: 0;
z-index: 9;
display: flex;
align-items: center;
justify-content: center;
margin-right:6.9%; /* Agregar margen derecho */

@media screen and (max-width: 1200px) {
    margin-right: 0; /* Desactivar margen derecho en pantallas pequeñas */

    
    
}
@media screen and (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    height: min-content !important;
    padding-top: 10px;
    padding-bottom: 10px;
}


@media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    height: min-content !important;
    padding-top: 10px;
    padding-bottom: 10px;

}

& .trigger {
    font-size: 20px;
    margin-right: 10px;
    padding: 5.5px;
    color: ${({ theme }) => theme.palette.text.primary};

    [dir="rtl"] & {
        margin-right: 0;
        margin-left: 10px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
        margin-right: 20px;

        [dir="rtl"] & {
            margin-right: 0;
            margin-left: 20px;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
        display: none;
    }

    & svg {
        display: block;
    }
}
`;

export const StyledHeaderSearch = styled(Search)`
  position: relative;
  width: 100%;
  min-height: 30px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 100%;
  }

  & .ant-input-search {
    width: 100%;
  }
  & .ant-input-group-addon {
    background-color: ${({ theme }) =>
      theme.palette.gray.FOREGROUND_NAV} !important;
  }
  & .ant-input-wrapper {
    z-index: 1;

    [dir="rtl"] & {
      right: auto;
      left: 0;
    }
  }

  & .ant-input {
    padding: 8px 14px;
    height: 30px;
    transition: all 0.2s ease;
    width: 100%;

    &:focus {
      width: 100%;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 100%;
    }
  }
  & .ant-input-search-button {
    height: 30px;
    width: 40px;
    box-shadow: none;
    background-color: ${({ theme }) =>
      theme.palette.gray.FOREGROUND_NAV} !important;

    & .anticon svg {
      color: ${({ theme }) => theme.palette.white} !important;
      display: block;
    }
  }

  &.ant-input-search-rtl
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    border-radius: ${({ theme }) => theme.palette.gray.FOREGROUND_NAV} 0 0
      ${({ theme }) => theme.sizes.borderRadius.base};
    background: ${({ theme }) => theme.palette.gray.FOREGROUND_NAV} !important;
  }
`;

export const StyledAppHeaderSectionDesk = styled.div`
  display: none;
  margin-right: 8px;
  padding: 10px;
  color: ${({ theme }) => theme.palette.white} !important;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    // Config size icons for navbar
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
  }
`;

export const StyledAppHeaderSectionMobile = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

export const StyledAppMainSidebar = styled(MainSidebar)`
  &.ant-layout-sider {
    flex: 0 0 auto !important;
    max-width: none !important;
    min-width: 0 !important;
    width: 17.5rem !important;
    transition: all 0.1s linear;
    border-right: 1px solid ${({ theme }) => theme.palette.borderColor};
    background-color: inherit;

    @media screen and (min-width: 1200px) and (max-width: 1300px) {
      width: 15rem !important;
    }
  }

  &.ant-layout-sider-dark {
    //background-color: @sidebar-dark-bg-color;
    background-color: inherit;
  }

  & .ant-layout-sider-trigger {
    display: none;
  }

  &.ant-layout-sider-has-trigger {
    padding-bottom: 0;
  }

  // Sidebar Collapsed
  &.ant-layout-sider-collapsed {
    width: 0 !important;
    transition: all 200ms linear;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      width: 4rem !important;
    }

    & + .app-layout-main {
      width: 100% !important;
      transition: all 200ms linear;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        width: calc(100% - 4rem) !important;
      }
    }

    & .cr-user-info {
      padding-left: 12px;
      padding-right: 12px;
    }

    & .cr-user-info-content {
      opacity: 0;
      visibility: hidden;
      width: 0;
      padding-left: 0;
      padding-right: 0;
      margin-left: 0;

      [dir="rtl"] & {
        margin-right: 0;
      }
    }

    & .ant-menu-item-group-title {
      opacity: 0;
      visibility: hidden;
      width: 0;
      height: 0;
      padding: 0;
    }
  }

  & .cr-user-info {
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  }

  &.sidebar-img-background {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: inherit;
      z-index: 1;
      opacity: 0.5;
    }

    & > div {
      position: relative;
      z-index: 3;
    }

    & .ant-menu.ant-menu-dark,
    .ant-menu-dark .ant-menu-sub,
    .ant-menu.ant-menu-dark .ant-menu-sub {
      background-color: transparent;
      color: inherit;
    }

    & .app-main-sidebar-menu.ant-menu-dark .ant-menu-item-group-title,
    & .app-main-sidebar-menu .ant-menu-item a {
      color: inherit;
    }

    & .ant-menu {
      background-color: transparent;
    }
  }
`;

export const StyledAppSidebarScrollbar = styled(AppScrollbar)`
  height: calc(100vh - 56px);

  .appMainFixedFooter & {
    height: calc(100vh - 102px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: calc(100vh - 90px);

    .appMainFixedFooter & {
      height: calc(100vh - 116px);
    }
  }
`;

export const StyledAppLayout = styled(Layout)`
  min-height: 100vh;
  position: relative;
  background: ${({ theme }) => theme.palette.background.default};
  overflow-x: hidden;

  &.appMainFixedFooter {
    padding-bottom: 46px;

    & .app-main-footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9;
      width: 100%;
    }
  }

  & .ant-layout {
    background: none;
  }
  &.ant-layout-sider-zero-width-trigger {
    display: none;
  }
`;

export const StyledMainScrollbar = styled(AppScrollbar)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-height: calc(100vh - 56px);

  .appMainFixedFooter & {
    max-height: calc(100vh - 104px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-height: calc(100vh - 135px);

    .appMainFixedFooter & {
      max-height: calc(100vh - 118px);
    }
  }
`;

export const StyledAppLayoutMain = styled(Layout)`
  transition: all 0.1s linear;
  width: 100% !important;
  position: relative;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.palette.background.paper};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    flex-shrink: inherit;
    width: calc(100% - 17.5rem) !important;
  }

  @media screen and (min-width: 1200px) and (max-width: 1300px) {
    width: calc(100% - 15rem) !important;
  }
`;