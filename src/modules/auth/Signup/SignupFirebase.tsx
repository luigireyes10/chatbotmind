import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import AppSocialLogos from "@crema/components/AppLayout/components/AppLogos";
import { App, Checkbox, Form, Input } from "antd";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useIntl } from "react-intl";
import { useAuthMethod } from "@crema/hooks/AuthHooks";
import {
  StyledSignIconBtn,
  StyledSignLinkTag,
  StyledSignSocialLink,
  StyledSignUp,
  StyledSignUpBtn,
  StyledSignupCheckBox,
  StyledSignUpContent,
  StyledSignUpForm,
  StyledSignUpIcon,
  StyledSignupLink,
  StyledSignUpTestGrey,
  StyledSignUpInputContainer,
  StyledSignUpWellAction,
  StyledSignUpWelContent,
  StyledSignUpMainContent,
  StyledSignUpCardHeader,
  StyledSignCrearCuenta,
} from "./index.styled";
import { SignUpProps } from "@crema/services/auth/firebase/FirebaseAuthProvider";
import { StyledAuthCardHeader, StyledAuthTextLine } from "@crema/core/DefaultPage/AuthWrapper.styled";

import AppSignUpLogo from "@crema/components/AppLayout/components/AppAuth";
import AppLogo from "@crema/components/AppLayout/components/AppLogo";
import { StyledSignIconSocial} from "../Signin/index.styled";
import SignInWithGoogle from "../Signin/SignInWithGoogle";

const SignupFirebase = () => {
  const { messages } = useIntl();

  const { registerUserWithEmailAndPassword, logInWithPopup } = useAuthMethod();

  return (
    <>
      <StyledSignUpWellAction>
        <StyledSignUpWelContent>
          <AppSignUpLogo />
        </StyledSignUpWelContent>
      </StyledSignUpWellAction>

      <StyledSignUpMainContent>
      <StyledAuthCardHeader>
          {/* <IntlMessages id="common.welcomeBack" /> */}
      
        </StyledAuthCardHeader>

        <StyledSignUpCardHeader>
        <StyledSignCrearCuenta>
          <h2>
            {" "}
                
            <IntlMessages id="common.createAccount1" />{" "}
          </h2>
          
          <div className="small-logo">
             <AppLogo />
          </div>

          </StyledSignCrearCuenta>
          
          <StyledSignSocialLink>
            <StyledSignIconSocial>
              <SignInWithGoogle />
            </StyledSignIconSocial>
            <StyledSignIconBtn
              shape="circle"
              icon={
                <AppSocialLogos
                  logo={"/assets/images/logo/instagram-logo.svg"}
                  alt={"Facebook Logo"}
                />
              }
              onClick={() => logInWithPopup("facebook")}
            />
            
          </StyledSignSocialLink>

          <div className="StyledSignUpGrayText">
            <StyledSignUpTestGrey
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <StyledAuthTextLine>
                <span>
                  {" "}
                  <IntlMessages id="common.orCreateWithEmail1" />{" "}
                </span>
              </StyledAuthTextLine>
            </StyledSignUpTestGrey>
          </div>
        </StyledSignUpCardHeader>
        <StyledSignUp>
          <StyledSignUpContent>
            <StyledSignUpForm
              name="basic"
              initialValues={{ remember: true }}
              onFinish={(values: any) =>
                registerUserWithEmailAndPassword(values as SignUpProps)
              }
            >
              <Form.Item
                name="name"
                className="form-field"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <label className="form-label" htmlFor="name">
                  <IntlMessages id="common.name1" />
                </label>
                <StyledSignUpInputContainer>
                  <Input
                    placeholder={messages["common.name1"] as string}
                    id="name"
                  />
                  <StyledSignUpIcon>
                    <BiUserCircle className="icon" />
                  </StyledSignUpIcon>
                </StyledSignUpInputContainer>
              </Form.Item>

              <Form.Item
                name="email"
                className="form-field"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <label className="form-label" htmlFor="email">
                  <IntlMessages id="common.email" />
                </label>
                <StyledSignUpInputContainer>
                  <Input
                    placeholder={messages["common.email"] as string}
                    id="email"
                    src="/assets/images/icon-docs.svg"
                  />
                  <StyledSignUpIcon>
                    <AiOutlineMail className="icon" />
                  </StyledSignUpIcon>
                </StyledSignUpInputContainer>
              </Form.Item>

              <Form.Item
                name="password"
                className="form-field"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <label className="form-label" htmlFor="password">
                  <IntlMessages id="common.password1" />
                </label>
                <Input.Password
                  placeholder={messages["common.password1"] as string}
                  id="password"
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                className="form-field"
                rules={[
                  {
                    required: true,
                    message: "Please input your Retype Password!",
                  },
                ]}
              >
                <label className="form-label" htmlFor="confirmPassword">
                  {" "}
                  <IntlMessages id="common.retypePassword1" />{" "}
                </label>
                <Input.Password
                  placeholder={messages["common.retypePassword1"] as string}
                  id="confirmPassword"
                />
              </Form.Item>

              <StyledSignupCheckBox
                className="form-field"
                name="iAgreeTo"
                valuePropName="checked"
              >
                <Checkbox>
                  <IntlMessages id="common.iAgreeTo1" />
                </Checkbox>
                <StyledSignupLink>
                  <IntlMessages id="common.termConditions1" />
                </StyledSignupLink>
              </StyledSignupCheckBox>

              <div className="form-btn-field">
                <StyledSignUpBtn type="primary" htmlType="submit">
                  <IntlMessages id="common.signup1" />
                </StyledSignUpBtn>
              </div>

              <div className="form-field-action">
                <StyledSignUpTestGrey>
                  <IntlMessages id="common.alreadyHaveAccount1" />
                </StyledSignUpTestGrey>
                <StyledSignLinkTag href="/signin">
                  <IntlMessages id="common.login1" />
                </StyledSignLinkTag>
              </div>
            </StyledSignUpForm>
          </StyledSignUpContent>
        </StyledSignUp>
      </StyledSignUpMainContent>
    </>
  );
};

export default SignupFirebase;
