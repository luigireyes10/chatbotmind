import React, { useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useIntl } from "react-intl";
import { Avatar, Button, Form } from "antd";
import {
  PictureOutlined,
  SendOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AppIconButton from "@crema/components/AppIconButton";
import {
  StyledCreatePostAction,
  StyledCreatePostActionBtn,
  StyledCreatePostCard,
  StyledCreatePostInput,
  StyledCreatePostMain,
  StyledCreatePostMainContent,
  StyledCreatePostImgItem,
  StyledCreatePostImgList,
} from "./index.styled";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { AttachmentObjType } from "@crema/types/models/apps/Wall";
import { generateRandomUniqueNumber } from "@crema/helpers/Common";
import EmojiPicker from "emoji-picker-react";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import { QUERY_PERFIL } from "utils/Queries/Administrative"; // Asegúrate de tener la consulta correcta aquí
import io from "socket.io-client";
import socket from "pages/socket";
import { MUTATION_POST_PERFIL } from "utils/Mutations/Administrative";
const EmojiPickerWrapper = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 60px; /* Ajusta según tu diseño */
  left: 20px; /* Ajusta según tu diseño */
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

type CreatePostProps = {
  wallData: any;
  setPostList: any;
};

const CreatePost: React.FC<CreatePostProps> = ({ wallData, setPostList }) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<AttachmentObjType[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<any>();
  const [form] = Form.useForm();
  const [sendFileMessage, setSendFileMessage] = useState()
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'application/pdf': ['.pdf'],
    },
    // accept: { '*/*': [] },
    multiple: true,
    onDrop: (acceptedFiles) => {
       console.log(acceptedFiles)
       
       const files = acceptedFiles.map((file: any) => {
        return {
          id: generateRandomUniqueNumber(),
          path: file.path,
          metaData: { type: file.type, size: file.size },
          preview: URL.createObjectURL(file),
        };
      });
    
      // Reemplazar los archivos actuales con los nuevos
      onAddAttachments(files);
      console.log(files);
      
       
       setSendFileMessage({
        file: acceptedFiles,
      });

    }
  });
  


  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: {
  //     "image/jpeg": [],
  //     "image/png": [],
  //   },
  //   multiple: true,
  //   onDrop: (acceptedFiles) => {
  //     const files = acceptedFiles.map((file: any) => {
  //       return {
  //         id: generateRandomUniqueNumber(),
  //         path: file.path,
  //         metaData: { type: file.type, size: file.size },
  //         preview: URL.createObjectURL(file),
  //       };
  //     });
  //     onAddAttachments(files);
  //   },
  // });

  // const onAddAttachmentsNew = (files: AttachmentObjType[]) => {
  //   setAttachments([...attachments, ...files]);
  // };

  const onAddNewFile = (newFile) => {
    const file = {
      ...newFile,
      id: generateRandomUniqueNumber(), // Asegúrate de tener una función para generar un número único
      url: `/assets/images/productos/${newFile.path}`, // Modifica aquí para usar el prefijo deseado y el nombre del archivo
    };
    setUploadedFiles((files) => files.concat(file) );


    

    // Actualiza el valor del campo "FOTO_CLASIF" con la URL modificada del nuevo archivo
    form.setFieldsValue({ DEFAULT_RUTA_DOC: file.url });
  };

  console.log(sendFileMessage);

  const onAddAttachments = (files: AttachmentObjType[]) => {
    setAttachments([ ...files]);
  };

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: {
  //     "image/jpeg": [],
  //     "image/png": [],
  //   },
  //   multiple: true,
  //   onDrop: (acceptedFiles) => {
  //     const files = acceptedFiles.map((file: any) => {
  //       return {
  //         id: generateRandomUniqueNumber(),
  //         path: file.path,
  //         metaData: { type: file.type, size: file.size },
  //         preview: URL.createObjectURL(file),
  //       };
  //     });
  //     onAddAttachments(files);
  //   },
  // });
  console.log(uploadedFiles);

  const [UpdateCreatePostPerfil] = useMutation(MUTATION_POST_PERFIL);

  const handlePostSubmit = async (values: any) => {
    if (!socket) {
      console.error("Socket no está inicializado");
      return;
    }
    console.log(values);

    const images = await sendFileMessage?.file.map((file) => ({
      TIPO_DOC: "IMG",
      FILE: file,
    }));
    console.log(images);
let condition
     condition = {
      ID_USER: "60b8d2bdf1d5c12a8a8d0f6b",
      ID_POST: "8",
      CONTENIDO_POST: message,
      FILESUPLOAD: images,
    };

    console.log("condition", condition);


    try {
      const response = await UpdateCreatePostPerfil({
        variables: {
         condition,
        },
        context: {
          useMultipart: true, // Esto permite el uso de multipart/form-data
        },
      });

      //console.log('response', response)
      if (response) {
        // showNotification({
        //   message: `Caja Cerrada Correctamente`,
        //   type: 'success',
        // })

        console.log("response", response);

        //  console.log('product.title', product.title)

        //  infoViewActionsContext.showMessage( `${product.title} added to cart successfully` );
        //refetch && refetch()
      }
    } catch (e) {
      //infoViewActionsContext.fetchError(e.message);
      console.log(`Error en el : ${e}`);
      
      socket.emit("newPost", condition, function (response) {
        console.log("Respuesta del servidor:", response);
      });

      setMessage("");
      getRootProps("")
      getInputProps("")
      setAttachments([])
    }
  };

  //   try {
  //     const responseMessages = await axios.post(
  //       "http://localhost:4005/api/postperfil",
  //       {
  //         ID_USER: "60b8d2bdf1d5c12a8a8d0f6b",
  //         CONTENIDO_POST: message,
  //         DOC_RUTA: images,
  //       }
  //     );

  //     if (responseMessages.status === 200) {
  //       console.log("Post enviado correctamente");
  //     }
  //     socket.emit("newPost", responseMessages.data, function (response) {
  //       console.log("Respuesta del servidor:", response);
  //     });
  //   } catch (error) {
  //     console.error(
  //       "Error al guardar el mensaje en la base de datos de mensajes:",
  //       error
  //     );
  //   }
  //   setMessage("");
  // };

  const onEmojiClick = (event: any, emojiObject: any) => {
    setMessage(message + emojiObject.emoji);
  };

  const { loading, data, error } = useQuery(QUERY_PERFIL, {
    variables: { condition: { ID_EMPRESA: "1", ID_USER: "1", ID_PERFIL: "1" } },
    fetchPolicy: "cache-first",
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const { messages } = useIntl();

  return (
    <StyledCreatePostCard title={messages["wall.createPost"]}>
      <StyledCreatePostMain>
        {data && data.GetEmPerfil && (
          <Avatar
            size={40}
            src={data.GetEmPerfil.FOTO_PERFIL}
            alt={data.GetEmPerfil.NOMBRE_COMPLETO}
          />
        )}
        <StyledCreatePostMainContent>
          <StyledCreatePostInput
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's in your mind?"
            suffix={
              <StyledCreatePostAction>
                  <StyledCreatePostActionBtn {...getRootProps()}>
                  <input {...getInputProps()} />
                  <PictureOutlined />
                </StyledCreatePostActionBtn>
                <AppIconButton
                  icon={<SmileOutlined />}
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                />
                <AppIconButton icon={<UserOutlined />} />
                <Form form={form} onFinish={handlePostSubmit}>
                  <Button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                      minWidth: "auto",
                      width: "auto",
                      height: "auto",
                      border: "none",
                      background: "none",
                    }}
                    htmlType="submit"
                  >
                    <AppIconButton icon={<SendOutlined />} />
                  </Button>
                </Form>
              </StyledCreatePostAction>
            }
          />
        </StyledCreatePostMainContent>
      </StyledCreatePostMain>
      {attachments ? (
        <StyledCreatePostImgList
          data={attachments}
          renderItem={(item: AttachmentObjType, index: number) => (
            <StyledCreatePostImgItem key={index}>
              <img src={item.preview} alt="upload" />
            </StyledCreatePostImgItem>
          )}
        />
      ) : null}

      {showEmojiPicker && (
        <EmojiPickerWrapper ref={emojiPickerRef}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </EmojiPickerWrapper>
      )}
    </StyledCreatePostCard>
  );
};

export default CreatePost;
