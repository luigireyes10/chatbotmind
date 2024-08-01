import React, { useState } from "react";
import AppCard from "@crema/components/AppCard";
import ProductCell from "./ProductCell";
import { useIntl } from "react-intl";
import { StyledPopularScrollbar, StyledPowerGrid } from "./index.styled";
import type { PopularProductDataType } from "@crema/types/models/dashboards/Ecommerce";
import AppSelect from "@crema/components/AppSelect";

type Props = {
  popularProducts: PopularProductDataType[] | any;
  ProductBuscador: any;
};

const PopularProducts = ({ popularProducts, ProductBuscador }: Props) => {
  const { messages } = useIntl();
  const handleSelectionType = () => {
    // console.log('handleSelectionType');
  };

  console.log("popularProducts", popularProducts);

  return (
    <AppCard
      className="no-card-space-ltr-rtl"
      title={messages["eCommerce.popularProducts"] as string}
    >
      <StyledPopularScrollbar style={{ height: 355 }}>
        <StyledPowerGrid
          dataSource={popularProducts}
          renderItem={(datas: any, index) => (
            console.log(datas),
            (
              <ProductCell
                key={"product-" + index}
                data={datas}
                popularProducts={popularProducts}
                ProductBuscador={ProductBuscador}
              />
            )
          )}
        />
      </StyledPopularScrollbar>
    </AppCard>
  );
};

export default PopularProducts;
