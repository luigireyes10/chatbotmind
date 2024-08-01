

import React, { use, useEffect, useState } from "react";
import {
  EditOutlined,
  FileTextOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import IntlMessages from "@crema/helpers/IntlMessages";
import { Dropdown, Modal } from "antd";
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
  StyledMsgChatSender,
  StyledMsgChatView,
  StyledMsgInfoEdit,
  StyledMsgMoreDropdownLink,
  StyledMsgTime,
  Color,
} from "./MessageItem.style";
import { getFileSize } from "@crema/helpers/Common";
import AppMediaViewer from "@crema/components/AppMedialViewer";
import {
  MediaObjType,
  MessageDataObjType,
  MessageType,
} from "@crema/types/models/apps/Chat";
import { AuthUserType } from "@crema/types/models/AuthUser";
import Prospecto from "./ModalProspecto/AddContactForm";
import RegistroClienteWhatsapp from "./ModaleMessageWhasatpp/AddNumForm";
import { ContactObjType } from "@crema/types/models/apps/Contact";


const showMediaItems = 2;

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
type SenderMessageItemProps = {
  item: MessageDataObjType;
  authUser: AuthUserType;
  // onClickEditMessage: (item: MessageDataObjType) => void;
  deleteMessage: (id: any) => void;
  isPreviousSender: boolean;
  isLast: boolean;
  prospectoFile: (id: any) => void; 
  isAddContact: boolean;
  handleAddContactClose: () => void;
  selectContact?: ContactObjType | null;
  onUpdateContact?: (newContact: ContactObjType) => void;
  reCallAPI?: () => void;
};



const SenderMessageItem: React.FC<SenderMessageItemProps> = ({
  authUser,
  item,
  // onClickEditMessage,
  isPreviousSender = false,
  deleteMessage,
  isLast,
  prospectoFile,

  isAddContact,
  handleAddContactClose,
  selectContact,
  onUpdateContact,
  reCallAPI,
}) => {
  const [userImage, setUserImage] = useState(
    selectContact && selectContact.image
      ? selectContact.image
      : "/assets/images/placeholder.jpg"
  );
console.log(item);

const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
const [isAddTaskOpen, setAddTaskOpen] = useState(false);
const [itemTo, setItemTo] = useState(null);

useEffect(() => {

  if (item) {

    setItemTo(item.to);
  }

})

  console.log("itemTo", itemTo);

  console.log("prospectoFile", prospectoFile);

  const [selectedMessage, setSelectedMessage] = useState(null);

  console.log("selectedMessage", selectedMessage);

  const [index, setIndex] = useState(-1);
  const getUserAvatar = () => {
    const name = authUser.displayName;
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    if (authUser.email) {
      return authUser.email.charAt(0).toUpperCase();
    }
  };

  const showPaymentModal = () => {setIsPaymentModalVisible(true)};
  const showAddressModal = () => setIsAddressModalVisible(true);

  const handlePaymentOk = () => setIsPaymentModalVisible(false);
  const handleAddressOk = () => setIsAddressModalVisible(false);

  const handlePaymentCancel = () => setIsPaymentModalVisible(false);

  
  const handleAddressCancel = () => setIsAddressModalVisible(false);

  const onClose = () => {
    setIndex(-1);
  };
  const items = [
    {
      key: 2,
      label: (
        <span
          onClick={() => {
            deleteMessage(item.id);
          }}
        >
          <IntlMessages id="common.delete" />
        </span>
      ),
    },
    {
      key: 3,
      label: (
        <span
        onClick={showPaymentModal}

        >
          <IntlMessages id="common.prospecto" />
        </span>
      ),
    },{
      key: 4,
      label: (
        <span
        onClick={showAddressModal}

        >
          <IntlMessages id="common.numcliente" />
        </span>
      ),
    },
  ];

  if (item.message_type === MessageType.TEXT) {
    
  }
    
    items.unshift({
      key: 1,
      label: (
        <span
          // onClick={() => {
          //   onClickEditMessage(item);
          // }}
        >
          <IntlMessages id="common.edit" />
        </span>
      ),
    });

  console.log(item);

    

  return (
    <StyledChatMsgListItem
      className={clsx(
        "right",
        isPreviousSender ? "hide-user-info" : "first-chat-message",
        isLast ? "last-chat-message" : ""
      )}
    >
      <StyledMsgChatView className="message-chat-view">
        <StyledMsgChatItem className="message-chat-item">
          <StyledMsgTime className="message-time">{item.time}</StyledMsgTime>

        
         
          <Color><StyledMsgChat className="message-chat ">
             {getMessage(item, setIndex)}

            {item.edited && (
              <StyledMsgInfoEdit>
                <EditOutlined />
              </StyledMsgInfoEdit>
            )}
          </StyledMsgChat></Color>
        </StyledMsgChatItem>
        <StyledMsgChatSender className="message-chat-sender">
      
          <Dropdown menu={{ items }} trigger={["click"]}>
            <StyledMsgMoreDropdownLink className="message-more-dropdown-link">
              <MoreOutlined />
            </StyledMsgMoreDropdownLink>
          </Dropdown>
        </StyledMsgChatSender>
      </StyledMsgChatView>

      <Modal
  title="Prospecto"
  visible={isPaymentModalVisible}
  onCancel={handlePaymentCancel}
  footer={null}
 
  >
           <Prospecto

           item={item}
  selectContact={selectContact}
  setUserImage={setUserImage}
  userImage={userImage}
  onUpdateContact={onUpdateContact}
  handleAddContactClose={handleAddContactClose}
  reCallAPI={reCallAPI}
/>
          </Modal>



          <Modal
  title="Registro Whatsapp Cliente"
  visible={isAddressModalVisible}
  onCancel={handleAddressCancel}
  footer={null}
 
  >
           <RegistroClienteWhatsapp

           item={item}
  selectContact={selectContact}
  setUserImage={setUserImage}
  userImage={userImage}
  onUpdateContact={onUpdateContact}
  handleAddContactClose={handleAddContactClose}
  reCallAPI={reCallAPI}
/>
          </Modal>


      <AppMediaViewer index={index} medias={item.media || []} onClose={onClose} />
      
    </StyledChatMsgListItem>


  );
};

export default SenderMessageItem;
