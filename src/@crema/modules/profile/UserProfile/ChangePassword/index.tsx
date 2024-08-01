import React from 'react';
import { Button, Col, Form, Input } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledUserProfileForm,
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from '../index.styled';
import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_CHANGE_PASSWORD, MUTATION_UPDATE_PASSWORD } from 'utils/Mutations/Administrative';
import { IoAlertSharp } from 'react-icons/io5';
import { showNotification } from 'utils/general';

const ChangePassword = () => {
  
  
  const [UpdatePassword] = useMutation(MUTATION_CREATE_CHANGE_PASSWORD)
 

  const onFinish = async (values) => {
    console.log('Finish:', values);


  
    
    try {

      // const {
      //   oldPassword,
      //   password,
      //   confirmPassword
      // } = values

      // if(password != confirmPassword) return alert('la contraseña es diferente')

      //   let prueba = 0
      //   if(prueba === 0){
      //     return
      //   }

      const response = await UpdatePassword({
        variables: {
          condition: {
            EMAIL: 'luigireyes10@gmail.com',
            ESTADO: 'A',
            WEB_PASSWORD: values?.password
          },
        },
      })

      if (response) {
       

        console.log('response', response?.data?.UpsertUpdateChangePassword)
        const responsedata = response?.data?.UpsertUpdateChangePassword[0]?.EMAIL

        showNotification({
          message: `Message Added Successfully!`+ responsedata,
          type: 'success',
        })

       // infoViewActionsContext.showMessage("Message Added Successfully!" + responsedata);
      }
    } catch (e) {
      console.log(`Error en el : ${e}`)

      showNotification({
        message: `Message ocurrio algun error!`+ e?.message,
        type: 'error',
      })
    }





  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledUserProfileForm
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <StyledUserProfileFormTitle>
        <IntlMessages id="userProfile.changePassword" />
      </StyledUserProfileFormTitle>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            name="oldPassword"
            rules={[
              { required: true, message: 'Please input your Enter Password' },
            ]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>
        </Col>
        
        <Col xs={24} md={14}>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your New Password!' },
            ]}
          >
            <Input.Password placeholder="Enter new password" />
          </Form.Item>
        </Col>
        <Col xs={24} md={14}>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: 'Please input Your Confirm Password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The Confirm Password that you entered do not match!'
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm new password" />
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <StyledUserProfileGroupBtn
            shouldUpdate
            className="user-profile-group-btn"
          >
            
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
            <Button>Cancel</Button>
          </StyledUserProfileGroupBtn>
        </Col>
      </AppRowContainer>
    </StyledUserProfileForm>
  );
};

export default ChangePassword;
