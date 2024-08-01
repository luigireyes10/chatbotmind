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
          src={"/assets/images/ecommerce/item-3.png"}
          alt="illustration"
        />
      </StyledIllustrationImgHeader>
      <StyledIllustrationContent>
        <h6>Sony Wireless noise canceling headphones WH-1000XM4</h6>
      </StyledIllustrationContent>
    </StyledIllustrationCard>
  );
};

export default IllustrationDesign;
