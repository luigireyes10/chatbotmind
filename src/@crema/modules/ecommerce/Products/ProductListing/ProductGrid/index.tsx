import React from "react";
import AppGrid from "@crema/components/AppGrid";
import GridItem from "./GridItem";
import ListEmptyResult from "@crema/components/AppList/ListEmptyResult";
import type { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";
import AppScrollbar from "@crema/components/AppScrollbar";

type Props = {
  ecommerceList: any;
  loading: boolean;
  dataProductAdd: any;
  ProductOfertas: any;
};
const ProductGrid = ({
  ecommerceList,
  loading,
  dataProductAdd,
  ProductOfertas,
}: Props) => {
  return (
    <AppScrollbar style={{ height: "700px" }}>
      <AppGrid
        itemPadding={5}
        delay={200}
        responsive={{
          xs: 2,
          sm: 3,
          xxl: 4,
        }}
        data={dataProductAdd}
        renderItem={(item) => (
          <GridItem item={item} ProductOfertas={ProductOfertas} />
        )}
        ListEmptyComponent={
          <ListEmptyResult content="No product found" loading={loading} />
        }
      />
    </AppScrollbar>
  );
};
export default ProductGrid;
