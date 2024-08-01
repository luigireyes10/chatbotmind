import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Col } from "antd";
import {QUERY_PRODCUTOS_DETALLES,} from "utils/Queries/Administrative";
import type { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";
import {
  Header,
  ProductImageSlide,
  ProductView,
  SimilarProduct,
  ProductCardAdd,
} from "@crema/modules/ecommerce/ProductDetail";
import CustomStateCard from "modules/CustomComponents/CustomStateCard";
import AppCard from "@crema/components/AppCard";
import AppInfoView from "@crema/components/AppInfoView";
import AppAnimate from "@crema/components/AppAnimate";
import AppRowContainer from "@crema/components/AppRowContainer";
import AppPageMeta from "@crema/components/AppPageMeta";
import Reviews from '@crema/modules/ecommerce/ProductDetail/ProductView/Reviews/index'; 
import { StyledProductDetails } from "./index.styled";
import { useGetDataApi } from "@crema/hooks/APIHooks";

const customData = {
  id: 2,
  icon: "local_shipping",
  title: "New Orders",
  value: 3100,
  growth: 33,
  color: "#ff3939",
};

const ProductDetail = () => {
  const { query } = useRouter();
  const { all } = query;

  const { loading, error, data, refetch } = useQuery(QUERY_PRODCUTOS_DETALLES, {
    variables: {
      condition: {
        ID_EMPRESA: "1",
        ID_PRODUCTO: "1"
      },
      limit: 1
    },
  });

  useEffect(() => {
    if (all?.[0]) {
      refetch(); 
    }
  }, [all, refetch]);

  const renderLoadingState = () => (
    <div>Loading...</div>
  );

  const renderErrorState = () => (
    <div>Error fetching product details</div>
  );

  if (loading) return renderLoadingState();
  if (error) return renderErrorState();

  const currentProduct: ProductDataType = data?.GetProductosDetalle?.products[0];

  console.log('Fetched Product Data', currentProduct);

  return (
    <StyledProductDetails>
      <AppPageMeta title="Product Details" />
      {currentProduct && (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <AppCard key="product_detail">
            <AppRowContainer>
              <Col sm={24} lg={9}>
                <ProductImageSlide product={currentProduct} />
                <br />
                <br />
                <AppRowContainer>
                  <Col sm={24} lg={22}>
                    <ProductCardAdd product={currentProduct} />
                  </Col>
                </AppRowContainer>
              </Col>
              <Col sm={24} lg={12}>
                <ProductView product={currentProduct} />
              </Col>
            </AppRowContainer>
            <SimilarProduct ProductSimilares={undefined} />
          </AppCard>
          <CustomStateCard data={customData} />
        </AppAnimate>
      )}
      <AppInfoView />
    </StyledProductDetails>
  );
};

export default ProductDetail;
