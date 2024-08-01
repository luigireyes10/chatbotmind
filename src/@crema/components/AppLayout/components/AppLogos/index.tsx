import React from "react";
import { StyledAppSocialLogos } from "./index.styled";

type AppSocialLogosProps = {
  logo?: String;
  alt?: String;
};
const AppSocialLogos: React.FC<AppSocialLogosProps> = ({ logo, alt }) => {
  return (
    <StyledAppSocialLogos>
      
        <img src={`${logo}`} alt={`${alt}`} />
        
      
    </StyledAppSocialLogos>
  );
};

export default AppSocialLogos;
