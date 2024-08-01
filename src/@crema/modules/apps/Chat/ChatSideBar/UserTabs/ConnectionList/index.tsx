import React, { useEffect, useState } from "react";

import ConnectionItem from "./ConnectionItem";
import AppList from "@crema/components/AppList";
import ChatListSkeleton from "@crema/components/AppSkeleton/ChatListSkeleton";
import { useIntl } from "react-intl";
import { StyledAppScrollbar, StyledChatSidebarTitle } from "../../index.styled";
import { ConnectionObjType } from "@crema/types/models/apps/Chat";
import ListEmptyResult from "@crema/components/AppList/ListEmptyResult";
import axios from 'axios';

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
  const myUserId = "66411fdef5a1513e647b28d8" // Usa el ID del usuario autenticado
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const response = await axios.get(`http://localhost:4005/api/contacts/${myUserId}`);
                const response = await axios.get(`http://localhost:4005/api/users`);
        if (response.status === 200) {
          setConnectionListData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSetSelectedUser = (user: ConnectionObjType) => {
    console.log("ID del usuario seleccionado:", user._id); // Imprime el ID del usuario seleccionado
    setSelectedUser(user);
  };

  return (
    <StyledAppScrollbar>
      <StyledChatSidebarTitle>Contacts</StyledChatSidebarTitle>
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
            setSelectedUser={handleSetSelectedUser} // Usa handleSetSelectedUser en lugar de setSelectedUser
            selectedUser={selectedUser}
          />
        )}
      />
    </StyledAppScrollbar>
  );
};

export default ConnectionList;