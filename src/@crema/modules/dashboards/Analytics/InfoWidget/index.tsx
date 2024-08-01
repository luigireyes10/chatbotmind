import React, { useState } from "react";
import {
  StyledAnaInfoWidgetCard,
  StyledAnaInfoWidgetContent,
  StyledAnaInfoWidgetImg,
  StyledAnaInfoWidgetInfo,
} from "./index.styled";

import type { InfoWidgetsType } from "@crema/types/models/dashboards/Analytics";
import IntlMessages from "@crema/helpers/IntlMessages";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetDataApi } from "@crema/hooks/APIHooks";


type Props = {
  data: InfoWidgetsType;
  handleSelectCategProd: (data: any) => void;
  setIsDesingModalVisible: any
  selectedImage: InfoWidgetsType;
  setSelectedImage: (image: InfoWidgetsType) => void; // Asegúrate de que el tipo sea correcto
};
// Paso 4: Crear un objeto de estilos fuera del componente
const widgetStyle = { backgroundColor: "#ffb411", fontWeight: "bold" };

// Paso 1: Extracción de Componentes (ejemplo simplificado)
const WidgetImage = ({ src }) => (
  <StyledAnaInfoWidgetImg>
    <img src={src} alt="icon" />
  </StyledAnaInfoWidgetImg>
);

const InfoWidget: React.FC<Props> = ({
  data,
  handleSelectCategProd,
  setIsDesingModalVisible,
  selectedImage,
  setSelectedImage,
}) => {
  const handleClick = (event) => {
    event.stopPropagation();
    handleSelectCategProd(data);
    setIsDesingModalVisible(false);
    setSelectedImage(data);
  };

  console.log(selectedImage);

  return (
    <div style={widgetStyle}>
      <StyledAnaInfoWidgetCard
        heightFull
        className="item-hover"
        onClick={handleClick}
      >
        <StyledAnaInfoWidgetInfo>
          {/* Paso 1: Uso del componente extraído */}
          <WidgetImage src={data.icon} />
          <StyledAnaInfoWidgetContent>
            {/* Contenido aquí */}
            <p className="text-truncate">{data.details}</p>
          </StyledAnaInfoWidgetContent>
        </StyledAnaInfoWidgetInfo>
      </StyledAnaInfoWidgetCard>
    </div>
  );
};

export default InfoWidget;
