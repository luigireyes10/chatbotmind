import { Button, Form } from "antd";
import Link from "next/link";
import { RiH5 } from "react-icons/ri";
import { text } from "stream/consumers";
import styled from "styled-components";

export const StyledSign = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledSignContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledSignBtn = styled(Button)`
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  width: 100%;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.base};
  text-transform: uppercase;
  line-height: 1;
`;

export const StyledSignBtnFull = styled(Button)`
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  width: 10rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.base};
  text-transform: uppercase;
  line-height: 1;
  width: 100%;
`;

export const StyledSignForm = styled(Form)`
  flex: 0;
  display: flex;
  flex-direction: column;

  & .center-content {
    text-align: center; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  & .form-field {
    margin-bottom: 20px;
  }

  & .form-btn-field {
    position: relative;
    margin-bottom: 16px;
  }

  & .form-field-action {
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-top: auto;

    & span {
      margin-right: 8px;
      display: inline-block;

      [dir="rtl"] & {
        margin-right: 0;
        margin-left: 8px;
      }
    }
  }
`;

export const StyledRememberMe = styled.div`
  position: relative;
  display: flex;

  & label {
    margin-bottom: 10px;
  }
`;

export const StyledSignLink = styled.span`
  color: #00a3e1;
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;
  margin-bottom: 16px;
  text-align: left;
  text-decoration: underline;
  margin-left: 140px;
  display: block;

  [dir="rtl"] & {
    text-align: left;
  }
`;

export const StyledSignTextGrey = styled.span`
  color: ${({ theme }) => theme.palette.text.disabled};
`;

export const StyledSignLinkTag = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledSignFooter = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  margin: 12px -24px -24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-left: 20px;
    padding-right: 20px;
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: -20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: 40px;
    padding-right: 40px;
    margin-left: -40px;
    margin-right: -40px;
    margin-bottom: -40px;
  }

  & .signup-btn {
    text-transform: capitalize;
  }
`;

export const StyledSignedText = styled.span`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.disabled};
  margin-right: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 16px;

    [dir="rtl"] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  // Incorporacion de lineas para el or login with email
  ::before,
  ::after {
    content: "  ───────────  ";
    display: inline;
    width: 100%;
  }
`;

export const StyledSignSocialLink = styled.div`
  display: flex;
  align-items: center;
  margin-left: 75px;
  margin-bottom: 40px;
  padding: 10 80px;
`;

export const StyledSignIconBtn = styled(Button)`
  color: ${({ theme }) => theme.palette.text.secondary};
  border: 0 none;
  box-shadow: none;
  flex: 1;
  height: 26px;
  margin-block-end: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 36px;
    min-width: 36px;
    height: 36px;
    padding: 8px 6px 6px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: transparent;
  }

  & .anticon {
    font-size: ${({ theme }) => theme.font.size.base};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: ${({ theme }) => theme.font.size.lg};
    }

    & svg {
      display: block;
    }
  }

  &.ant-btn-icon-only > * {
    font-size: ${({ theme }) => theme.font.size.base};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: ${({ theme }) => theme.font.size.lg};
    }
  }
`;

export const SignInButton = styled(Button)`
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: 1;
  //background-color: #022f3c;
  color: #fff;
`;

// Estilos nuevos para el Login

export const SignInText = styled.span`
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SignInTitle = styled.span`
  font-size: 22px;
  font-family: "Calibri", cursive;
  text-align: center;
  margin-bottom: 25px;
`;

export const StyledSignIconSocial = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  border: 0;
  flex: 1;
  height: 26px;
  margin-block-end: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 36px;
    min-width: 36px;
    height: 36px;
    padding: 8px 6px 6px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: transparent;
  }

  & .anticon {
    font-size: ${({ theme }) => theme.font.size.base};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: ${({ theme }) => theme.font.size.lg};
    }

    & svg {
      display: block;
    }
  }

  &.ant-btn-icon-only > * {
    font-size: ${({ theme }) => theme.font.size.base};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: ${({ theme }) => theme.font.size.lg};
    }
  }

  .google-login{
    width: 40px;
    height: 30px;
    border: 0 !important;
    padding: 0 !important;
  }
`;