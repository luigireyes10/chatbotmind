import React, { useEffect } from "react";
import Carrusel from "@crema/modules/ecommerce/Perfil/MainFeed";
import Feed from "@crema/modules/ecommerce/Perfil/Feed";
import AppPageMeta from "@crema/components/AppPageMeta";
import CustomBannerPerfil from "modules/CustomComponents/CustomBannerPerfil/CustomBannerPerfil";
import { StyledHomeMainFeed, StyleProfile } from "@crema/modules/ecommerce/Perfil/MainFeed/index.styled";
import AppRowContainer from "@crema/components/AppRowContainer";
import { useRouter } from "next/router";

const Perfil = () => {


  return (
    <>
    <StyledHomeMainFeed>
      <StyleProfile>
        <AppRowContainer>
          <CustomBannerPerfil />
        </AppRowContainer>
      </StyleProfile>
      <Feed />
    </StyledHomeMainFeed>
     
    </>
  );
};

export default Perfil;
