import { Button, Form } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';


export const StyledBarSingUp = styled.div`
  
`;

export const StyledSignUpCardHeader = styled.div`
    margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 25px;
  }

  & h2 {
    color: #000;
    font-family: 'Lobster', cursive;
    
    font-size: 36px;
  }

  & p {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;

  }

  & .StyledSignUpGrayText{
    margin-top: 15px;
    display: flex;
    width: 100%;
  }

  & .texto{
    margin:0px 10px;
    width: calc(100% - 250px) ;    
    border-top:1px solid #999;
    position: relative;
    top:10px;
    float:left;
  }


`;

export const StyledSignCrearCuenta = styled.div`
    margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 25px;
  }
  & h2 {
    color: #ff9900; 
    font-family: 'Lobster', cursive;
    font-size: 36px;
    margin: 0; 
  }
  .small-logo {
  width: 59px;
  height: 59px;
}
 

`;

export const StyledLoginCardHeader = styled.div`
  position: absolute;
  top: 10%;
  left: 20%; /* Centra horizontalmente */
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 25px;
  }

  & h2 {
    color: #ff9900; 
    font-family: 'Lobster', cursive;
    font-size: 36px;
    margin: 0; 
  }

  & .texto {
    margin: 0px 10px;
    width: calc(100% - 250px);
    border-top: 1px solid #999;
    position: relative;
    top: 10px;
    float: left;
  }
`;


export const StyledSignUpWelContent = styled.div`
    flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const StyledSignUpMainContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 20px;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 40%;
    padding: 40px;
  }

`;

export const StyledSignUpWellAction = styled.div`
  position: relative;
  padding: 24px;
  display: none;
  color: black;
  font-size: ${({ theme }) => theme.font.size.base};
  width: 100%;
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 60%;
    padding: 30px;
  }

  & h2 {
    color: black;
    font-size: 30px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & p {
    line-height: 1.6;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledSignUp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledSignUpContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledSignUpInputContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100%;

`;

export const StyledSignUpIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  right: 0;
  height: 100%;
  & .icon {
      position: absolute;
      right: 10px;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.palette.text.disabled};
    }
`;

export const StyledSignUpForm = styled(Form)`
  position: relative;

  & .form-label{
    font-size: 0.9rem;
    font-weight: 600;
    color: #000;
  }
  
  & .form-field {
    margin-bottom: 10px;
    position: relative;
  }

  & .form-btn-field {
    position: relative;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
  }

  & .form-field-action {
    
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.secondary};
    display: flex;
    justify-content: center;
    & span {
      margin-right: 8px;
      display: inline-block;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 8px;
      }
    }
  }
`;

export const StyledSignupCheckBox = styled(Form.Item)`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.base};
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  margin-top: 6px;
  margin-bottom: 20px;

  & .ant-form-item-control-input {
    min-height: 10px;
  }

  & .ant-form-item-control-input-content {
    flex-direction: row-reverse;
    align-items: center;
  }

  & .ant-checkbox-wrapper {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  & .ant-checkbox + span {
    padding-left: 12px;

    [dir='rtl'] & {
      padding-left: 8px;
      padding-right: 12px;
    }
  }
`;

export const StyledSignupLink = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;
`;

export const StyledSignUpTestGrey = styled.span`
  color: ${({ theme }) => theme.palette.text.disabled};
`;

export const StyledSignLinkTag = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledSignedText = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.disabled};
  margin-right: 10px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }
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

export const StyledSignSocialLink = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
`;

export const StyledSignIconBtn = styled(Button)`
  color: ${({ theme }) => theme.palette.text.secondary};
  padding: 6px 4px 4px;
  border: 0 none;
  box-shadow: none;
  background-color: transparent;
  width: 10px;
  min-width: 8px;

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

export const StyledSignUpBtn = styled(Button)`
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  width: 50rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.base};
  text-transform: uppercase;
  line-height: 1;
`;
