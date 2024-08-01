import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import {
  StyledHeaderImgBtn,
  StyledHeaderImgCard,
  StyledHeaderImgContent,
  StyledHeaderImgFooter,
  StyledBotton,
} from './contentCarousel.styled';
import style from '@crema/modules/thirdParty/recharts/Radial/Components/style';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const { messages } = useIntl();
  return (
    <StyledHeaderImgCard
      heightFull
     
      title={messages['dashboard.jombie']}
    
    >
      <StyledHeaderImgContent>
        <p>
          <IntlMessages id="dashboard.jombieContent" />
        </p>

        <StyledHeaderImgFooter>
       
          <StyledBotton className="btnfos-3" onClick={() => {router.push("/ecommerce/desing");}}>Diseñar</StyledBotton>
  
      
        
          <StyledBotton className="btnfos-4" onClick={() => {router.push("/ecommerce/products");}}>Comprar</StyledBotton>
     
        </StyledHeaderImgFooter> 
        
       
      </StyledHeaderImgContent>
    </StyledHeaderImgCard>
  );
};

export default Header;
