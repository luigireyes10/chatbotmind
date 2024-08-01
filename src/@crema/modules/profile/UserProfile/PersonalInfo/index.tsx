import React, { useEffect, useState } from 'react';
import { Form, Col, Input, Button } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import { useDropzone } from 'react-dropzone';
import { useAuthUser } from '@crema/hooks/AuthHooks';

import {
  StyledInfoUpload,
  StyledInfoUploadAvatar,
  StyledInfoUploadBtnView,
  StyledInfoUploadContent,
} from './index.styled';
import { StyledUserProfileGroupBtn } from '../index.styled';
import { useMutation } from '@apollo/client';
import { MUTATION_ADD_WISHLIST_PROD, MUTATION_UPDATE_CREATE_PERFIL } from 'utils/Mutations/Administrative';
import { useLazyQuery, useQuery } from "@apollo/client";
import { QUERY_PERFIL } from "utils/Queries/Administrative";
import { showNotification } from 'utils/general';


interface IUpload {
  name: string
  type: any
}

const PersonalInfo = ({setPerfil}) => {
  const { user } = useAuthUser();
  const [formdata] = Form.useForm()



  const [images, setImages] = useState<IUpload[] | any>()

  const [imagesPreview, setImagesPreview] = useState('/assets/images/placeholder.jpg')

  const [userImage, setUserImage] = useState<File | any>(null);

 // const [userImage, setUserImage] = useState<File | null>('/assets/images/placeholder.jpg');

  
  //const [perfil, setPerfil] = useState<any>();

  const [getBuscaPerfil, { data: DataBuscaPerfil  , loading: loadingPerfil , error  }] = useLazyQuery(QUERY_PERFIL, {
    variables: {
      condition: { ID_EMPRESA: "1", ID_PERFIL: "1" , ID_USER: "1" },
      fetchPolicy: 'cache-first'
    },
  })

  console.log('DataBuscaPerfil', DataBuscaPerfil)

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles)
      console.log(URL.createObjectURL(acceptedFiles[0]))

      setUserImage(acceptedFiles[0]);
      setImagesPreview(URL.createObjectURL(acceptedFiles[0]));
    
    },
  });

  const onReset = () => {
    setImagesPreview('/assets/images/placeholder.jpg');
  };



  
  useEffect( () => {
  
    //console.log('all', all?.[0])
    funtBuscaPerfil()
  
}, []);





const funtBuscaPerfil = async ()=>{
  await getBuscaPerfil()

}





useEffect(() => {
 if(DataBuscaPerfil){
  console.log('statePerfil',DataBuscaPerfil)
   //alert('hola' + statePerfil?.GetEmPerfil?.NOMBRE_COMPLETO)

      formdata.setFieldsValue({...DataBuscaPerfil?.GetEmPerfil})

      console.log(setPerfil)

      setPerfil(DataBuscaPerfil?.GetEmPerfil)

  // form.setFieldsValue([{NOMBRE_COMPLETO: statePerfil?.GetEmPerfil?.NOMBRE_COMPLETO,
  //                      NOMBRE_USUARIO: statePerfil?.GetEmPerfil?.NOMBRE_USUARIO}])
 }

}, [DataBuscaPerfil])









  const [UpdateCreatePerfil] = useMutation(MUTATION_UPDATE_CREATE_PERFIL)
 

  const onFinish = async (values: any) => {
    console.log('Finish:', values)

    
    try {

      console.log(userImage)

      const response = await UpdateCreatePerfil({
        variables: {
          condition: {
            CORREO: values.CORREO || null,
            TIPO_USER: values?.TIPO_USER || null,
            ID_PERFIL: "1",
            ID_USER: "1",
            NOMBRE_COMPLETO: values?.NOMBRE_COMPLETO || null,
            NOMBRE_USUARIO: values?.NOMBRE_USUARIO || null,
            FILESUPLOAD: userImage ? [
              {
                FILE: userImage,
                TIPO_DOC: 'P',
              },
            ] : [],
          },
        },
        context: {
          useMultipart: true, // Esto permite el uso de multipart/form-data
        },
      });

      if (response) {
        console.log('response', response)
      }
    } catch (e) {
      console.log(`Error en el : ${e}`);
    }
  };

   //FILESUPLOAD
   //if (loadingPerfil) return 'Loading...';
    if (error) return `Error! ${error.message}`;

  return (
    <Form
    form={formdata}
      onFinish={onFinish}
      initialValues={{
         ...user,
         imagesPreview: user.photoURL
          ? user.photoURL
          : '/assets/images/placeholder.jpg',
      }}
    >
      <StyledInfoUpload>
        <StyledInfoUploadAvatar src={imagesPreview} />

        <StyledInfoUploadContent>
          <StyledInfoUploadBtnView>
            <div {...getRootProps({ className: 'dropzone' })}>
               <input {...getInputProps()} /> 
              <label htmlFor="icon-button-file">
                <Button type="primary">Upload</Button>
              </label>
            </div>
            <Button onClick={onReset}>Reset</Button>
          </StyledInfoUploadBtnView>
          <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
        </StyledInfoUploadContent>
      </StyledInfoUpload>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item


            name="NOMBRE_COMPLETO"
            rules={[
              { required: true, message: 'Please input your Full Name!' },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="NOMBRE_USUARIO"
            rules={[
              { required: true, message: 'Please input your User Name!' },
            ]}
          >
            <Input placeholder="User Name" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="CORREO"
            rules={[
              { required: true, message: 'Please input your e-mail address!' },
            ]}
          >
            <Input type="text" placeholder="E-mail" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="TIPO_USER"
            rules={[{ required: true, message: 'Please input your company!'}]}
          >
            <Input type="text" placeholder="Company" />

            
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
    </Form>
  );
};

export default PersonalInfo;
