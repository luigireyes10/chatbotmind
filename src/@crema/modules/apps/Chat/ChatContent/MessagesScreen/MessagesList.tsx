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
  loading,
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
  }, [selectedUser, authUser]);


  useEffect(() => {
 
    socket.on('message-received', (message) => {
      // Verificar si el mensaje recibido es del mismo usuario que envió el mensaje
      console.log('Mensaje recibido del servidor:', message);
      
      if (message.myUserId !==  myUserId) {
        // Agregar el mensaje a UserMessages cuando lo recibas del servidor
        setUserMessages((prevMessages) => [...prevMessages, message]);
      }
      else {
        console.log('Mensaje recibido del mismo usuario que envió el mensaje');
      }
    });
    return () => {
      socket.off("message-received");
      socket.close();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [UserMessages]);

  return (
    <StyledChatMsgList>
      {UserMessages && UserMessages.length > 0 ? (
        <AppList
          data={UserMessages}
          ListEmptyComponent={<ListEmptyResult title="test" />}
          renderItem={(item, index) => {
            if (item.from === myUserId) {
              return (
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
              );
            } else {
              return (
                <ReceiverMessageItem
                  isPreviousSender={
                    index > 0 && item.sender === UserMessages[index - 1].sender
                  }
                  isLast={
                    (index + 1 < UserMessages.length &&
                      item.sender !== UserMessages[index + 1].sender) ||
                    index + 1 === UserMessages.length
                  }
                  selectedUser={selectedUser}
                  item={item}
                  key={item.id}
                />
              );
            }
          }}
        />
      ) : (
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
