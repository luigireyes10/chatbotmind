import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import { StyledIllustrationCard, StyledIllustrationImgHeader } from "../IllustrationDesign/index.styled";
import StyledDescription, { StyledIllustrationContent } from "./index.styled";


const IllustrationDescripcion = ({item}) => {

  
  //console.log('dataProdMasPop',item.DEFAULT_RUTA_DOC)
  return (
    <StyledIllustrationCard >
      <StyledIllustrationImgHeader>
        <img
          className="img-full"
          src={item?.DEFAULT_RUTA_DOC}
          alt="illustration"
        />
      </StyledIllustrationImgHeader>

      <StyledIllustrationContent>
      <span className="a-size-mini">
  {item?.PORC_DESCUENTO ? (
    <>
      <span className="offer">{item.PORC_DESCUENTO}-%</span>
      <span className="offerText">Oferta</span>
    </>
  ) : null}
</span>
      </StyledIllustrationContent>

      <StyledDescription>
        <span className="a-size-min">
          <span className="descripcion">{item?.DESC_PRODUCTO }</span>
        </span>
      </StyledDescription>
    </StyledIllustrationCard>
  );
};

export default IllustrationDescripcion;
