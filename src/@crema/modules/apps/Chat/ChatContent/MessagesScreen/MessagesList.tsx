import React, { useEffect, useState, useRef } from "react";
import SenderMessageItem from "./SenderMessageItem";
import ReceiverMessageItem from "./ReceiverMessageItem";
import AppList from "@crema/components/AppList";
import { AppAnimates } from "@crema/constants/AppEnums";
import { StyledChatMsgList } from "./MessageItem.style";
import {
  ConnectionObjType,
  // ObjType,
  MessageObjType,
} from "@crema/types/models/apps/Chat";
import { AuthUserType } from "@crema/types/models/AuthUser";
import ListEmptyResult from "@crema/components/AppList/ListEmptyResult";
import axios from "axios";
import io from "socket.io-client";
import socket from 'pages/socket' 
import styled, { keyframes } from "styled-components";
import _ from "lodash";
export type MessagesListProps = {
  authUser: AuthUserType;
  selectedUser: ConnectionObjType;
  // onClickEditMessage: (data:ObjType) => void;
  deleteMessage: (id: number) => void;
  loading?: boolean;
};

const MessagesList: React.FC<MessagesListProps> = ({
  authUser,
  selectedUser,
  // onClickEditMessage,
  deleteMessage,
}) => {

  const [UserMessages, setUserMessages] = useState([]);
  // const endOfMessagesRef = React.useRef<null | HTMLDivElement>(null);
  const myUserId = "66411fdef5a1513e647b28d8"; // Usa el ID del usuario autenticado
  const endOfMessagesRef = React.useRef(null);
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (selectedUser) {
          const response = await axios.get(
            `http://localhost:4005/api/messages/${selectedUser._id}/${myUserId}`
          );
          if (response.status === 200) {
            setUserMessages(response.data);
          } else {
            console.log(
              "Hubo un problema al obtener los mensajes del usuario de la base de datos"
            );
          }
        }
      } catch (error) {
        console.error(
          "Error al obtener los mensajes del usuario de la base de datos:",
          error
        );
      }
    };

    fetchMessages();
  }, []);

  const [loadingMessages, setLoadingMessages] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    const handleMessageReceived = (message) => {
      console.log('Mensaje recibido del servidor:', message);
      console.log(message.message.message);
      
      if (message.myUserId !== myUserId) {
               const newMessage = {
          from: message.message?.from,
          to: message.message?.to,
          message:message.message.message,
          Estado: message.message?.Estado,
          message_type: 2,
          read: message.message?.read,
          _id: message.message?._id,
          createdAt: message.message?.createdAt,
          updatedAt: message.message?.updatedAt,
        };

        setUserMessages((prevMessages) => [...prevMessages, newMessage]);
      } else {
        console.log('Mensaje recibido del mismo usuario que envió el mensaje');
      }
    };
console.log(UserMessages);

    const handleMessageReceivedIA = (response) => {
      console.log('Mensaje recibido del servidor:', response);
      
      if (response.user !== myUserId) {
        let nlResponse;
        if(response.message_type === 2){
          nlResponse = JSON.parse(response.nl_response);
        } else  {
          nlResponse = response.nl_response;
        }
        const codRandom = new Date().getTime()

        const newMessage = {
          _id: codRandom,
          from: '66411fc7f5a1513e647b28d3',
          to: '66411fdef5a1513e647b28d8',
          message: response.nl_response,
          messagetext:nlResponse.nl_response, 
          Estado: 'Active',
          message_type: response.message_type,
          read: true,
        };
        
       
console.log(newMessage);
setLoadingMessages((prev) => ({ ...prev, [newMessage._id]: true }));
      
        setUserMessages((prevMessages) => [...prevMessages, newMessage]);
        setTimeout(() => {
          setLoadingMessages((prev) => ({ ...prev, [newMessage._id]: false }));
        }, 3000);
      } else {
        console.log('Mensaje recibido del mismo usuario que envió el mensaje');
      }
    };

    socket.on('message-received', handleMessageReceived);
    socket.on('message-received-ia', handleMessageReceivedIA);

    return () => {
      socket.off('message-received', handleMessageReceived);
      socket.off('message-received-ia', handleMessageReceivedIA);
    };
  }, [myUserId]);


  useEffect(() => {
    scrollToBottom();
  }, [UserMessages]);
console.log(UserMessages);
const loadingAnimation = keyframes`
  0% { content: 'Esperando Respuesta.'; }
  33% { content: 'Esperando Respuesta..'; }
  66% { content: 'Esperando Respuesta...'; }
  100% { content: 'Esperando Respuesta.'; }
`;

const StyledLoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  font-size: 18px;
  color: #555;
  &::after {
    content: '...';
    animation: ${loadingAnimation} 1s infinite;
  }
`;

const StyledMessageContainer = styled.div`
  margin-top: 20px; /* Ajusta el valor según sea necesario */
`;

  return (
    <StyledChatMsgList>
  
      {UserMessages && UserMessages.length > 0 ? (
              <>
             
        <AppList
          data={UserMessages}
          ListEmptyComponent={<ListEmptyResult title="test" />}
          renderItem={(item, index) => {
            if (item.from === myUserId) {
              return (
                <StyledMessageContainer>

                <SenderMessageItem
                  authUser={authUser}
                  item={item}
                  isPreviousSender={index > 0 && item.sender === UserMessages[index - 1].sender}
                  isLast={(index + 1 < UserMessages.length &&
                    item.sender !== UserMessages[index + 1].sender) ||
                    index + 1 === UserMessages.length}
                  key={item.id}
                  // onClickEditMessage={onClickEditMessage}
                  deleteMessage={deleteMessage} prospectoFile={function (id: any): void {
                    throw new Error("Function not implemented.");
                  } } isAddContact={false} handleAddContactClose={function (): void {
                    throw new Error("Function not implemented.");
                  } }/>
                  </StyledMessageContainer>

              );
            } else {
              return (
                <StyledMessageContainer key={item.id}>
                    {loadingMessages[item._id] ? (
                      <StyledLoadingMessage />
                    ) : (
                      <ReceiverMessageItem
                        isPreviousSender={index > 0 && item.sender === UserMessages[index - 1].sender}
                        isLast={(index + 1 < UserMessages.length &&
                          item.sender !== UserMessages[index + 1].sender) ||
                          index + 1 === UserMessages.length}
                        selectedUser={selectedUser}
                        item={item}
                      />
                    )}
                  </StyledMessageContainer>
              );
            }
          }}
        />
      </>) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: "20px",
            color: "#333",
            animation: "fadein 2s",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          Aún no tienes mensajes con {selectedUser.username}
        </div>
      )}
       <div ref={endOfMessagesRef} />
 
    </StyledChatMsgList>
  );
};

export default MessagesList;
