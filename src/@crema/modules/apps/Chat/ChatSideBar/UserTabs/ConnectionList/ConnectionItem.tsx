import React from "react";
import clsx from "clsx";
import { green, red } from "@ant-design/colors";
import {
  StyledChatAvatar,
  StyledChatListItem,
  StyledChatListItemContent,
} from "../../index.styled";
import {
  StyledChatUserAvatarView,
  StyledChatUserStatusDot,
} from "../../userInfo.styled";
import { ConnectionObjType } from "@crema/types/models/apps/Chat";

type ConnectionItemProps = {
  item: ConnectionObjType;
  setSelectedUser: (user: ConnectionObjType) => void;
  selectedUser: ConnectionObjType | null;
};

const ConnectionItem: React.FC<ConnectionItemProps> = ({ item, setSelectedUser, selectedUser }) => {
  const isSelected = selectedUser && selectedUser._id === item._id; // Verifica si el item actual es el usuario seleccionado

  const handleClick = () => {
    console.log('User selected:', item);
    setSelectedUser(item);
  };
  return (
    <div onClick={handleClick} className={isSelected ? 'selected' : ''}>
    
    <StyledChatListItem
      className={clsx("item-hover", {
        active: selectedUser && selectedUser?._id === item._id,
      })}
      onClick={() => setSelectedUser(item)}
    >
      <StyledChatUserAvatarView>
        <StyledChatAvatar src={item.image} />
        <StyledChatUserStatusDot
          className="chat-user-status-dot chat-user-status-dot-only"
          style={{
            backgroundColor: item.status === "online" ? green[6] : red[6],
          }}
        />
      </StyledChatUserAvatarView>
      <StyledChatListItemContent>
        <h3>{item.name}</h3>
        <p className="text-truncate mb-0">@{item.username}</p>
      </StyledChatListItemContent>
    </StyledChatListItem>
    </div>
  );
};

export default ConnectionItem;
