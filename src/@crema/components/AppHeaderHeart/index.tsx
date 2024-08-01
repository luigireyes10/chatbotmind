import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import { AiOutlineHeart } from "react-icons/ai";
import {
  StyledDrowdownWrapper,
  StyledHeartIcon,
  StyledHeartLink,
  StyledHeartText,
} from "./index.styled";

const AppHeart = () => {
  return (
    <StyledDrowdownWrapper>
        <StyledHeartLink onClick={(e) => e.preventDefault()}>
          <StyledHeartIcon>
            <AiOutlineHeart />
          </StyledHeartIcon>

          <StyledHeartText>
            <IntlMessages id="common.notifications" />
          </StyledHeartText>
        </StyledHeartLink>
    </StyledDrowdownWrapper>
  );
};

export default AppHeart;
