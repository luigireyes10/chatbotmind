import React, { useState, useEffect} from "react";
import { useIntl } from "react-intl";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import AppPageMeta from "@crema/components/AppPageMeta";
import ChatContent from "./ChatContent";
import { ConnectionObjType } from "@crema/types/models/apps/Chat";
import ChatContextProvider from "../../apps/context/ChatContextProvider";
import { StyledChat } from "./index.styled";
import { UserList } from "@crema/types/models/Apps";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState<ConnectionObjType | null>(
    null
  );

  useEffect(() => {
    const userList: UserList[] = [
      {
        id: 13223,
        name: "Asantha Powel",
        image: "/assets/images/avatar/A5.jpg",
        skills: ["React", "Javascript", "Native", "Drupal"],
        information:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        email: "asantha@example.com",
        phone: "+91324534563",
        website: "www.asantha.com",
        charge: 20,
        readTime: "2 minutes",
        shares: "5k",
        retweets: "25k",
        topic: "Job Interviews",
      },
    ];

    setSelectedUser({
      channelId: 0,
      status: "",
      username: "",
      ...userList[0]
    });
  }, []);

  const [{ apiData: connectionList, loading }, { setData: setConnectionData }] =
    useGetDataApi<ConnectionObjType[]>("/api/chatApp/connections");

  const { messages } = useIntl();
  return (
    <ChatContextProvider>
      <StyledChat>
        <AppPageMeta title="Chat App" />
        <ChatContent
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          setConnectionData={setConnectionData}
        />
      </StyledChat>
    </ChatContextProvider>
  );
};

export default Chat;
