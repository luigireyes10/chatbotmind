import React from "react";
import { Card, Select, Button, Divider } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import {
  StyledPageScroll,
} from "@crema/modules/ecommerce/Home/Feed/index.styled";

const { Option } = Select;

const CartSimple = () => {
  const images = [
    "/assets/images/Home/carousel001.png",
    "/assets/images/Home/carousel002.png",
    "/assets/images/Home/carousel003.png",
    "/assets/images/Home/carousel004.png",
  ];
  return (
    <Card
      className="carrito-card"
      title="Subtotal"
      extra={<span>RD$2500.00</span>}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora
        sapiente aperiam cumque eaque voluptates sed amet ea error fugit
        exercitationem
      </p>
      <Button type="primary" block>
        Ir al Carrito
      </Button>
      <Divider />
      <StyledPageScroll>
        {images.map((img, index) => (
          <>
            <div key={index} className="producto">
              <img src={`${img}`} alt={`Producto ${index + 1}`} />
            </div>
            <div className="producto-info">
              <Select
                defaultValue={1}
                style={{
                  width: 80,
                  marginRight: 8,
                  marginLeft: 8,
                  marginTop: "-15px",
                  marginBottom: "-15px",
                }}
              >
                <Option value={1}>15</Option>
                <Option value={2}>3</Option>
                <Option value={3}>7</Option>
                <Option value={4}>9</Option>
              </Select>
              <Button
                danger
                icon={<DeleteOutlined />}
                style={{
                  marginLeft: 8,
                  marginTop: "-15px",
                  marginBottom: "-15px",
                }}
              />
            </div>
            <Divider className="divider-full-width" />
            <span className="spaceBetween"></span>
          </>
        ))}
      </StyledPageScroll>
    </Card>
  );
};

export default CartSimple;
