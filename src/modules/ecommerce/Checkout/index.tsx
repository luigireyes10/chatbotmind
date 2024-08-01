import React, { useEffect, useState } from "react";
import AppCard from "@crema/components/AppCard";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppAnimate from "@crema/components/AppAnimate";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Button, Col } from "antd";
import Link from "next/link";
import AppPageMeta from "@crema/components/AppPageMeta";
import QueueAnim from "rc-queue-anim";
import {
  DeliveryAddress,
  OrderSummary,
  PaymentInfo,
} from "@crema/modules/ecommerce/Checkout";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import {
  StyledCheckoutCardTitle,
  StyledCheckoutOrderSummary,
} from "./index.styled";
import { StyledLinkBtn } from "../Confirmation/index.styled";
import type { CartItemsType } from "@crema/types/models/ecommerce/EcommerceApp";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_CONSULTA_CUENTA_PAGO, QUERY_CONSULTA_DIRECCIONES, QUERY_CONSULTA_SUMMARY_PRODUCT_CHEKOUT, QUERY_PRODUCTOS_CARRITO_COMPRAS } from "utils/Queries/Administrative";
import { MUTATION_CREATE_FACTURA, MUTATION_CREATE_UPDATE_CUENTA_PAGO} from "utils/Mutations/Administrative";
import { WidgetsType } from "@crema/types/models/dashboards/Widgets";
import AppLoader from "@crema/components/AppLoader";
import CustomEmediaCar from "modules/CustomComponents/CustomEmediaCar";
import { FaFacebookF } from "react-icons/fa";
import { grey } from "@ant-design/colors";

const Checkout = () => {
  const [{ apiData: cartItems }] = useGetDataApi<CartItemsType[]>(
    "/api/cart/get",
    []
  );

  const dataNota ={
    image: '/assets/images/logo.png',
    name: 'Crema admin',
    id: 'crema.report@gmail.com',
    desc: 
      'Nota: la dirrecion de envio que selecciones aqui es donde se va a entregar el pedido. Gracias!'
  }

  const [facturaCompraProd] = useMutation(MUTATION_CREATE_FACTURA)
  const [selectedAddress, setSelectAddress] = useState<any[]>([]);


  const { loading: loadingCheckout, error: errorCheckout, data: dataDireccion } = useQuery(QUERY_CONSULTA_DIRECCIONES, {
    variables: { condition: { ID_EMPRESA: '1' , ID_USER: "1" } },
    fetchPolicy: 'cache-first', // Usa caché si está disponible, sino, hace solicitud de red
  });

  const { loading: loading1, data: apiData1 , error } = useQuery(QUERY_CONSULTA_SUMMARY_PRODUCT_CHEKOUT, {
    variables: { condition: { ID_EMPRESA: "1",  ID_USER: "1", }},
    fetchPolicy: 'cache-first',
  });


  const { loading: loadingCuentaPago, data: apiDataCuentaPago , error: errorCuentaPago } = useQuery(QUERY_CONSULTA_CUENTA_PAGO, {
    variables: { condition: {  ID_CUENTA: "CARD", NUM_CUENTA: "124578", TIPO_CUENTA: "CARD" }},
    fetchPolicy: 'cache-first',
  });

  console.log('cartItems', cartItems)

 console.log('apiData1', apiData1?.GetCarritoProductosDetalle1Checkout)

  console.log('dataDireccion', dataDireccion)

  console.log('apiDataCuentaPago', apiDataCuentaPago)
  
  // if (loadingCheckout ) return 'Loading...';
  // if (errorCheckout) return `Error! ${errorCheckout.message}`;

  // [
  //   {
  //     id: 1,
  //     product: {
  //       image: '/assets/images/ecommerce/watch1.png',
  //       title: 'Mens\'s Exclusive Watch',
  //       brand: 'FastTrack'
  //     },
  //     price: { mrp: '120', discount: '25' },
  //     total: { mrp: '120', discount: '25', count: 1 },
  //     count: 1
  //   }
  // ]


  //  [
  //   {
  //     __typename: 'GetCarritoProductoResponse',
  //     id: '1',
  //     product: {
  //       __typename: 'Product',
  //       image: '/assets/images/ecommerce/watch1.png',
  //       title: 'PANTALLAS PANTALLA LH RAV4 04/06',
  //       brand: 'FastTrack'
  //     },
  //     price: { __typename: 'Price', mrp: '200', discount: '100' },
  //     total: { __typename: 'Total', mrp: '200', discount: '10', count: 1 },
  //     count: 1
  //   }
  // ]


  const totalPrice  = apiData1?.GetCarritoProductosDetalle1Checkout?.totalPrice
  const totalDiscount = apiData1?.GetCarritoProductosDetalle1Checkout?.totalPrice

  console.log(totalPrice)
  console.log(totalDiscount)
  console.log(selectedAddress)

  const saveData = async (data: any) => {

    console.log('data', data)
    let prueba = 0
    if (prueba === 0) return

    // {
    //   __typename: 'Direcciones',
    //   ID_EMPRESA: '1',
    //   ID_USER: '1',
    //   ID_CLIENTE: null,
    //   ID_TIPO_DIRECCION: null,
    //   ID_ESTADO: null,
    //   ID_CIUDAD: 'LA VEGA',
    //   LINEA1: null,
    //   LINEA2: null,
    //   LINEA3: null,
    //   ZIP_CODE: '4001',
    //   TELEFONO: '8098124',
    //   ID_PAIS: 'Afganistan',
    //   DEFECTO: null,
    //   ESTADO: 'A',
    //   FECHA_INSERCION: '2024-05-28T16:12:36.000Z',
    //   USUARIO_INSERCION: null,
    //   FECHA_ACTUALIZACION: null,
    //   USUARIO_ACTUALIZACION: null,
    //   TR_ORIGEN: null,
    //   ID_SECTOR: 'LAS MARAS',
    //   CALLE: '4',
    //   CASA: '3',
    //   EDIFICIO: '2',
    //   APARTAMENTO: 'B12'
    // }


    // ID_EMPRESA: '1',
    // ID_CUENTA: 'CARD',
    // NUM_CUENTA: '124578',
    // TIPO_CUENTA: 'CARD',
    // DESC_CUENTA: 'LUIGI',
    // ESTADO: 'A',
    // NUM_CVV: '1234',
    // NOMBRE_CUENTA: 'LUIGI'

      if(selectedAddress) {
                const condition = {
                  "ID_CUENTA": apiDataCuentaPago?.GetEmCuentaPago[0]?.ID_CUENTA,
                  "ID_CUENTA_PAGO": apiDataCuentaPago?.GetEmCuentaPago[0]?.ID_CUENTA,
                  "ID_DIRECCION": selectedAddress,
                  "ID_DIRECCION_ENVIO": selectedAddress,
                  "ID_EMPRESA": "1",
                  "ID_USER": "1",
                  "ID_VALIDAR_COMP": "1",
                  "MONTO_CARGO": totalPrice,
                  "MONTO_DESCUENTO": totalDiscount,
                  "MONTO_EXENTO": null,
                  "MONTO_EXONERADO": null,
                  "MONTO_GRAVADO": null,
                  "MONTO_IMPUESTO": null,
                  "MONTO_IMP_DESC": null,
                  "MONTO_IMP_RETENIDO": null,
                  "MONTO_TOTAL_NETO": totalPrice,
                  "OBSERVACIONES_ENVIO": dataNota?.desc
                    
                 }
              }
          else{



          }                
                          
                    

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

       // console.log('product.title', product.title)

        // infoViewActionsContext.showMessage( `${product.title} added to cart successfully` );
        // infoViewActionsContext.fetchSuccess()
        //refetch && refetch()
       
      }
    } catch (e) {
     // infoViewActionsContext.fetchError(e.message);
      console.log('ocurrio un error', e.message)
    }
  }


 // console.log('widgetsData.mateInfo.facebookInfo', widgetsData.mateInfo.facebookInfo)



  

  return (
    <>
      <AppPageMeta title="Checkout" />
      <QueueAnim style={{ zIndex: 3 }} type="scale">
        <h2 className="page-title" key="title">
          <IntlMessages id="sidebar.ecommerce.checkout" />
        </h2>
      </QueueAnim>
      <AppRowContainer>
        <Col xs={24} lg={16}>
          <AppAnimate animation="transition.slideLeftIn" delay={200}>
            <AppCard
              key="cardLeft"
              title={
                <StyledCheckoutCardTitle>
                  Delivery Address
                </StyledCheckoutCardTitle>
              }
            >
              <DeliveryAddress 
              dirreccion={dataDireccion?.GetEmDirecciones}
              selectedAddress={selectedAddress}
              setSelectAddress={setSelectAddress}
               />

        
              <Col xs={24} lg={12} key={"v"}>
              <CustomEmediaCar
                data={dataNota}
                bgColor={grey[4]}
                icon={<FaFacebookF />}
              />
            </Col>
                     
            </AppCard>
          </AppAnimate>
        </Col>
        <Col xs={24} lg={8}>
          <AppAnimate animation="transition.slideRightIn" delay={200}>
            <div key="checkoutRight">
              <StyledCheckoutOrderSummary>
                <OrderSummary cartItems={apiData1?.GetCarritoProductosDetalle1Checkout} />
              </StyledCheckoutOrderSummary>
              <PaymentInfo />
              {/* <StyledLinkBtn type="primary" style={{ marginTop: 16 }}>
                {/* <Link
                 //href="/ecommerce/confirmation"
                 onClick={saveData}
                 >CheckOut</Link> */}

               <Button
               onClick={saveData}
               type="primary" style={{ marginTop: 16 }}
               >
                CheckOut
               </Button>
              {/* </StyledLinkBtn> */}
            </div>
          </AppAnimate>
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Checkout;
