import React from 'react';
import Link from 'next/link';
import { Col, Form, Input } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import {
  StyledForgotForm,
  StyledForgotContent,
  StyledForgotPara,
  StyledFormFooter,
  StyledForgotBtn,
} from './index.styled';
import AppRowContainer from '@crema/components/AppRowContainer';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const ForgetPasswordJwtAuth = () => {
  const { messages } = useIntl();

  return (

    <AppRowContainer>     
    <Col xs={5} sm={8} lg={8}> 
    </Col>      
    <Col xs={5} sm={8} lg={8}> 

    <StyledForgotContent>

      <StyledForgotPara>
        <IntlMessages id="common.forgetPasswordTextOne" />
        <span>
          <IntlMessages id="common.forgetPasswordTextTwo" />
        </span>
      </StyledForgotPara>
<br />
      <StyledForgotForm
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          className="form-field"
          rules={[
            { required: true, message: 'Por favor inserta tu correo!' },
          ]}
        >
          <Input placeholder={messages['common.emailAddress'] as string} />
        </Form.Item>

        <div className="form-field">
          <StyledForgotBtn type="primary" htmlType="submit">
            <IntlMessages id="common.sendNewPassword" />
          </StyledForgotBtn>
        </div>

        <StyledFormFooter>
          <IntlMessages id="common.alreadyHavePassword" />
          <Link href="/signin">
            <IntlMessages id="common.signIn" />
          </Link>
        </StyledFormFooter>
      </StyledForgotForm>
    </StyledForgotContent>
    </Col>
    <Col xs={5} sm={8} lg={8}> 
    </Col> 
    </AppRowContainer>

  );
};

export default ForgetPasswordJwtAuth;
