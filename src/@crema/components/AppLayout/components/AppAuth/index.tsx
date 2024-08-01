import React from "react";
import { StyledAppAuth } from "./index.styled";

type AppLogoProps = {
  hasSidebarColor?: boolean;
};
const AppLogo: React.FC<AppLogoProps> = ({ hasSidebarColor }) => {
  return (
      <StyledAppAuth>
        <img src="/assets/images/createaccount.png" alt="crema-logo" />
        
      </StyledAppAuth>
  );
};

export default AppLogo;
