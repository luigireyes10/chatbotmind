import React, { useState } from "react";
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
  setIndex: (index: number) => void
) => {

  console.log(item.message_type);
  
  if (item.message_type === MessageType.TEXT) {
    return <StyledMessageTypePara>{item.message}</StyledMessageTypePara>;
  }
   else  {

  
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
};

const ReceiverMessageItem: React.FC<ReceiverMessageItemProps> = ({
  selectedUser,
  isPreviousSender = false,
  isLast,
  item,
}) => {
  const [index, setIndex] = useState(-1);

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
