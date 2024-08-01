import React from "react";
import AppList from "@crema/components/AppList";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Avatar, Col, Table } from "antd";
import {
  StyledConfirmationActionBtn,
  StyledConfirmationActionBtnView,
  StyledConfirmationActionPara,
  StyledConfirmationListCard,
  StyledConfirmationListItem,
  StyledConfirmationListItemAction,
  StyledConfirmationListItemContent,
} from "./index.styled";
import { StyledComponent } from "styled-components";
import { CompoundedComponent } from "antd/es/float-button/interface";
import { getTotalPrice } from "./helper";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import type { CartItemsType } from "@crema/types/models/ecommerce/EcommerceApp";
import { QUERY_PRODUCTOS_CARRITO_COMPRAS } from "utils/Queries/Administrative";
import { useQuery } from "@apollo/client";
import { log } from "console";

type Props = {
  cartItems: CartItemsType[] | any;
  loading?: boolean;
  totalPrice: number;
};

const ItemsList = ({ cartItems, totalPrice }: Props) => {
  const { Column } = Table;

  console.log("Items", cartItems);

  return (
    <StyledConfirmationListCard<
      StyledComponent<CompoundedComponent, any, CartItemsType, never>
    >
      dataSource={cartItems}
      pagination={false}
    >
      <AppRowContainer>
      <Col xs={24} sm={12}>
        <AppList
              delay={200}
              data={cartItems as any}
              renderItem={(data) => {
                console.log("product", data.image);

            return (
        
                <StyledConfirmationListItemContent>
                  <div>
                    <Avatar
                      src={data?.image}
                      
                      size={40} // Ajusta el tamaño del Avatar según sea necesario
                    />

                    <h3>{data.title}</h3>
                    <p>Brand: {data.brand}</p>
                  </div>
                </StyledConfirmationListItemContent>
             
            );
          }}
        />
         </Col>

        <Col xs={24} sm={12}>
          <StyledConfirmationListItemAction>
            <h3>Total ${totalPrice}</h3>
            <StyledConfirmationActionBtnView>
              <StyledConfirmationActionBtn className="btn-secondary">
                Cancel
              </StyledConfirmationActionBtn>
              <StyledConfirmationActionBtn type="primary">
                Need Help
              </StyledConfirmationActionBtn>
            </StyledConfirmationActionBtnView>
            <StyledConfirmationActionPara>
              <img src={"/assets/images/ecommerce/cart-icon.png"} alt="cart" />
              Delivery expected by 27 Jul
            </StyledConfirmationActionPara>
          </StyledConfirmationListItemAction>
        </Col>
      </AppRowContainer>
    </StyledConfirmationListCard>
  );
};

export default ItemsList;
