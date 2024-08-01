import React, { useState, useEffect } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Button, Select, Input, Col, Form } from "antd";
import { useRouter } from "next/router";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import {
  StyledProductFav,
  StyledProductCardAddAction,
  StyledProductImageSlideRoot,
  StyledProductProductCardAdd,
  StyledProductCardAddPrice,
  StyledProductCardAddHeader,
  StyledProductCardAddFooter,
  StyledProductCardAddStock,
  StyledbuttonContainer,
} from "./index.styled";
import { postDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import type { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";
import AppRowContainer from "@crema/components/AppRowContainer";
import { borderRadius } from "polished";
import { useMutation } from "@apollo/client";
import {
  MUTATION_ADD_CARRITO_COMPRA,
  MUTATION_CREATE_FACTURA,
} from "utils/Mutations/Administrative";

type Props = {
  // product: ProductDataType;
  stateDireccion: any;
  stateMetodoPago: any; // Add the missing property
  // updateStateDireccion: any;
  cartItems: any;
};

const SplitDecimal = (num: number) => {
  const n = num.toString().split(".");
  return {
    integer: parseInt(n[0]),
    decimal: parseInt(n[1]),
  };
};

const ProductImageSlide = ({
  stateDireccion,
  stateMetodoPago,
  cartItems,
}: Props) => {
  useEffect(() => {
    console.log("stateDireccion ha cambiado:", stateDireccion);
  }, [stateDireccion]);

  useEffect(() => {
    console.log("stateMetodoPago ha cambiado:", stateMetodoPago);
  }, [stateMetodoPago]);

  useEffect(() => {
    console.log("cartItems ha cambiado:", cartItems);
  }, [cartItems]);

  const infoViewActionsContext = useInfoViewActionsContext();
  const router = useRouter();

  // const price = SplitDecimal(product.mrp - +product.discount);
  const [value, setValue] = useState(1);

  const [AddCarritoCompra] = useMutation(MUTATION_ADD_CARRITO_COMPRA);
  const [facturaCompraProd] = useMutation(MUTATION_CREATE_FACTURA);

  const productosTransformados = cartItems?.map(producto => ({
    ID_PRODUCTO: producto.id,
    NOMBRE_PRODUCTO: producto.product.title,
    MARCA: producto.product.brand,
    IMAGEN: producto.product.image,
    PRECIO_UNITARIO: producto.price.mrp,
    DESCUENTO: producto.price.discount,
    PRECIO_TOTAL: producto.total.mrp,
    CANTIDAD: producto.count
  }));

  // const onAddToCard = async (values: any) => {
  //   console.log('values', values);

  //   try {
  //     const response = await AddCarritoCompra({
  //       variables: {
  //         condition: {
  //           ESTADO: 'A',
  //           ID_CARRITO_COMP: 'CPROD',
  //           ID_EMPRESA: '1',
  //           ID_PRODUCTO: '1',
  //           ID_USER: '1'
  //         },
  //       },
  //     })

  //     if (response) {
  //       console.log('response', response)
  //       console.log('product.title', product.title)
  //       infoViewActionsContext.showMessage( `${product.title} added to cart successfully` );
  //     }
  //   } catch (e) {
  //     infoViewActionsContext.fetchError(e.message);
  //   }
  //   postDataApi("/api/cart/add", infoViewActionsContext, {
  //     product,
  //   })
  //     .then(() => {
  //       infoViewActionsContext.showMessage(
  //         `${product.title} added to cart successfully`
  //       );
  //     })
  //     .catch((error) => {
  //       infoViewActionsContext.fetchError(error.message);
  //     });
  // };

  const saveData = async (data: any) => {
    console.log("data", data);
const 

  condition = {
    ID_DIRECCION_ENVIO: stateDireccion.ID_DIRECCION_ENVIO,
    DIRECCION_ENVIO: stateDireccion.DIRECCION_ENVIO,
    ID_CUENTA: stateMetodoPago.ID_CUENTA,
    NUM_CUENTA: stateMetodoPago.NUM_CUENTA,
    TIPO_CUENTA: stateMetodoPago.TIPO_CUENTA,
    DESC_CUENTA: stateMetodoPago.DESC_CUENTA,
    ESTADO: stateMetodoPago.ESTADO,
    NUM_CVV: stateMetodoPago.NUM_CVV,
    NOMBRE_CUENTA: stateMetodoPago.NOMBRE_CUENTA,
    PRODUCTO: productosTransformados,
    ID_TIPO_TRANS: "FAT",
    ID_DOCUMENTO: "3",
    ID_EMPRESA: "1",
    ID_CLIENTE: "2",
    ID_PRODUCTO: "4",
    COD_BARRA: "PT",
    UNIDAD: "UND",
    ID_IMPUESTO: "ITBIS18",
  }


console.log('condition', condition);



    try {
      const response = await facturaCompraProd({
        variables: {
        condition: { condition }
        },
      });

      if (response) {
        console.log("response", response);
        // console.log('product.title', product.title)
        // infoViewActionsContext.showMessage( `${product.title} added to cart successfully` );
        infoViewActionsContext.fetchSuccess();

        // Llamada a handleEnviarDatos
      }
    } catch (e) {
      infoViewActionsContext.fetchError(e.message);
    }
  };

  return (
    <>
      <Form layout="vertical" onFinish={saveData}>
        <StyledbuttonContainer>
          <AppRowContainer>
            <Col sm={24} lg={12}>
              <Button
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#ff8e16",
                  color: "white",
                  top: "-60px",
                }}
                htmlType="submit"
              >
                Comprar Ahora
              </Button>
            </Col>
          </AppRowContainer>
        </StyledbuttonContainer>
      </Form>
    </>
  );
};

export default ProductImageSlide;
