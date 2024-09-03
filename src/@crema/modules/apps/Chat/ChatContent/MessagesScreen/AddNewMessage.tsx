  import React, { useEffect, useState } from "react";
  import { useDropzone } from "react-dropzone";
  import { PaperClipOutlined, SendOutlined } from "@ant-design/icons";
  import { useIntl } from "react-intl";
  import { Button, Input } from "antd";
  import {
    StyledAddNewMessage,
    StyledNewMessageAction,
    StyledNewMsgActionFirst,
  } from "../index.styled";
  import { generateUniqueID } from "@crema/helpers/StringHelper";
  import { MessageDataObjType, MessageType } from "@crema/types/models/apps/Chat";
  import { io } from 'socket.io-client';
  import axios from "axios";
  import socket from 'pages/socket' 
import { useMutation } from "@apollo/client";
import { MUTATIO_WHATSAPP_SEND_MESSAGE } from "utils/Mutations/Administrative";


  type AddNewMessageProps = {
    sendFileMessage: (message: MessageDataObjType) => void;
    onSendMessage: (message: string) => void;
    onSendFile: (file: File) => void;
    currentMessage: string | undefined;
    selectedUserId: string; // Agrega esta línea
  };

  const AddNewMessage: React.FC<AddNewMessageProps> = ({
    sendFileMessage,
    onSendMessage,
    onSendFile,
    currentMessage = "",
    selectedUserId,
  }) => {
    const [message, setMessage] = useState(currentMessage);

    const [acceptedFiles, setAcceptedFiles] = useState([]);

    // reemplaza con la URL de tu servidor
    const { getRootProps, getInputProps } = useDropzone({
      accept: {
        'image/png': ['.png'],
        'image/jpeg': ['.jpg', '.jpeg'],
        'application/pdf': ['.pdf'],
      },
      // accept: { '*/*': [] },
      onDrop: (acceptedFiles) => {
         console.log(acceptedFiles)
         
         
         
        sendFileMessage({
          message: "",
          message_type: MessageType.MEDIA,
          file: acceptedFiles,
          media: acceptedFiles.map((file) => {
            return {
              _id: generateUniqueID(),
              url: URL.createObjectURL(file),
              mime_type: file.type,
              file_name: file.name,
              file_size: file.size,
            };
          }),
          find: function (arg0: (message: any, media: any) => boolean): unknown {
            console.log('eror')
            throw new Error("Function not implemented.");
            
          },
          
          _id: function (_id: any): unknown {
            console.log('eror')
            throw new Error("Function not implemented.");
          },
          to: "",
          from: ""
        });
      }
    });

    useEffect(() => {
      console.log(acceptedFiles);
    }, [acceptedFiles]);
   
    useEffect(() => {
      setMessage(currentMessage);
    }, [currentMessage]);


    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onClickSendMessage();
      }
    };

    const [whatsappSender] = useMutation(MUTATIO_WHATSAPP_SEND_MESSAGE);
console.log("holasd");


    const onClickSendMessage = async () => {
      if (message && socket ) {
        onSendMessage(message);
        setMessage("");
     
      
      
    
        
     
        try {
          const responseMessages = await axios.post('http://localhost:4005/api/messages', {
            message: message,
            to: selectedUserId,
            from:'66411fdef5a1513e647b28d8',
          
          });
          
          if (responseMessages.status === 200) {
            console.log('Mensaje guardado en la base de datos de mensajes y enviado al destinatario');
          } else {
            console.log('Hubo un problema al guardar el mensaje en la base de datos de mensajes');
          }
          
         
     socket.emit('new-message', message, function(response) {
            console.log('Respuesta del servidor:', response);
         
           });


         
 
         
       
         
             try {
               const response = await whatsappSender({
                 variables: {
                 condition: { 
                PHONENUMBER: "8493583925",
                 TYPE: "text",
               CUERPO_MENSAJE: message }
                 },
               });
         
               if (response) {
                 console.log("response", response);
         
         
              
               }
             } catch (e) {
              console.log(`Error en el : ${e}`)
             }
 
 
         


        } catch (error) {
          console.error('Error al guardar el mensaje en la base de datos de mensajes:', error);
        }

        // Envía el mensaje al backend (ruta /api/notify)
        // try {
        //   const responseNotify = await axios.post('http://localhost:4005/api/notify', {
        //     message: message,
        //     to: '66411fc7f5a1513e647b28d3', // Ajusta el destinatario según tu lógica
        //     from: '66411fdef5a1513e647b28d8', // Ajusta el remitente según tu lógica
        //   });

        //   if (responseNotify.status === 200) {
        //     console.log('Mensaje guardado en la base de datos de notificaciones');
        //   } else {
        //     console.log('Hubo un problema al guardar el mensaje en la base de datos de notificaciones');
        //   }
        // } catch (error) {
        //   console.error('Error al guardar el mensaje en la base de datos de notificaciones:', error);
        // }
      }
    };

    

    async function onClickSendFile (file: File, fileData: { _id: string; url: string; mime_type: string; file_name: string; file_size: number; }) {
      console.log(fileData);
 
      
      if (fileData && socket ) {
        onSendMessage(message);

 
     
      //   socket.emit('done-sending-messages');
      //  console.log("ID del usuario seleccionado desde:", selectedUserId); // Imprime el ID del usuario seleccionado

        // Envía el mensaje al backend
        // socket.emit('new-message', message, function(response) {
        //   console.log('Respuesta del servidor:', response.message);
        // });
     
        try {
          const responseMessages = await axios.post('http://localhost:4005/api/messages', {
       
            to: selectedUserId,
            from:'66411fdef5a1513e647b28d8',
            media: fileData, 

          
          });
          
          if (responseMessages.status === 200) {
            console.log('Mensaje guardado en la base de datos de mensajes y enviado al destinatario');
          } else {
            console.log('Hubo un problema al guardar el mensaje en la base de datos de mensajes');
          }
          
          // Escuchar los mensajes entrantes del servidor
      
            // Emitir el evento de socket 'new-message' cuando recibas el mensaje del servidor
          
     socket.emit('new-message', message, function(response) {
            console.log('Respuesta del servidor:', response);
         
           });
        } catch (error) {
          console.error('Error al guardar el mensaje en la base de datos de mensajes:', error);
        }

        // Envía el mensaje al backend (ruta /api/notify)
        // try {
        //   const responseNotify = await axios.post('http://localhost:4005/api/notify', {
        //     message: message,
        //     to: '66411fc7f5a1513e647b28d3', // Ajusta el destinatario según tu lógica
        //     from: '66411fdef5a1513e647b28d8', // Ajusta el remitente según tu lógica
        //   });

        //   if (responseNotify.status === 200) {
        //     console.log('Mensaje guardado en la base de datos de notificaciones');
        //   } else {
        //     console.log('Hubo un problema al guardar el mensaje en la base de datos de notificaciones');
        //   }
        // } catch (error) {
        //   console.error('Error al guardar el mensaje en la base de datos de notificaciones:', error);
        // }
      }
    };

    const { messages } = useIntl();

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

    return (
      <StyledAddNewMessage>
        <StyledNewMsgActionFirst>
        
        <Button
  {...getRootProps({
    className: "message-btn dropzone",
  })}
>
  <input  type="file"
    {...getInputProps()} 
    accept=".png,.jpg,.jpeg,.pdf"
    onChange={(event) => {
      const file = event.target.files[0];
      console.log(file);
      const fileData = {
        url: URL.createObjectURL(file),
        mime_type: file.type,
        file_name: file.name,
        file_size: file.size,
      };
      onClickSendFile(file, fileData); // Pass both 'file' and 'fileData' as arguments
    }}
  />
  <PaperClipOutlined />
</Button>
    
        </StyledNewMsgActionFirst>
        <Input
          placeholder={messages["chatApp.sendMessagePlaceholder"] as string}
          value={message}
          onChange={(event) => {
            if (event.target.value !== "\n") setMessage(event.target.value);
          }}
          onKeyPress={onKeyPress}
        />

        <StyledNewMessageAction>
          <Button className="message-btn " onClick={onClickSendMessage} >
            <SendOutlined />
          </Button>
        </StyledNewMessageAction>
      </StyledAddNewMessage>
    );
  };

  export default AddNewMessage;
