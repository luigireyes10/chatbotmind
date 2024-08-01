import React, {useState, useEffect} from "react";
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
  StyleContadorNotifychat,
  Styledcontent,
  Styledcontenttext,

} from "../../userInfo.styled";
import { ConnectionObjType } from "@crema/types/models/apps/Chat";
import io from "socket.io-client";
import axios from 'axios';
import socket from 'pages/socket'


type ConnectionItemProps = {
  item: ConnectionObjType;
  setSelectedUser: (user: ConnectionObjType) => void;
  selectedUser: ConnectionObjType | null;
};

const ConnectionItem: React.FC<ConnectionItemProps> = ({ item, setSelectedUser, selectedUser }) => {
  const userID = '664ea820e9ff17f2ae3de9a2'; 
  const otherUserID = '66411fdef5a1513e647b28d8';
  const isSelected = selectedUser && selectedUser._id === item._id; 
  const [messageCount, setMessageCount] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const markMessagesAsRead = async (userId, otherUserId) => {
    try {
      await axios.put('http://localhost:4005/api/messages/markAsRead/', { userId:item._id, otherUserId: "66411fdef5a1513e647b28d8" });
    } catch (error) {
      console.error('Failed to mark messages as read:', error);
    }
  };
  const getUnreadMessages = async (userId, otherUserId) => {
    try {
      const response = await axios.get(`http://localhost:4005/api/messages/markAsRead/${userId}/${otherUserId}`);
      setMessageCount(response.data.length);
    } catch (error) {
      console.error('Failed to get unread messages:', error);
    }
  }


  useEffect(() => {
    const handleNewMessage = async (message) => {
      console.log('Nuevo mensaje recibido:', message);
      if (message.senderId === item._id && isChatOpen) {
      
        await markMessagesAsRead('664ea820e9ff17f2ae3de9a2', '66411fdef5a1513e647b28d8');
      }
    };
  
    socket.on('new-message', handleNewMessage);
  
    return () => {
      socket.off('new-message', handleNewMessage);
    };
  }, [item._id, isChatOpen]);

  useEffect(() => {
    const handleNewMessage = async (userInfosArray) => {
      console.log('Nuevo mensaje recibido:', userInfosArray);
      const userInfos = userInfosArray.find(info => info._id === userID);
      if (userInfos && !isChatOpen) {
        setMessageCount(prevCount => prevCount + 1);
      } else if (userInfos && isChatOpen) {

        await markMessagesAsRead('664ea820e9ff17f2ae3de9a2', '66411fdef5a1513e647b28d8');
      }
    };
  
    getUnreadMessages(userID, otherUserID);
  
    socket.on('usernamesWithMessages', handleNewMessage);
  
    return () => {
      socket.off('usernamesWithMessages', handleNewMessage);
    };
  }, [userID, otherUserID, isChatOpen]); 

  useEffect(() => {
    const handleMessageCountUpdated = (data) => {
      console.log('Evento message-count-updated recibido:', data);
      if (data.userId === userID) {
        setMessageCount(data.count);
      }
    };
  
    socket.on('message-count-updated', handleMessageCountUpdated);
  
    return () => {
      socket.off('message-count-updated', handleMessageCountUpdated);
    };
  }, [userID]);
  
  const handleClick = async () => {
    setIsChatOpen(true);
  
    console.log('User selected:', item._id);
  
    setSelectedUser(item);
  
    await markMessagesAsRead('664ea820e9ff17f2ae3de9a2', '66411fdef5a1513e647b28d8');
  

    socket.emit('reset-message-count', item);
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
        {messageCount > 0 && (
  <StyleContadorNotifychat>
    <Styledcontent>
      <Styledcontenttext>{messageCount}</Styledcontenttext>
    </Styledcontent>
  </StyleContadorNotifychat>
)}
      </StyledChatListItemContent>

 
    </StyledChatListItem>
    </div>
  );
};

export default ConnectionItem;
