import React from "react";
import { StyledHomeMainFeed, StyleProfile } from "./index.styled";
import CustomBannerPerfil from "modules/CustomComponents/CustomBannerPerfil/CustomBannerPerfil";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Col } from "antd";
import Feed from "../Feed";

const MainFeed = () => {
  const videoCall = {
    users: [
      {
        id: 1,
        name: "John Doe",
        profilePic: "/assets/images/avatar/A2.jpg",
      },
      {
        id: 2,
        name: "Lily John",
        profilePic: "/assets/images/avatar/A3.jpg",
      },
      {
        id: 3,
        name: "John Doe",
        profilePic: "/assets/images/avatar/A4.jpg",
      },
      {
        id: 4,
        name: "Lily John",
        profilePic: "/assets/images/avatar/A5.jpg",
      },
      {
        id: 5,
        name: "John Doe",
        profilePic: "/assets/images/avatar/A6.jpg",
      },
      {
        id: 6,
        name: "Lily John",
        profilePic: "/assets/images/avatar/A1.jpg",
      },
    ],
    title: "8 mutual friends",
  };

  return (
    <StyledHomeMainFeed>
      <StyleProfile>
        <AppRowContainer>
          <CustomBannerPerfil data={videoCall} />
        </AppRowContainer>
      </StyleProfile>
      <Feed />
    </StyledHomeMainFeed>
  );
};

export default MainFeed;
