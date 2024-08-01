import React, { useEffect, useMemo, useState } from "react";
import AppsContent from "@crema/components/AppsContainer/AppsContent";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import {
  StyledProductListMainContent,
  StyledProductListView,
  StyledProductCardContinue,
  StyledRecomendationsProd,
  ProductsVisited,
  StyledDivCard,
  ProductsOffers,
  ProductsVisitedOffer,
  ProductsVisitedMore,
  StyledUniformEmpresa,
} from "./index.styled";
import type {
  CustomProductDataType,
  ProductDataFilterType,
  ProductDataType,
} from "@crema/types/models/ecommerce/EcommerceApp";
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  CardContinue,
  CardOffer,
  CardOneView,
  Carousel,
  WallPaper,
} from "@crema/modules/dashboards/Widgets";
import { SimilarProduct } from "@crema/modules/ecommerce/ProductDetail";
import { Button, Col } from "antd";
import { QuickTransfer } from "@crema/modules/dashboards/Crypto";
import AppRowContainer from "@crema/components/AppRowContainer";
import CustomCarousel from "modules/CustomComponents/CustomCarousel";
import GridItem from "../../Products/ProductListing/ProductGrid/GridItem";
import { ecommerce } from "@crema/mockapi/fakedb";
import { PopularProducts } from "@crema/modules/dashboards/ECommerce";
import {
  QUERY_ADD_PRODUCTOS,
  QUERY_BANNERS,
  QUERY_GET_OFERTA_PRODUCTOS,
  QUERY_OFERTAS_PRODUCTOS,
  QUERY_PRODUCTO_CLASIFICACION,
  QUERY_PRODUCTO_DESTACADO,
  QUERY_PRODUCTOS_BUSCADOR,
  QUERY_PRODUCTOS_MAS_POPULARES,
  QUERY_TOTAL_OFERTAS_DETALLE,
} from "utils/Queries/Administrative";
import { useQuery } from "@apollo/client";

import { resolveAny } from "dns";
import CustomGridItem from "modules/CustomComponents/CustomGridItem/CustomGridItem";
import { StyledSimilarProductSlideView } from "../../ProductDetail/SimilarProduct/index.styled";
import Slider from "react-slick";
import CustomCarouselRebajas from "modules/CustomComponents/CustomCarouselRebajas";
import router from "next/router";
import { StyledButton } from "@crema/modules/apps/Chat/ChatContent/MessagesScreen/ModalProspecto/index.styled";
import UniformeEmpresasInstituciones from "../../ProductDetail/UniformeEmpresasIntituciones";

type Props = {
  filterData: ProductDataFilterType;
  viewType: string;
  setViewType: (viewType: string) => void;
  setFilterData: (filterData: ProductDataFilterType) => void;
};

const HomePage = ({ viewType }: Props) => {
  const [page, setPage] = useState(0);
  const [{ apiData: ecommerceList, loading }, { setQueryParams }] =
    useGetDataApi<{ list: ProductDataType[]; total: number }>(
      "/api/ecommerce/list",
      { list: [] as ProductDataType[], total: 0 },
      {},
      false
    );
  useEffect(() => {
    setQueryParams({ filterData: [], page });
  }, []);

  const condition = useMemo(() => ({ ID_EMPRESA: "1" }), []);

  const {
    loading: loadingClasif,
    error: errorClasif,
    data: imagesClasif,
  } = useQuery(QUERY_PRODUCTO_CLASIFICACION, {
    variables: { condition: { ID_EMPRESA: "1" } },
    fetchPolicy: "cache-first", // Usa caché si está disponible, sino, hace solicitud de red
  });
  console.log(imagesClasif);

  const { loading: loadingDestacado, data: imagesDestacado } = useQuery(
    QUERY_PRODUCTO_DESTACADO,
    {
      variables: { condition: { ID_EMPRESA: "1", NUMERACION_RATING: "5" } },
      // fetchPolicy: 'cache-first',
    }
  );
  console.log(imagesDestacado);

  const { loading: loadingOfertas, data: dataOfertas } = useQuery(
    QUERY_TOTAL_OFERTAS_DETALLE,
    {
      variables: {
        condition: { ESTADO: "A", ID_EMPRESA: "1" },
        //  , limit: 5
      },
      //fetchPolicy: 'cache-first',
    }
  );

  console.log(dataOfertas);

  const {
    loading: loadingBuscador,
    error: errorBuscador,
    data: ProductBuscador,
  } = useQuery(QUERY_PRODUCTOS_BUSCADOR, {
    variables: {
      condition: {
        ID_EMPRESA: "1",
        ID_CLASIFICACION: [],
        VENTAS: [],
        SUB_CATEGORIA: [],
        ESTADO: "A",
        MRP: {
          start: 0,
          end: 0,
        },
        CREATED_AT: {
          startDate: null,
          endDate: null,
        },
      },
    },
    fetchPolicy: "cache-first", // Usa caché si está disponible, sino, hace solicitud de red
  });

  console.log(ProductBuscador);

  const { loading: loadingPopulares, data: dataProdMasPop } = useQuery(
    QUERY_PRODUCTOS_MAS_POPULARES,
    {
      variables: { condition: { ID_EMPRESA: "1" }, limit: 5 },
      //fetchPolicy: 'cache-first',
    }
  );

  console.log(dataProdMasPop);

  const { loading: loadingOfe, data: dataOfe } = useQuery(
    QUERY_GET_OFERTA_PRODUCTOS,
    {
      variables: {
        condition: { ESTADO: "A", ID_EMPRESA: "1" },
        //  , limit: 5
      },
      //fetchPolicy: 'cache-first',
    }
  );
  console.log(dataOfe);

  if (loadingClasif) return "Loading...";
  if (errorClasif) return `Error! ${errorClasif.message}`;

  // if (loadingClasif || loadingDestacado || loadingOfertas || loadingPopulares) return 'Loading...';
  // if (errorClasif) return `Error! ${errorClasif.message}`;

  const ProductOfertas = dataOfertas?.GetOfertasTotalProductosDetalle;
  console.log(ProductOfertas);

  return (
    <StyledProductListView>
      <AppsContent>
        <StyledProductListMainContent>
          <StyledDivCard>
            <StyledProductCardContinue>
              <h2>
                <IntlMessages id="message.product.view" />
              </h2>
              <StyledRecomendationsProd>
                <CustomCarousel
                  images={imagesClasif?.GetEmProductoClasificacionTotal}
                />
              </StyledRecomendationsProd>
              <StyledProductCardContinue>
                <StyledButton type="link">
                  <IntlMessages
                    id="dashboard.widgets.view.more"
                    onClick={() => {
                      router.push("/ecommerce/products");
                    }}
                  />
                </StyledButton>
              </StyledProductCardContinue>
            </StyledProductCardContinue>
          </StyledDivCard>

          <StyledProductCardContinue>
            <h2>
              <IntlMessages id="message.product.buy" />
            </h2>
            <ProductsVisited>
              {imagesDestacado?.GetProductosDestacados?.slice(0, 4).map(
                (item, index) => (
                  <CustomGridItem key={index} item={item} />
                )
              )}
            </ProductsVisited>
            <Button type="link">
              <IntlMessages id="dashboard.widgets.view.history" />
            </Button>
          </StyledProductCardContinue>

          <StyledProductCardContinue>
            <h2>
              <IntlMessages id="message.product.offer" />
            </h2>
            <ProductsVisitedOffer>
              <AppRowContainer>
                <Col xs={1} md={1} lg={1}></Col>
                <Col xs={22} md={20} lg={20}>
                  {/* {dataOfertas?.GetOfertasProductosDetalles?.map((item, index) => (
                  <WallPaper key={index}  Ofertas={item} />
                ))} */}
                  <WallPaper Ofertas={dataOfe} />
                </Col>
              </AppRowContainer>
              <AppRowContainer>
                <Col xs={1} md={1} lg={1}></Col>
                <Col xs={22} md={20} lg={20}>
                  <PopularProducts
                    popularProducts={ProductOfertas}
                    ProductBuscador={ProductBuscador}
                  />
                </Col>
              </AppRowContainer>
              <Button
                type="link"
                onClick={() => {
                  router.push("/ecommerce/products");
                }}
              >
                <IntlMessages id="dashboard.widgets.view.OFERTAdETALLE" />
              </Button>
            </ProductsVisitedOffer>
          </StyledProductCardContinue>

          <StyledRecomendationsProd>
            <h2>
              <IntlMessages id="message.product.more.explore" />
            </h2>
            <SimilarProduct ProductSimilares={dataProdMasPop} />
            <Button
              type="link"
              onClick={() => {
                router.push("/ecommerce/products");
              }}
            >
              <IntlMessages id="dashboard.widgets.view.more" />
            </Button>
          </StyledRecomendationsProd>

          <StyledDivCard>
            <StyledProductCardContinue>
              <h2>Rebajas de Ofertas para ti</h2>
              <br />
              <br />

              <CustomCarouselRebajas ProductRebajas={dataProdMasPop} />
              <Button
                type="link"
                onClick={() => {
                  router.push("");
                }}
              >
                <IntlMessages id="dashboard.widgets.view.offer" />
              </Button>
            </StyledProductCardContinue>
          </StyledDivCard>

          <br />
          <br />

          <StyledUniformEmpresa>
            <h1>Uniformes Empresariales</h1>

            <UniformeEmpresasInstituciones />
          </StyledUniformEmpresa>

          <br />
          <br />
          <StyledRecomendationsProd>
            <h2>
              <IntlMessages id="message.pruduct.delivery" />
            </h2>
            <Carousel ProductSimilares={dataProdMasPop} />
          </StyledRecomendationsProd>
        </StyledProductListMainContent>
      </AppsContent>
    </StyledProductListView>
  );
};

export default HomePage;
