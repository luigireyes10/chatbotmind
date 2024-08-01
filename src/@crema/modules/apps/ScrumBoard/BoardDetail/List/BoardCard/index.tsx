import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Members from "./Members";
import Labels from "./Labels";
import { MdChatBubbleOutline } from "react-icons/md";
import {
  StyledIoMdAttach,
  StyledScrumBoardCardDetails,
  StyledScrumBoardCardDetailTitle,
  StyledScrumBoardCardDetailUser,
  StyledScrumBoardCardHeader,
  StyledScrumBoardCardHeaderAction,
  StyledScrumBoardCardDetailDate,
  StyledScrumBoardCardDetailComment,
} from "./index.styled";
import {
  LabelObjType,
  MemberObjType,
  DataScrumBoardObjType,
} from "@crema/types/models/apps/ScrumbBoard";
import axios from "axios";
import io from "socket.io-client";

import socket from 'pages/socket'
import { QUERY_CRM_PROSPECTO } from "utils/Queries/Administrative";
import { useQuery } from "@apollo/client";


type CardDetailProps = {
  title: string;
  attachments: string[];
  label: LabelObjType[];
  members: MemberObjType[];
  date: string;
  comments: string[];
  onClick: () => void;

};

const BoardCard: React.FC<CardDetailProps> = ({
  title,
  attachments = [],
  label = [],
  members,
  date,
  comments,
  onClick,

}) => {
  

  const [data, setData] = useState(null);
   const { loading: loadingCateg, error: errorCateg, data: ProductCateg,refetch, } = useQuery(QUERY_CRM_PROSPECTO, {
      variables: { condition: { ID_EMPRESA: '1' } },
      fetchPolicy: 'cache-first', // Usa caché si está disponible, sino, hace solicitud de red
      });

      console.log(ProductCateg);
      
  

  useEffect(() => {
   
  
   
      const fetchMessages = async () => {
        try {

                 setData(ProductCateg?.GetEmCrmProspecto);
          console.log(data);
          


 
          // const response = await axios.get(
          //   `http://localhost:4005/api/prospecto/getProspecto`
          // );
          // setData(response.data);
          // console.log(response.data);
          //  // Almacena los datos en el estado
        } catch (error) {
          console.error(
            "Error al obtener los mensajes del usuario de la base de datos:",
            error
          );
        }
      }
      fetchMessages(); // No olvides llamar a la función

    // Escuchar el evento 'prospectReceived'
    socket.on('prospectReceived', (data) => {
      const { resultdata } = data;
      const [firstResult] = resultdata;
    
      setData(prevData => {
        // Buscar el índice del elemento con el mismo ID_CHAT
        const existingIndex = prevData.findIndex(item => item.ID_CHAT === firstResult.ID_CHAT);
    
        if (existingIndex !== -1) {
          // Si el elemento existe, crear una copia del estado y actualizar el elemento existente
          const updatedData = [...prevData];
          updatedData[existingIndex] = {
            __typename: 'EmCrmProspecto',
            ID_EMPRESA: firstResult.ID_EMPRESA,
            NOMBRES: firstResult.NOMBRES,
            APELLIDOS: firstResult.APELLIDOS,
            WHASTSAPP: firstResult.WHASTSAPP,
            DESCRIPCION: firstResult.DESCRIPCION,
            ID_CHAT: firstResult.ID_CHAT,
            FECHA_ACTUALIZACION: firstResult.FECHA_ACTUALIZACION,
            USUARIO_ACTUALIZACION: firstResult.USUARIO_ACTUALIZACION
          };
          return updatedData;
        } else {
          // Si el elemento no existe, agregar el nuevo objeto al final del estado
          return [...prevData, {
            __typename: 'EmCrmProspecto',
            ID_EMPRESA: firstResult.ID_EMPRESA,
            NOMBRES: firstResult.NOMBRES,
            APELLIDOS: firstResult.APELLIDOS,
            WHASTSAPP: firstResult.WHASTSAPP,
            DESCRIPCION: firstResult.DESCRIPCION,
            ID_CHAT: firstResult.ID_CHAT,
            FECHA_ACTUALIZACION: firstResult.FECHA_ACTUALIZACION,
            USUARIO_ACTUALIZACION: firstResult.USUARIO_ACTUALIZACION
          }];
        }
      });
    });

    return () => {
      socket.off('prospectReceived');
    };
  }, [loadingCateg, socket])



  // Ahora puedes acceder a los datos fuera del useEffect
  // Desestructura el array


// Comprueba que firstItem existe antes de intentar acceder a sus propiedades
const [firstItem] = data || [];

// Comprueba que firstItem existe antes de intentar acceder a sus propiedades
if (firstItem) {
  console.log(firstItem); 
}
if (!data) {
  return <div>Cargando...</div>; // Muestra un mensaje de carga mientras los datos se están cargando
}

if (!data) {
  return <div>Cargando...</div>; // Muestra un mensaje de carga mientras los datos se están cargando
}


const handleClick = (data: DataScrumBoardObjType) => (event: React.MouseEvent) => {
  if (onClick) {
    onClick(event);
  } else {
    console.error('onClick function is not defined');
  }
};

console.log(data); // Paso 2


return (
  <>

      
{data &&
      data.map((item, index) => (
        <StyledScrumBoardCardDetails
          key={index}
          onClick={handleClick(data)}
         
        >
          <StyledScrumBoardCardHeader>
            <StyledScrumBoardCardDetailTitle>
            {item.DESCRIPCION}
            </StyledScrumBoardCardDetailTitle>
            {attachments && attachments.length > 0 ? (
              <StyledScrumBoardCardHeaderAction>
                <span>{attachments.length}</span>
                <StyledIoMdAttach />
              </StyledScrumBoardCardHeaderAction>
            ) : null}
          </StyledScrumBoardCardHeader>
          {label.length > 0 ? <Labels labels={label} /> : null}

          <StyledScrumBoardCardDetailUser>
            {members.length > 0 ? <Members members={members} /> : null}

            <StyledScrumBoardCardDetailDate>
            Prospecto: {item.NOMBRES}
            </StyledScrumBoardCardDetailDate>
            {comments && comments.length > 0 ? (
              <StyledScrumBoardCardDetailComment>
                <span>{comments.length}</span>
                <MdChatBubbleOutline />
              </StyledScrumBoardCardDetailComment>
            ) : null}
          </StyledScrumBoardCardDetailUser>
        </StyledScrumBoardCardDetails>
))}
  </>
);
}

export default BoardCard;
