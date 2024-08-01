import React from "react";
import { useRouter } from "next/router";
import { Checkbox, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useAuthMethod } from "@crema/hooks/AuthHooks";
import GoogleLogo from "/assets/images/logo/google.svg";
import TwitterLogo from "/assets/images/logo/x.svg";
import FacebookLogo from "/assets/images/logo/facebook.svg";
import AppSocialLogos from "@crema/components/AppLayout/components/AppLogos";

import {
  SignInButton,
  StyledRememberMe,
  StyledSign,
  StyledSignContent,
  StyledSignedText,
  StyledSignForm,
  StyledSignIconBtn,
  StyledSignLink,
  StyledSignLinkTag,
  StyledSignSocialLink,
  StyledSignTextGrey,
  SignInText,
  SignInTitle,
} from "./index.styled";
import { SignInProps } from "@crema/services/auth/firebase/FirebaseAuthProvider";

import {
  StyledAuthCardHeader,
  StyledAuthMainContent,
  StyledAuthWellAction,
} from "@crema/core/DefaultPage/AuthWrapper.styled";
import { useMutation } from "@apollo/client";
import { MUTATION_LOGIN } from "utils/Mutations/Administrative";
import AppLogo from "@crema/components/AppLayout/components/AppLogo";

const SignInFirebase = () => {
  const router = useRouter();
  const { logInWithEmailAndPassword, logInWithPopup } = useAuthMethod();
  const [authenticateUser, { loading }] = useMutation(MUTATION_LOGIN)
  const { messages } = useIntl();


  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onGoToForgetPassword = () => {
    router.push("/forget-password");
  };

  function onRememberMe() {
    console.log(`checked`);
  }

  const LoginWitGraphql = async ({ email, password }: SignInProps) => {
    try {
      const condition = {
        email,
        password,
      }

      const { data } = await authenticateUser({
        variables: { condition },
      })

      data?.Login?.__typename

    //  const infoUsers: ILoginResult = data?.Login

    //  await createSession(infoUsers)
     // location.replace(PATH_MAIN)
    } catch (e) {
     // errorCallback(e)
    }
  }


  return (
    <>
      <StyledAuthWellAction>
        <img src="/assets/images/vector-login.svg" alt="Login-Img" />
      </StyledAuthWellAction>
      <StyledAuthMainContent>
        <StyledAuthCardHeader>
          {/* <IntlMessages id="common.welcomeBack" /> */}
          <AppLogo />
        </StyledAuthCardHeader>
        <StyledSign>
          {/* <SignInTitle>
            <IntlMessages id="common.login" />
          </SignInTitle> */}
          <StyledSignSocialLink>
            <StyledSignIconBtn
              shape="circle"
              onClick={() => logInWithPopup("google")}
              icon={
                <AppSocialLogos
                  logo={"/assets/images/logo/google.svg"}
                  alt={"Google Logo"}
                />
              }
            />
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
            <StyledSignIconBtn
              shape="circle"
              icon={
                <AppSocialLogos
                  logo={"/assets/images/logo/x.svg"}
                  alt={"Twitter X Logo"}
                />
              }
              onClick={() => logInWithPopup("twitter")}
            />
          </StyledSignSocialLink>
          <StyledSignedText>
            <IntlMessages id="common.orLoginWith" />
          </StyledSignedText>
          <StyledSignContent>
            <StyledSignForm
              name="basic"
              initialValues={{
                remember: true,
                email: "crema.demo@gmail.com",
                password: "Pass@1!@all",
                //Pass@1!@all
              }}
              onFinish={(values) =>
                logInWithEmailAndPassword(values as SignInProps)

                //LoginWitGraphql( values as SignInProps)
              }
              onFinishFailed={onFinishFailed}
            >
              <SignInText>
                <IntlMessages id="common.email" />
              </SignInText>

              <Form.Item
                name="email"
                className="form-field"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  placeholder={messages["common.emailPlaceholder"] as string}
                  suffix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                />
              </Form.Item>

              <SignInText>
                <IntlMessages id="common.password" />
              </SignInText>

              <Form.Item
                name="password"
                className="form-field"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  placeholder={messages["common.passwordPlaceholder"] as string}
                />
              </Form.Item>

              <StyledRememberMe>
                <Checkbox onChange={onRememberMe}>
                  <IntlMessages id="common.rememberMe" />
                </Checkbox>
                <StyledSignLink onClick={onGoToForgetPassword}>
                  <IntlMessages id="common.forgetPassword" />
                </StyledSignLink>
              </StyledRememberMe>

              <div className="form-btn-field">
                <SignInButton 
                //type="primary" 
                style={{borderRadius: "0px", backgroundColor: "#001529", color:"white"}}
                htmlType="submit">
                <IntlMessages id="common.login" />
                </SignInButton>
              </div>

              <div className="form-field-action center-content">
                <StyledSignTextGrey>
                  <IntlMessages id="common.dontHaveAccount" />
                </StyledSignTextGrey>
                <StyledSignLinkTag href="/signup">
                  <IntlMessages id="common.signup" />
                </StyledSignLinkTag>
              </div>
            </StyledSignForm>
          </StyledSignContent>

          {/*<StyledSignFooter>
        
        </StyledSignFooter>*/}
        </StyledSign>
      </StyledAuthMainContent>
    </>
  );
};

export default SignInFirebase;
