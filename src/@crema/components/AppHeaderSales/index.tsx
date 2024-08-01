import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import { AiOutlineTag } from "react-icons/ai";
import {
  StyledDrowdownWrapper,
  StyledSalesIcon,
  StyledSalesLink,
  StyledSalesText,
} from "./index.styled";

const AppSales = () => {
  return (
    <StyledDrowdownWrapper>
        <StyledSalesLink onClick={(e) => e.preventDefault()}>
          <StyledSalesIcon>
            <AiOutlineTag />
          </StyledSalesIcon>

          <StyledSalesText>
            <IntlMessages id="common.notifications" />
          </StyledSalesText>
        </StyledSalesLink>
    </StyledDrowdownWrapper>
  );
};

export default AppSales;
