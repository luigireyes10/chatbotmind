import React, { useEffect, useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Select } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { MUTATION_UPDATE_CREATE_PERFIL } from 'utils/Mutations/Administrative';
import { showNotification } from 'utils/general';
import {
  StyledUserProfileForm,
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from '../index.styled';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import { QUERY_PERFIL } from 'utils/Queries/Administrative';
import { string } from 'prop-types';

const Information = ({perfil}) => {
  const { user } = useAuthUser();
  const [formdataIn] = Form.useForm()

  //const [perfil, setPerfil] = useState<any>();

  const [getBuscaPerfil, { data: DataBuscaPerfil  , loading: loadingPerfil , error  }] = useLazyQuery(QUERY_PERFIL, {
    variables: {
      condition: { ID_EMPRESA: "1", ID_PERFIL: "1" , ID_USER: "1" },
      fetchPolicy: 'cache-first'
    },
  })
  console.log('DataBuscaPerfil', DataBuscaPerfil)

  
  const { loading, data } = useQuery(QUERY_PERFIL, {
    variables: { condition: { ID_EMPRESA: "1", ID_PERFIL: "1" , ID_USER: "1" } },
    fetchPolicy: 'cache-first',
  });


  // useEffect(() => {
  //   if(perfil){
  //     console.log(perfil?.BIOGRAFIA)
   
  //     formdataIn.setFieldsValue([{...perfil}])
  // // alert('prueba que carga')
  //   }
    
  // }, [perfil])
  


  useEffect( () => {
  
    //console.log('all', all?.[0])
    funtBuscaPerfil()
  
}, []);

const funtBuscaPerfil = async ()=>{
  await getBuscaPerfil()

}

// useEffect(() => {
//   if(DataBuscaPerfil){
//    console.log('statePerfil',DataBuscaPerfil?.GetEmPerfil?.BIOGRAFIA)
//     //alert('hola' + statePerfil?.GetEmPerfil?.NOMBRE_COMPLETO)
 
//     formdataIn.setFieldsValue([{...DataBuscaPerfil?.GetEmPerfil}])
 
     
//       // setPerfil(DataBuscaPerfil?.GetEmPerfil)
 
//      // formdataIn?.setFieldValue(['BIOGRAFIA', 'asfasfas']) 
//        formdataIn?.getFieldsValue()?.BIOGRAFIA
//        console.log(formdataIn?.getFieldsValue()?.BIOGRAFIA);
//   }
 
//  }, [DataBuscaPerfil])

  // useEffect(() => {

  //      formdataIn?.getFieldsValue()?.BIOGRAFIA
  //      console.log(formdataIn?.getFieldsValue()?.BIOGRAFIA);

  // }, [formdataIn])
  

  const [UpdateCreatePerfil] = useMutation(MUTATION_UPDATE_CREATE_PERFIL);




  const onFinish = async (values) => {
    console.log(values);


    const prueba =0
   if(prueba === 0) return

    try {
      const response = await UpdateCreatePerfil({
        variables: {
          condition: {
            ID_USER: '1',
            ID_PERFIL: '1',
            BIOGRAFIA: values.BIOGRAFIA,
            FECHA_NACIMIENTO: values.FECHA_NACIMIENTO,
            TIPO_USER: values.TIPO_USER,
          },
        },
      });
      if (response) {
        showNotification({ message: 'transaccion procesada con exito', type: 'success' });
      }
    } catch (e) {
      console.log(`Error en el : ${e}`);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Form
    form={formdataIn}
    onFinish={onFinish}
    initialValues={{
     ...perfil
    }}


    onFinishFailed={onFinishFailed}
  >

      <StyledUserProfileFormTitle>
        <IntlMessages id="userProfile.information" />
      </StyledUserProfileFormTitle>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={24}>
          <Form.Item name="BIOGRAFIA" rules={[{ required: true, message: 'Please input your Bio Data' }]}>
            {/* <Input.TextArea rows={4} placeholder="Your Bio data here..." /> */}
            <Input  />
          
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="FECHA_NACIMIENTO" rules={[{ required: true, message: 'Please input Date!' }]}>
            <DatePicker style={{ width: '100%' }} format="DD M YYYY" />
          </Form.Item>
        </Col>
        <Col xs={24} md={14}>
          <Form.Item name="TELEFONO" rules={[{ required: true, message: 'Please input Your !' }]}>
            <Select showSearch style={{ width: '100%' }} placeholder="Select a Tipo User">
              <Select.Option value="Persona">PERSONA</Select.Option>
              <Select.Option value="Empresa">EMPRESA</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <StyledUserProfileGroupBtn shouldUpdate className="user-profile-group-btn">
            <Button 
            type="primary" 
            htmlType="submit">
              Save Changes</Button>
            {/* <Button>Cancel</Button> */}
          </StyledUserProfileGroupBtn>
        </Col>
      </AppRowContainer>
    </Form>
  );
};

export default Information;
