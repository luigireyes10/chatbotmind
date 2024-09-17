import React, { useEffect, useState } from "react";
import { EditOutlined, FileTextOutlined } from "@ant-design/icons";
import clsx from "clsx";
import {
  StyledChatMediaWrapper,
  StyledChatMsgListItem,
  StyledMediaAttach,
  StyledMediaCol,
  StyledMediaCounter,
  StyledMediaImg,
  StyledMediaRow,
  StyledMediaVideo,
  StyledMediaVideoIcon,
  StyledMessageTypePara,
  StyledMsgChat,
  // StyledMsgChatAvatar,
  StyledMsgChatItem,
  StyledMsgChatView,
  StyledMsgInfoEdit,
  StyledMsgTime,
} from "./MessageItem.style";
import { getFileSize } from "@crema/helpers/Common";
import AppMediaViewer from "@crema/components/AppMedialViewer";
import {
  ConnectionObjType,
  MediaObjType,
  MessageDataObjType,
  MessageType,
 
  
} from "@crema/types/models/apps/Chat";
import type { User } from "modules/apps/Chat/types/User";
import styled from "styled-components";

export const StyledTable = styled.table`
width: 100%;
border-collapse: collapse;
`;

export const StyledTableRow = styled.tr`
border-bottom: 1px solid #ddd;
`;

export const StyledTableCell = styled.td`
padding: 8px;
text-align: left;
border-bottom: 1px solid #ddd;
`;

export const StyledQuery = styled.pre`
background-color: #f5f5f5;
padding: 10px;
border-radius: 5px;
margin-bottom: 10px;
white-space: pre-wrap;
word-wrap: break-word;
`;

export const StyledLoader = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100px;
font-size: 18px;
color: #555;
`;
const showMediaItems = 2;
const  Message = {
  createdAt: new Date(),
  updatedAt: new Date(),
  message: 'message',
  media: [],
}

const getMediaMessage = (item: MediaObjType) => {
  if (item.mime_type.startsWith("image")) {
    return (
      <StyledMediaImg>
        <img alt="" src={item.url} />
      </StyledMediaImg>
    );
  } else if (item.mime_type.startsWith("video")) {
    return (
      <StyledMediaVideo>
        <video src={item.url} />
        <StyledMediaVideoIcon />
      </StyledMediaVideo>
    );
  } else {
    return (
      <StyledMediaAttach>
        <FileTextOutlined />
        <p>
          <span>{item.file_name}</span>
          <span>{getFileSize(item.file_size!)}</span>
        </p>
      </StyledMediaAttach>
    );
  }
};
const getMessage = (
  item: MessageDataObjType,
  setIndex: (index: number) => void,
  hasAnimated: boolean,        // Añadir hasAnimated
  setHasAnimated: (value: boolean) => void // Añadir setHasAnimat
) => {
console.log(item);

  // console.log(item.message_type);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simular un tiempo de procesamiento
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000); // 2 segundos de tiempo de carga

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <StyledLoader>Cargando...</StyledLoader>;
  // }
  // const [displayedText, setDisplayedText] = useState('');

  // useEffect(() => {
  //   if (
  //     item._id === item._id && // Verificar si el _id coincide con el específico
  //     item.message_type === MessageType.TEXT &&
  //     item.messagetext &&
  //     !hasAnimated // Solo animar si no ha sido animado
  //   ) {
  //     const text = item.messagetext;
  //     let index = 0;

  //     const timer = setInterval(() => {
  //       setDisplayedText((prev) => prev + text[index]);
  //       index++;
  //       if (index === text.length) {
  //         clearInterval(timer);
  //         setHasAnimated(true); // Llamar correctamente a setHasAnimated
  //       }
  //     }, 10); // Ajusta el intervalo de tiempo según sea necesario

  //     return () => clearInterval(timer);
  //   }
  // }, [item, hasAnimated]);


  if (item.message_type === MessageType.TEXT) {
    return <StyledMessageTypePara>{item.messagetext}</StyledMessageTypePara>;
  }  else if (item.message_type === MessageType.TABLE) {
    // Parsear la respuesta JSON
    let tableData;
    try {
      tableData = JSON.parse(item.message);
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return <StyledMessageTypePara>Error parsing table data</StyledMessageTypePara>;
    }

    // Renderizar la consulta y la tabla
    return (
      <>
        <StyledQuery>{tableData.query}</StyledQuery>
        <StyledTable>
          <thead>
            <StyledTableRow>
              {tableData.db_result.length > 0 && Object.keys(tableData.db_result[0]).map((column, index) => (
                <StyledTableCell key={`header-${index}`}>{column}</StyledTableCell>
              ))}
            </StyledTableRow>
          </thead>
          <tbody>
            {tableData.db_result.map((row, rowIndex) => (
              <StyledTableRow key={`row-${rowIndex}`}>
                {Object.keys(row).map((column, colIndex) => (
                  <StyledTableCell key={`cell-${rowIndex}-${colIndex}`}>
                    {row[column]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </tbody>
        </StyledTable>
      </>
    );
  } else {

  
    return (
      <StyledChatMediaWrapper>
        <StyledMediaRow>
        {item.media && item.media.slice(0, showMediaItems).map((data, index) => (
  <StyledMediaCol
    key={"media-" + data._id}
    onClick={() => setIndex(index)}
  >
    {getMediaMessage(data)}
  </StyledMediaCol>
))}
          {item.media && item.media.length > showMediaItems ? (
  <StyledMediaCol onClick={() => setIndex(showMediaItems)}>
    <StyledMediaCounter>
      +{item.media.length - showMediaItems}
    </StyledMediaCounter>
  </StyledMediaCol>
) : null}
        </StyledMediaRow>
      </StyledChatMediaWrapper>
    );
  }
};

type ReceiverMessageItemProps = {
  selectedUser: User;
  item: typeof Message;
  isPreviousSender: boolean;
  isLast: boolean;
  // hasAnimated: boolean;
  // setHasAnimated: (value: boolean) => void;
};

const ReceiverMessageItem: React.FC<ReceiverMessageItemProps> = ({
  selectedUser,
  isPreviousSender = false,
  isLast,
  item,
}) => {
  const [index, setIndex] = useState(-1);
  // const [hasAnimated, setHasAnimated] = useState(false); // Nuevo estado para controlar si el mensaje ya ha sido animado

console.log(item);
console.log(isPreviousSender);
console.log(isLast);

  const onClose = () => {
    setIndex(-1);
  };

  return (
    <StyledChatMsgListItem
      className={clsx(
        "left",
        isPreviousSender ? "hide-user-info" : "first-chat-message",
        isLast ? "last-chat-message" : ""
      )}
    >
      <StyledMsgChatView className="message-chat-view">
     

        <StyledMsgChatItem className="message-chat-item">
        <StyledMsgTime className="message-time">
  {item.createdAt ? new Date(item.createdAt).toLocaleString() : ""}
</StyledMsgTime>

          <StyledMsgChat>
          {getMessage(item, setIndex)}
          </StyledMsgChat>
        </StyledMsgChatItem>
      </StyledMsgChatView>
      <AppMediaViewer index={index} medias={item.media || []} onClose={onClose} />
    </StyledChatMsgListItem>
  );
};

export default ReceiverMessageItem;
