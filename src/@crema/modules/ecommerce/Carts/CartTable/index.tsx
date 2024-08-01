import React, { useState } from "react";
import { Avatar, Button, Modal, Table } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import {
  StyledCartIncDec,
  StyledCartTable,
  StyledCartUser,
  StyledDescriptionAndQty,
  StyledCheckbox,
} from "../index.styled";
import type { CartItemsType } from "@crema/types/models/ecommerce/EcommerceApp";
import { StyledComponent } from "styled-components";
import { CompoundedComponent } from "antd/es/float-button/interface";
import CartsCompartir from "../../ProductDetail/Compartir";

type Props = {
  cartItems: CartItemsType[] | any;
  loading: boolean;
  onRemoveItem: (productId: number) => void;
  onIncrement: (data: CartItemsType | any) => void;
  onDecrement: (data: CartItemsType | any) => void;
  counts: { [key: string]: number };
  relatedWishlist: any;
};

const CartTable = ({
  cartItems,
  loading,
  onRemoveItem,
  onIncrement,
  onDecrement,
  counts,
  relatedWishlist,
}: Props) => {
  const { Column, ColumnGroup } = Table;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <StyledCartTable<
      StyledComponent<CompoundedComponent, any, CartItemsType, never>
    >
      loading={loading}
      dataSource={cartItems}
      pagination={false}
    >
      <ColumnGroup>
        <Column
          title="Wish List"
          dataIndex="EM_DOC_IMAGE"
          key="EM_DOC_IMAGE"
          width={50}
          render={(images: any[]) => {
            const image = images?.[0]?.RUTA_DOCUMENTO;
            return (
              <StyledCartUser>
                <Avatar
                  src={process.env.NEXT_PUBLIC_API_URL + image}
                  size={100}
                  shape="square"
                  style={{ maxWidth: "100%", maxHeight: "100%", height: "100%" }}
                />
              </StyledCartUser>
            );
          }}
        />

        <Column
          dataIndex="DESC_PRODUCTO"
          key="DESC_PRODUCTO"
          render={(text: string, record: CartItemsType) => (
            <div key={record.ID_PRODUCTO}>
              <StyledDescriptionAndQty>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: record.DESC_PRODUCTO}} />
                  <p>Marca: {record.ID_PROD_MARCA}</p>
                </div>
                <div
                  style={{
                    position: "relative",
                    top: "40px",
                  }}
                >
                  <StyledCartIncDec>
                    <PlusOutlined
                      className="pointer"
                      onClick={() => onIncrement(record.ID_PRODUCTO)}
                    />
                    <span>{counts[record.ID_PRODUCTO] || record.CANTIDAD_REORDEN || 1}</span>
                    <MinusOutlined
                      className="pointer"
                      onClick={() => onDecrement(record.ID_PRODUCTO)}
                    />
                  </StyledCartIncDec>
                </div>
                <div style={{ position: "relative", left: "120px", top: "10px", fontSize: 14 }}>
                  <span style={{ color: 'darkorange' }}> | </span>
                  <Button
                      type="link"
                      onClick={() => onRemoveItem(record.ID_PRODUCTO)} // Llama a la función onRemoveItem con el ID del producto
                      style={{ color: "darkorange", textDecoration: "none", borderBottom: "2px solid transparent", transition: "border-color 0.3s" }}
                    >
                      Eliminar
                    </Button>
                  
                 
                  <span style={{ color: 'darkorange' }}> | </span>
                  <a href="#" style={{ color: 'darkorange', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }}onClick={showModal}>
                    Compartir
                  </a>
                
                <Modal
                  title="Compartir"
                  visible={isModalVisible}
                  onCancel={handleCancel}
                  closable={true}
                  footer={null}
                  style={{ top: 400, left: 200 }} // Esto moverá el modal hacia abajo
                  maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} // Esto hará que el fondo sea menos oscuro
                >
                  <CartsCompartir />
                </Modal>


                </div>
              </StyledDescriptionAndQty>
            </div>
          )}
          width={500}
          align="left"
        />

        <Column
          title="Precio"
          dataIndex="COSTO_RD"
          key="COSTO_RD"
          align="right"
          render={(price) => (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "10px",
              }}
            >
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                ${price}
              </span>
            </div>
          )}
        />

        <Column
          title="Total"
          dataIndex="COSTO_RD"
          key="total"
          align="right"
          render={(price, record: CartItemsType) => (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "10px",
              }}
            >
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                ${price * (counts[record.ID_PRODUCTO] || record.CANTIDAD_REORDEN || 1)}
              </span>
            </div>
          )}
        />
      </ColumnGroup>
    </StyledCartTable>
  );
};

export default CartTable;
