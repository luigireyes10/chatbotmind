import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import {
  StyledHeaderImgBtn,
  StyledHeaderImgCard,
  StyledHeaderImgContent,
  StyledHeaderImgFooter,
} from './index.styled';

const Header = () => {
  const { messages } = useIntl();
  return (
    <StyledHeaderImgCard
      heightFull
      title={messages['EMEDIA']}
      style={{
        backgroundImage: 'url(/assets/images/widgets/jombie.png)',
      }}
    >
        <StyledHeaderImgFooter>
          <StyledHeaderImgBtn type="primary">
            <IntlMessages id="dashboard.getStarted" />
          </StyledHeaderImgBtn>
          <StyledHeaderImgBtn className="btn-white-outline">
            <IntlMessages id="dashboard.readMore" />
          </StyledHeaderImgBtn>
        </StyledHeaderImgFooter>
      <StyledHeaderImgContent>
        <p>
          <IntlMessages id="dashboard.jombieContent" />
        </p>

      
      </StyledHeaderImgContent>
    </StyledHeaderImgCard>
  );
};

export default Header;
