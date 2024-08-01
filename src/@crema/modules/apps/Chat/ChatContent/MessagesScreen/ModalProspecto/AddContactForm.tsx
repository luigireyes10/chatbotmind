import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
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


  const infoViewActionsContext = useInfoViewActionsContext();
  const [Desc_Prospecto, setDesc_Prospecto] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [descProspecto, setDescProspecto] = useState('');
  const [UpdateCreateProduct] = useMutation(MUTATION_UPSERT_INSERT_UPDATE_PROSPECTO);



  const { loading: loadingCateg, error: errorCateg, data: ProductCateg,refetch } = useQuery(QUERY_CRM_PROSPECTO, {
    variables: { condition: { ID_EMPRESA: '1',  ID_CHAT: item.to, } },
    fetchPolicy: 'cache-first', // Usa caché si está disponible, sino, hace solicitud de red
    });

    console.log('ProductCateg', ProductCateg);
    
   
  ProductCateg?.GetEmCrmProspecto?.map((item) => {
    console.log(item);

  });



  const onFinish = async (values: any) => {

// const condition = [

//   {
//     ID_EMPRESA: '1',
//     WHASTSAPP: descProspecto,
// ...values
//   }
// ]

// console.log('condition', condition);

    try {


    
      const response = await UpdateCreateProduct({
        variables: {
          condition: {
            ID_EMPRESA: '1',
            WHASTSAPP: descProspecto,
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
        refetch()
       
      }
    } catch (e) {
      //infoViewActionsContext.fetchError(e.message);
      console.log(`Error en el : ${e}`)
    
    }
  };
  

  // const handleFormSubmit = async (values) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post('http://localhost:4005/api/prospecto', {
  //       Desc_Prospecto: values.Detalle,
  //       ID_Prospecto: item.from,
  //       ID_Cliente: item.to,
  //       Estado: "A"
  //     });


  //     setDesc_Prospecto('');
  //     form.resetFields();
  
  //     if (socket) {
  //       socket.emit('newProspect', response.data, (data) => {
  //         console.log('Mensaje recibido:', data);
  //       });
  //     }
  
  //     showNotification({
  //       message: `Enviado correctamente al prospecto`,
  //       type: 'success',
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };


  useEffect(() => {
    // Conectar el socket cuando el componente se monta
    if (socket) {
      socket.connect();
    }
  
    return () => {
      // Desconectar el socket cuando el componente se desmonta
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);



  // Efecto para establecer el valor por defecto después de obtener los datos

  useEffect(() => {
    const defaultValue = ProductCateg?.GetEmCrmProspecto.map(item => item.WHASTSAPP).join(', ');
    setDescProspecto(defaultValue);
  }, [ProductCateg]);
  return (
    <StyledContactForm
      form={form}
      onFinish={onFinish}
      
    >
      <StyledContactModalScrollbar>
        <StyledContactFormItemTitle>
        <IntlMessages id="propsecto.personalDetails" />
        </StyledContactFormItemTitle>
        <Form.Item
          name="DESCRIPCION"
          rules={[{ required: true, message: 'Por favor ingresa el prospecto' }]}
        >
          <Input
       
            placeholder={"Detalle del prospecto"}
          />
        </Form.Item>


        <Form.Item name="WHASTSAPP">
  <Select placeholder="Seleccione el número">
    <Select.Option value={descProspecto}>{descProspecto}</Select.Option>
  </Select>
</Form.Item>

<Form.Item>
<Input
       
       placeholder={ProductCateg?.GetEmCrmProspecto.map((item) => item.NOMBRES).join(', ')}
       disabled={true}
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
