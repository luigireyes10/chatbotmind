import React from "react";
import PropTypes from "prop-types";
import IntlMessages from "@crema/helpers/IntlMessages";

import {
  StyledAuth,
  StyledAuthCard,
  StyledAuthWrap,
  StyledMainAuthScrollbar,
} from "./AuthWrapper.styled";
import AppAnimateGroup from "@crema/components/AppAnimateGroup";
import AppInfoView from "@crema/components/AppInfoView";


type Props = {
  children: React.ReactNode;
  title?: string;
};
const AuthWrapper = ({ children, title }: Props) => {
  return (
    <StyledAuth>
      <StyledMainAuthScrollbar>
        <AppAnimateGroup
          type="scale"
          animateStyle={{ flex: 1 }}
          style={{ flex: 1 }}
          delay={0}
          interval={10}
          duration={200}
        >
          <StyledAuthWrap key={"wrap"}>
            <StyledAuthCard>
                {children}
            </StyledAuthCard>
          </StyledAuthWrap>
          <AppInfoView />
        </AppAnimateGroup>
      </StyledMainAuthScrollbar>
    </StyledAuth>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
