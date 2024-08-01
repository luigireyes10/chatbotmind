import React, { useEffect, useState } from "react";
import { Grid, Modal, Button } from "antd";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import AppContentView from "../../AppContentView";
import AppThemeSetting from "../../AppThemeSetting";
import AppFooter from "../components/AppFooter";
import clsx from "clsx";
import { FooterType } from "@crema/constants/AppEnums";
import { isEmpty } from "@crema/helpers/Common";
import { useLayoutContext } from "@crema/context/AppContextProvider/LayoutContextProvider";
import { useQuery } from "@apollo/client";
import { QUERY_GET_OFERTA_PRODUCTOS } from "utils/Queries/Administrative";
import { RouterConfigData } from "@crema/types/models/Apps";
import { StyledAppLayout, StyledAppLayoutMain, StyledHe, StyledMainScrollbar } from "./index.styled";
import OfferModalContent from "./ModalCintilloOferta";

const { useBreakpoint } = Grid;

type Props = {
  children: React.ReactNode;
  routesConfig: RouterConfigData[];
};

const DefaultLayout: React.FC<Props> = ({ children, routesConfig }) => {
  const width = useBreakpoint();
  const [isCollapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { footer, footerType } = useLayoutContext();

  const onToggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (!isEmpty(width)) {
      if (width.xl) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    }
  }, [width]);

  const handleOfferClick = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { loading: loadingOfe, data: dataOfe } = useQuery(QUERY_GET_OFERTA_PRODUCTOS, {
    variables: { condition: { ESTADO: "A", ID_EMPRESA: "1" } },
  });
  
  //PARA QUE NO SE MUESTRE EL CINTILLO SI YA LA OFERTA CADUCO
  const isOfferActive = (offer) => {
    const now = new Date();
    const offerEndDate = new Date(offer.FECHA_FIN_OFERTA);
    return offerEndDate > now;
  };

  const activeOffers = dataOfe?.GetOfertasProductos?.filter(isOfferActive) || [];
 
  console.log(dataOfe);
  
  return (
    <StyledAppLayout
      className={clsx({
        appMainFooter: footer && footerType === FooterType.FLUID,
        appMainFixedFooter: footer && footerType === FooterType.FIXED,
      })}
    >
      <AppSidebar isCollapsed={isCollapsed} routesConfig={routesConfig} />
      <StyledAppLayoutMain>
        {activeOffers.length > 0 && activeOffers.map((oferta) => (
          <StyledHe 
            key={oferta.ID}
            onClick={handleOfferClick} 
            style={{ cursor: 'pointer' }}
          >
            <span>
              ¡Oferta especial! 
              <span>{oferta.POR_DESCUENTO}%</span>
              de descuento:
            </span>
            <span style={{ marginLeft: '5px', marginRight: '10px' }}>Termina en:</span>
           
            <Button
              type="text"
              onClick={handleOfferClick}
              style={{ color: 'white', textDecoration: 'underline', marginLeft: '0px' }}
            >
              Ver oferta
            </Button>
          </StyledHe>
        ))}

   

        <AppHeader isCollapsed={isCollapsed} onToggleSidebar={onToggleSidebar} />
        <StyledMainScrollbar>
          <AppContentView>{children}</AppContentView>
          <AppFooter />
        </StyledMainScrollbar>
      </StyledAppLayoutMain>
      <AppThemeSetting />
    </StyledAppLayout>
  );
};

export default React.memo(DefaultLayout);