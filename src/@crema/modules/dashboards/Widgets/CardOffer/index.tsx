import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  StyledIllustrationCard,
  StyledIllustrationContent,
  StyledIllustrationImgHeader,
  StyledSpanContent,
} from "./index.styled";
import Image from 'next/image'
import styled from "styled-components";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Col } from "antd";


const IllustrationDesign = ({ item }) => {
  //console.log('dataProdMasPop',item.DEFAULT_RUTA_DOC)
  console.log(item);

  return (
    <AppRowContainer>

    <StyledIllustrationCard>   
    <Col xs={24} sm={12}>

  <StyledIllustrationImgHeader>
<Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${item?.DEFAULT_RUTA_DOC}`}
         alt="illustration"
         width={500}
         height={500}
       />
 </StyledIllustrationImgHeader>


       <StyledIllustrationContent>
         <StyledSpanContent>
          <span className="offer">{item?.PORC_DESCUENTO | 0}-%</span>
          <span className="offerText">Oferta</span>
        </StyledSpanContent>
       </StyledIllustrationContent>
       </Col>

    </StyledIllustrationCard>
    </AppRowContainer>

  );
};

export default IllustrationDesign;
