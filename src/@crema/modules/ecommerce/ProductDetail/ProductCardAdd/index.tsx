import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Button, Select, Input, Col } from "antd";
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
  StyledProductCardAddStock
} from "./index.styled";
import { postDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import type { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";
import AppRowContainer from "@crema/components/AppRowContainer";
import { borderRadius } from "polished";
import { useMutation } from "@apollo/client";
import { MUTATION_ADD_CARRITO_COMPRA, MUTATION_CREATE_FACTURA } from "utils/Mutations/Administrative";

type Props = {
  product: ProductDataType;
};


const SplitDecimal = (num: number) => {
  const n = num.toString().split(".");
  return {
    integer: parseInt(n[0]),
    decimal: parseInt(n[1]),
  };
}


const ProductImageSlide = ({ product }: Props) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const router = useRouter();

  const price = SplitDecimal(product.mrp - +product.discount);
  const [value, setValue] = useState(1);

  const [AddCarritoCompra] = useMutation(MUTATION_ADD_CARRITO_COMPRA)


  const [facturaCompraProd] = useMutation(MUTATION_CREATE_FACTURA)


  const onAddToCard = async () => {

    try {
      const response = await AddCarritoCompra({
        variables: {
          condition: {
            ESTADO: 'A',
            ID_CARRITO_COMP: 'CPROD',
            ID_EMPRESA: '1',
            ID_PRODUCTO: '1',
            ID_USER: '1'
          },
        },
      })

      //console.log('response', response)
      if (response) {
        // showNotification({
        //   message: `Caja Cerrada Correctamente`,
        //   type: 'success',
        // })

        console.log('response', response)

        console.log('product.title', product.title)

        infoViewActionsContext.showMessage( `${product.title} added to cart successfully` );
        //refetch && refetch()
       
      }
    } catch (e) {
      infoViewActionsContext.fetchError(e.message);
    }
    postDataApi("/api/cart/add", infoViewActionsContext, {
      product,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          `${product.title} added to cart successfully`
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const saveData = async (data: any) => {

    console.log('data', data)
    let prueba = 0
    if (prueba === 0) return
    try {
      const response = await facturaCompraProd({
        variables: {
          condition: {
            "ART_OFERTA": null,
            "CANTIDAD": null,
            "CANTIDAD_OFERTA": null,
            "CANTIDAD_PEDIDO": null,
            "CANTIDAD_REFERENCIA": null,
            "CANT_DESPACHADA": null,
            "COBERTURA_SEGURO": null,
            "COD_BARRA": null,
            "COD_VENDEDOR_ACT": null,
            "COMISION_VENTA": null,
            "COSTO_COMPRA": null,
            "COSTO_CON_ITBIS": null,
            "COSTO_SIN_ITBIS": null,
            "DESCRIPCION_PRODUCTO": null,
            "DESCUENTO": null,
            "DESCUENTO_OFERTA": null,
            "ENTREGA_CON_CONDUCE": null,
            "ESTADO": null,
            "EVENTO": null,
            "EXENTO": null,
            "FECHA_ACTUALIZACION": null,
            "FECHA_FACTURA": null,
            "FECHA_INSERCION": null,
            "GRAVADO": null,
            "ID_BULTO": null,
            "ID_CANAL_PRECIO": null,
            "ID_DOCUMENTO": null,
            "ID_EMPRESA": null,
            "ID_IMPUESTO": null,
            "ID_INVENTARIO": null,
            "ID_MARCA": null,
            "ID_OFERTA": null,
            "ID_PERSONAL_VENDEDOR_MOD": null,
            "ID_PRODUCTO": null,
            "ID_REP_VEN": null,
            "ID_SEC_ENTRADA_COSTO": null,
            "ID_TIPO_TRANS": null,
            "ID_TIPO_TRANS_ALM": null,
            "ID_TIPO_TRANS_EVENTO": null,
            "ID_TRANSACCION_ALM": null,
            "ID_UBICACION": null,
            "IMPORTE": null,
            "IMPORTE_ITBIS": null,
            "IMPUESTO": null,
            "MONTO_CARGO": null,
            "MONTO_DESCUENTO": null,
            "MONTO_EXENTO": null,
            "MONTO_EXONERADO": null,
            "MONTO_GRAVADO": null,
            "MONTO_IMPUESTO": null,
            "MONTO_IMP_DESC": null,
            "MONTO_IMP_RETENIDO": null,
            "NO_EVENTO": null,
            "OBSERVACIONES": null,
            "OFERTA": null,
            "PORC_CARGO": null,
            "PORC_DESCUENTO": null,
            "PORC_DESC_OFERTA": null,
            "PORC_IMPUESTO": null,
            "PORC_IMP_RETENIDO": null,
            "PRECIO": null,
            "PRECIO_BRUTO": null,
            "PRECIO_FINAL_CON_IMPUESTOS": null,
            "PRECIO_FINAL_SIN_IMPUESTOS": null,
            "PRECIO_LIQUIDADO": null,
            "PRECIO_NETO": null,
            "PRECIO_PEDIDO": null,
            "PRECIO_VENTA": null,
            "REGALO": null,
            "SECUENCIA": null,
            "TASA_EXONERACION": null,
            "TR_ORIGEN": null,
            "UNIDAD": null,
            "UNIDAD_REFERENCIA": null,
            "USUARIO_ACTUALIZACION": null,
            "USUARIO_INSERCION": null
          },
        },
      })

      //console.log('response', response)
      if (response) {
        // showNotification({
        //   message: `Caja Cerrada Correctamente`,
        //   type: 'success',
        // })

        console.log('response', response)

        console.log('product.title', product.title)

        infoViewActionsContext.showMessage( `${product.title} added to cart successfully` );
        infoViewActionsContext.fetchSuccess()
        //refetch && refetch()
       
      }
    } catch (e) {
      infoViewActionsContext.fetchError(e.message);
    }
  }

  const onButNowToCard = () => {
    postDataApi("/api/cart/add", infoViewActionsContext, {
      product,
    })
      .then(() => {
        router.push("/ecommerce/cart");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const options = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];

  return (
    <>
 
       <h2 style={{marginTop:"-80px"}}>{product.state} : </h2>
      
      <StyledProductCardAddFooter>
        <p>Pago</p>
        <p>Enviado por</p>
        <p>Vendido por</p>
        <p>Devoluciones</p>
        <p>Soporte</p>
        <span>Mas información sobre este producto</span>
      </StyledProductCardAddFooter>
      <hr />
      <br />
      <br />
      <br />
      <AppRowContainer>
       <Col sm={24} lg={12}>
        <Button
          //type="primary"
          onClick={onAddToCard}
          style={{borderRadius: "0px", backgroundColor: "#001529", color:"white", top: "-60px"}}
        >
          Add A Carrito 
        </Button>
        </Col>
        <Col sm={24} lg={12}>
        <Button
          //className="btn-secondary"
          onClick={saveData}
          style={{borderRadius: "0px", backgroundColor: "#ff8e16", color:"white", top: "-60px"}}
        >
          Comprar Ahora
        </Button>
        </Col>
        </AppRowContainer>
   </>
  );
};

export default ProductImageSlide;
