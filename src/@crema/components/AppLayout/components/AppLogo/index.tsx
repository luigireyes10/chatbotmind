import React from "react";
import { useSidebarContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import { StyledAppLogo } from "./index.styled";

type AppLogoProps = {
  hasSidebarColor?: boolean;
};
const AppLogo: React.FC<AppLogoProps> = ({ hasSidebarColor }) => {
  const { sidebarColorSet } = useSidebarContext();
  return (
    <StyledAppLogo>
      {hasSidebarColor && sidebarColorSet.mode === "dark" ? (
        <img src="/assets/images/logo/emedia-logo.png" alt="emedia-logo" />
      ) : (
        <img src="/assets/images/logo/emedia-logo.png" alt="emedia-logo" />
      )}
    </StyledAppLogo>
  );
};

export default AppLogo;