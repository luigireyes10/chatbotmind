import React from "react";
import { Dropdown } from "antd";
import { green, red } from "@ant-design/colors";
import { DownOutlined } from "@ant-design/icons";
import { BiCheck } from "react-icons/bi";

import {
  StyledChatUserAvatar,
  StyledChatUserAvatarView,
  StyledChatUserInfo,
  StyledChatUserInfoContext,
  StyledChatUserName,
  StyledChatUserStatus,
  StyledChatUserStatusDot,
  StyledChatUserStatusText,
  StyledDropDownItem,
} from "./userInfo.styled";
import { ConnectionObjType } from "@crema/types/models/apps/Chat";
import IntlMessages from "@crema/helpers/IntlMessages";

type UserInfoProps = {
  user: ConnectionObjType;
  showStatus?: boolean;
  showStatusActive?: boolean;
};

const UserInfo: React.FC<UserInfoProps> = ({
  user,
  showStatus = false,
  showStatusActive,
}) => {
  const getUserAvatar = () => {
    const name = user.name;
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    if (user.username) {
      return user.username.charAt(0).toUpperCase();
    }
  };

  if (!user) {
    return null;
  }

  const items = [
    {
      key: 1,
      label: (
        <StyledDropDownItem className="active">
          <BiCheck className="icon" /> Active
        </StyledDropDownItem>
      ),
    },
    {
      key: 2,
      label: (
        <StyledDropDownItem>
          <BiCheck className="icon" /> Away
        </StyledDropDownItem>
      ),
    },
    {
      key: 3,
      label: (
        <StyledDropDownItem>
          <BiCheck className="icon" /> Do not distrub
        </StyledDropDownItem>
      ),
    },
    {
      key: 4,
      label: (
        <StyledDropDownItem>
          <BiCheck className="icon" />
          Invisible
        </StyledDropDownItem>
      ),
    },
  ];

  return (
    <StyledChatUserInfo>
      <StyledChatUserAvatarView>
        {user.photoURL || user.image ? (
          <StyledChatUserAvatar src={user.photoURL || user.image} />
        ) : (
          <StyledChatUserAvatar>{getUserAvatar()}</StyledChatUserAvatar>
        )}
        {user.isGroup
          ? null
          : showStatus && (
              <StyledChatUserStatusDot
                className="chat-user-status-dot chat-user-status-dot-only"
                style={{
                  backgroundColor: user.status === "online" ? green[6] : red[6],
                }}
              />
            )}
        {showStatusActive && (
          <StyledChatUserStatus>
            <StyledChatUserStatusDot
              className="chat-user-status-dot"
              style={{
                backgroundColor: user.status === "online" ? green[6] : red[6],
              }}
            />
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <DownOutlined />
              </a>
            </Dropdown>
          </StyledChatUserStatus>
        )}
      </StyledChatUserAvatarView>
      <StyledChatUserInfoContext>
        <StyledChatUserName className="text-truncate">
          {user.displayName || user.name
            ? 'ChatBotMinds' || user.name
            : user.email}
        </StyledChatUserName>
        {user.isGroup ? (
          <StyledChatUserStatusText className="pointer">
            {user?.members?.length} <IntlMessages id="chatApp.participants" />
          </StyledChatUserStatusText>
        ) : (
          <StyledChatUserStatusText className="text-truncate">
            {user.status ? user.status : "Online"}
          </StyledChatUserStatusText>
        )}
      </StyledChatUserInfoContext>
    </StyledChatUserInfo>
  );
};

export default UserInfo;
