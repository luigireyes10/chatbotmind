import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import axios from "axios";
import io from "socket.io-client";
import { showNotification } from 'utils/general';
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  StyledContactForm,
  StyledContactFormFooter,
  StyledContactModalScrollbar,
  StyledButton,
  StyledContactFormItemTitle,
} from "./index.styled";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import type { ContactObjType } from "@crema/types/models/apps/Contact";
import socket from 'pages/socket'
import { MUTATION_UPSERT_INSERT_UPDATE_PROSPECTO } from "utils/Mutations/Administrative";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_CRM_PROSPECTO } from "utils/Queries/Administrative";

type AddContactFormProps = {
  selectContact?: ContactObjType | null;
  userImage: string;
  setUserImage: (image: string) => void;
  onUpdateContact?: (contact: ContactObjType) => void;
  handleAddContactClose: () => void;
  reCallAPI?: () => void;
  item: any;
};

const Prospecto: React.FC<AddContactFormProps> = ({
  userImage,
  selectContact,
  setUserImage,
  handleAddContactClose,
  onUpdateContact,
  reCallAPI,
  item,
}) => {
  const [{ apiData: labelList }] = useGetDataApi(
    "/api/contactApp/labels/list",
    []
  );

  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(false);

  const [UpdateCreateProduct] = useMutation(MUTATION_UPSERT_INSERT_UPDATE_PROSPECTO);


  const onFinish = async (values: any) => {


  
    try {
      const response = await UpdateCreateProduct({
        variables: {
          condition: {
            ID_EMPRESA: "1",
            ID_CHAT: item.to,
            ...values
           
            
          }
        },
        context: {
          useMultipart: true, 
        },
      })



      if (response) {
    

        console.log('response', response)

        showNotification({
          message: `Guardado correctamente`,
          type: 'success',
          
        });
        console.log(values);

        // Después de procesar los datos, limpias el formulario
        form.resetFields();
      }
    } catch (e) {
      //infoViewActionsContext.fetchError(e.message);
      console.log(`Error en el : ${e}`)
      showNotification({
        message: `No se guardo correctamente`,
        type: 'error',
      });
    }
  };
  
  return (
    <StyledContactForm
      form={form}
      onFinish={onFinish}
    >
      <StyledContactModalScrollbar>
        <StyledContactFormItemTitle>

        </StyledContactFormItemTitle>
          <Form.Item
          name="NOMBRES"
          rules={[{ required: true, message: 'Por favor ingresa el prospecto' }]}
        >
          <Input


            placeholder={"Ingrese el Nombre  del cliente"}
          />
        </Form.Item>
        <Form.Item
          name="WHASTSAPP"
          rules={[{ required: true, message: 'Por favor ingresa el prospecto' }]}
        >
          <Input

          
            placeholder={"Ingrese el número del cliente"}
          />
        </Form.Item>
        <StyledContactFormFooter>
        <StyledButton type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>Enviar</StyledButton>
   </StyledContactFormFooter>
      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default Prospecto;
