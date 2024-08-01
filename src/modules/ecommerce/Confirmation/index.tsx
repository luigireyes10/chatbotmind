import React, { useEffect, useState } from "react";
import { addresses } from "@crema/mockapi/fakedb/ecommerce/ecommerceData";
import AppPageMeta from "@crema/components/AppPageMeta";
import { StyledConfirmationView } from "./index.styled";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import AppAnimate from "@crema/components/AppAnimate";
import {
  AddressInfo,
  ItemsList,
  OrderPlaced,
  OrderSummary,
} from "@crema/modules/ecommerce/Confirmation";
import { StyledCheckoutOrderSummary } from "./index.styled";
import type {
  CartItemsType,
  ProductDataType,
} from "@crema/types/models/ecommerce/EcommerceApp";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Col } from "antd";

const Confirmation = () => {
  const [statedata, setstatedata] = useState<ProductDataType>();

  const [{ apiData: cartItems }] = useGetDataApi<CartItemsType[]>(
    "/api/cart/get",
    []
  );

  const [{ apiData: currentProduct }, { setQueryParams }] =
    useGetDataApi<ProductDataType>("/api/ecommerce/get", undefined, {}, false);

  useEffect(() => {
    if (currentProduct) {
      console.log("currentProduct", currentProduct);

      setstatedata(currentProduct);
    }
  }, [currentProduct]);

  useEffect(() => {
    setQueryParams({ id: 1 });
  }, []);

  return (
    <>
      <StyledConfirmationView key={"wrap"}>
        <h1>Confirmar Compra</h1>
        {/* <OrderPlaced cartItems={cartItems} /> */}
        {statedata ? (
          <AppRowContainer>
            <Col sm={24} lg={16}>
              <AddressInfo  address={addresses[0]} />
            </Col>
            <Col sm={24} lg={6}>
              <AppPageMeta title="Order Confirmation" />
              <AppAnimate animation="transition.slideRightIn" delay={200}>
                <div key="checkoutRight">
                  <StyledCheckoutOrderSummary>
                    <OrderSummary cartItems={cartItems} />
                  </StyledCheckoutOrderSummary>
                </div>
              </AppAnimate>

            </Col>
          </AppRowContainer>
        ) : (
          <></>
        )}
        {/* <ItemsList cartItems={cartItems} /> */}
      </StyledConfirmationView>
    </>
  );
};

export default Confirmation;
