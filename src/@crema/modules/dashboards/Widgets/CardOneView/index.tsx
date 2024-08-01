import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  StyledIllustrationCard,
  StyledIllustrationContent,
  StyledIllustrationImgHeader,
} from "./index.styled";

const IllustrationDesign = () => {
  return (
    <StyledIllustrationCard className="no-card-space">
      <StyledIllustrationImgHeader>
        <img
          className="img-full"
          src={"/assets/images/dummy2.jpg"}
          alt="illustration"
        />
      </StyledIllustrationImgHeader>
      <StyledIllustrationContent>
        <span className="a-size-mini">
          <span className="offer">Hasta un -25%</span>
          <span className="offerText">Ofert Now</span>
        </span>
      </StyledIllustrationContent>
    </StyledIllustrationCard>
  );
};

export default IllustrationDesign;
