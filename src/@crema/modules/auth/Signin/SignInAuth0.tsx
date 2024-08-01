import React from "react";
import { useRouter } from "next/router";
import { Checkbox, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useAuthMethod } from "@crema/hooks/AuthHooks";
import SignInWithGoogle from "./SignInWithGoogle";
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
  StyledSignIconSocial,
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
import AppSocialLogos from "@crema/components/AppLayout/components/AppLogos";
import { StyledLoginCardHeader } from "../Signup/index.styled";

const SignInAuth0 = () => {
  const router = useRouter();
  const { logInWithEmailAndPassword, logInWithPopup } = useAuthMethod();
  const [authenticateUser, { loading }] = useMutation(MUTATION_LOGIN);
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
      };

      const { data } = await authenticateUser({
        variables: { condition },
      });

      data?.Login?.__typename;

      //  const infoUsers: ILoginResult = data?.Login

      //  await createSession(infoUsers)
      // location.replace(PATH_MAIN)
    } catch (e) {
      // errorCallback(e)
    }
  };

  return (
    <>
      <StyledLoginCardHeader>
            <h2>EMEDIA DESIGN</h2>
        </StyledLoginCardHeader>
      <StyledAuthWellAction>
        <img src="/assets/images/logiin.png" alt="Login-Img" />
      </StyledAuthWellAction>
      <StyledAuthMainContent>
        <StyledAuthCardHeader>
          <div className="small-logo">
             <AppLogo />
          </div>
        </StyledAuthCardHeader>
        <StyledSign>
          {/* <SignInTitle>
            <IntlMessages id="common.login" />
          </SignInTitle> */}
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
          <StyledSignedText>
            <IntlMessages id="common.orLoginWith1" />
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
              onFinish={
                (values) => logInWithEmailAndPassword(values as SignInProps)

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
                  { required: true, message: "Inserta tu Email!" },
                ]}
              >
                <Input
                 style={{ width: '100%', height: '45px' }}  
                  placeholder={messages["common.emailPlaceholder"] as string}
                  suffix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                />
              </Form.Item>

              <SignInText>
                <IntlMessages id="common.password1" />
              </SignInText>

              <Form.Item
                style={{ marginBottom: "18px" }}
                name="password"
                className="form-field"
                rules={[
                  { required: true, message: "Escribe tu contraseña!" },
                ]}
              >
                <Input.Password
                  style={{ height: "45px" }}
                  placeholder={messages["common.passwordPlaceholder"] as string}
                />
              </Form.Item>

              <StyledRememberMe>
                <StyledSignLink onClick={onGoToForgetPassword}>
                  <IntlMessages id="common.forgetPassword1" />
                </StyledSignLink>
              </StyledRememberMe>

              <div className="form-btn-field">
                <SignInButton
                  //type="primary"
                  style={{
                    borderRadius: "0px",
                    backgroundColor: "#239cfff8",
                    color: "white",
                  }}
                  htmlType="submit"
                >
                  <IntlMessages id="common.login1" />
                </SignInButton>
              </div>

              <div className="form-field-action center-content">
                <StyledSignTextGrey>
                  <IntlMessages id="common.dontHaveAccount1" />
                </StyledSignTextGrey>
                <StyledSignLinkTag href="/signup">
                  <IntlMessages id="common.signup1" />
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

export default SignInAuth0;
