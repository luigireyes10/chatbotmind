import React from "react";
import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import AppPageMeta from "@crema/components/AppPageMeta";
import {
  StyledOrderSummaryItem,
  StyledSummaryOrderDivider,
} from "./index.styled";
import AppAnimate from "@crema/components/AppAnimate";
import type { CartItemsType } from "@crema/types/models/ecommerce/EcommerceApp";


type Props = {
  cartItems: CartItemsType[];
};
const OrderSummary = ({ cartItems }: Props | any) => {
  const { messages } = useIntl();
 
  console.log(cartItems?.totalDiscount)
  
  return (
    <AppAnimate animation="transition.slideRightIn" delay={200}>
      <AppCard title={messages["ecommerce.orderSummary"] as string}>
        <AppPageMeta title="Order Summery" />
        <StyledOrderSummaryItem>
          <p>Grand Total: </p>
          <span>${cartItems?.totalPrice}</span>
        </StyledOrderSummaryItem>
        <StyledOrderSummaryItem>
          <p>Discount: </p>
          <span>${cartItems?.totalDiscount}</span>
        </StyledOrderSummaryItem>
        <StyledOrderSummaryItem>
          <p>Shipping Charge: </p>
          <span>$0</span>
        </StyledOrderSummaryItem>
        <StyledOrderSummaryItem>
          <p>Estimated Tax: </p>
          <span>$0</span>
        </StyledOrderSummaryItem>

        <StyledSummaryOrderDivider />

        <StyledOrderSummaryItem>
          <p>Order Total: </p>
          <span>${cartItems?.totalPrice - cartItems?.totalDiscount + 4}</span>
        </StyledOrderSummaryItem>
      </AppCard>
    </AppAnimate>
  );
};

export default OrderSummary;
