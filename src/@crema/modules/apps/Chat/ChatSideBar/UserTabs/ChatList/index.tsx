import React, { useEffect, useState ,useRef} from "react";

import ConnectionItem from "./ChatItem";
import AppList from "@crema/components/AppList";
import ChatListSkeleton from "@crema/components/AppSkeleton/ChatListSkeleton";
import { useIntl } from "react-intl";
import { StyledAppScrollbar, StyledChatSidebarTitle } from "../../index.styled";
import { ConnectionObjType } from "@crema/types/models/apps/Chat";
import ListEmptyResult from "@crema/components/AppList/ListEmptyResult";
import axios from 'axios';
import io from 'socket.io-client';
import socket from 'pages/socket'

type ConnectionListProps = {
  connectionListData: ConnectionObjType[];
  setSelectedUser: any;
  selectedUser: ConnectionObjType | null;
  loading: boolean | undefined;

};

const ConnectionList: React.FC<ConnectionListProps> = ({
  setSelectedUser,
  selectedUser,
}) => {
  const { messages } = useIntl();
  const [connectionListData, setConnectionListData] = useState<ConnectionObjType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  connectionListData.forEach((ConnectionObj: ConnectionObjType) => {
    if (ConnectionObj.messageCount !== undefined) {
      console.log(ConnectionObj.messageCount);
    }
  });

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/api/messages`);
      if (response.status === 200) {

        const filteredData = response.data.filter((userInfo: ConnectionObjType) => userInfo._id.toString() !== '66411fdef5a1513e647b28d8');
        setConnectionListData(filteredData);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      setLoading(false);
    }
  };

  fetchUsers();
}, []);


const socket = useRef(null);

useEffect(() => {
  // Inicializa socket.current aquí, por ejemplo:
  // socket.current = io('http://localhost:3000');

  // Asegúrate de que socket.current no es null antes de intentar usarlo
  if (socket.current) {
    socket.current.on('usernamesWithMessages', (userInfos) => {
      setConnectionListData((currentData: ConnectionObjType[]) => {
        const dataMap: { [_id: string]: ConnectionObjType } = { ...currentData.reduce((map, userInfo) => ({ ...map, [userInfo._id]: userInfo }), {}) };

        userInfos.forEach(userInfo => {
          if (userInfo._id !== '66411fdef5a1513e647b28d8') {
            dataMap[userInfo._id] = userInfo;
          }
        });

        const newData = Object.values(dataMap);
        return newData;
      });
    });
  }
}, []);
  const handleSetSelectedUser = (user: ConnectionObjType) => {

    setSelectedUser(user);
  };

  return (
    <StyledAppScrollbar>
      
      <StyledChatSidebarTitle>Conection</StyledChatSidebarTitle>
      <AppList
        data={connectionListData}
        ListEmptyComponent={
          <ListEmptyResult
            content={messages["chatApp.noUserFound"] as string}
            loading={loading}
            placeholder={<ChatListSkeleton />}
          />
        }
        renderItem={(item) => (
          <ConnectionItem
            key={item.id}
            item={item}
            setSelectedUser={handleSetSelectedUser} 
            selectedUser={selectedUser}
          />
        )}
      />

 
    </StyledAppScrollbar>
  );
};

export default ConnectionList;