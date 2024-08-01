import React, { useState, useEffect } from "react";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Button, Col, Modal } from "antd";
import {
  StyledConfirmationCard,
  StyledConfirmationItem,
  StyledConfirmationReward,
  StyledConfirmationRewardButton,
  StyledConfirmationRewardRow,
  StyledConfirmationRewardTitle,
  StyledComprar,
} from "./index.styled";
import type {
  AddressesType,
  CartItemsType,
  MetodoPagoType,
  
} from "@crema/types/models/ecommerce/EcommerceApp";
import ItemsList from "./ItemsList";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import {
  StyledPlusOutlined,
  StyledTodoSidebarHeader,
  
} from "modules/CustomComponents/CustomAddTask/AddNewTask/index.styled";
import AddNewTask from "modules/CustomComponents/CustomAddTask/AddNewTask";
import {
  QUERY_PRODUCTOS_CARRITO_COMPRAS,
  QUERY_CONSULTA_DIRECCIONES,
  QUERY_CONSULTA_CUENTA_PAGO,
} from "utils/Queries/Administrative";
import { useQuery, useMutation } from "@apollo/client";
import DeliveryAddress from "./DeliveryAddress/index";
import PaymentInfo from "./Pago/PaymentInfoConfirmation";
import {ConfirmarCompra} from "./index"


type Props = {
  address: AddressesType;

};

const AddressInfo = ({ address }: Props) => {
  const [{ apiData, loading }] = useGetDataApi<CartItemsType[]>(
    "/api/cart/get",
    [],
    {}
  );
  const [stateDireccion, setStateDireccion] = useState<AddressesType | null>(null);
  const [stateMetodoPago, setStateMetodoPago] = useState<MetodoPagoType | null>(null);
  const [cartItems, setCartItems] = useState<CartItemsType[] | any>([]);
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [isAddTaskOpen, setAddTaskOpen] = useState(false);


  const {
    loading: loading1,
    data: apiData1,
    error,
    refetch,
  } = useQuery(QUERY_PRODUCTOS_CARRITO_COMPRAS, {
    variables: { condition: { ID_EMPRESA: "1", ID_USER: "1", ESTADO: "A" } },
    fetchPolicy: "cache-first",
  });

  const {
    loading: loadingCheckout,
    error: errorCheckout,
    data: dataDireccion,
  } = useQuery(QUERY_CONSULTA_DIRECCIONES, {
    variables: { condition: { ID_EMPRESA: "1", ID_USER: "1" } },
    fetchPolicy: "cache-first",
  });

  const {
    loading: loadingCuentaPago,
    data: apiDataCuentaPago,
    error: errorCuentaPago,
  } = useQuery(QUERY_CONSULTA_CUENTA_PAGO, {
    variables: {
      condition: {
        ID_CUENTA: "CARD",
        NUM_CUENTA: "124578",
        TIPO_CUENTA: "CARD",
      },
    },
    fetchPolicy: "cache-first",
  });



  useEffect(() => {
    if (dataDireccion) {
      setStateDireccion(dataDireccion.GetEmDirecciones[0]); 
    }
  }, [dataDireccion]);

  useEffect(() => {
    if (apiDataCuentaPago) {
      setStateMetodoPago(apiDataCuentaPago.GetEmCuentaPago[0]); 
    }
  }, [apiDataCuentaPago]);

  useEffect(() => {
    if (apiData1) {
      setCartItems(apiData1.GetCarritoProductosDetalle1); 
    }
  }, [apiData1]);

  console.log("stateDireccion", apiData1);
  



  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  }

  const showPaymentModal = () => setIsPaymentModalVisible(true);
  const showAddressModal = () => setIsAddressModalVisible(true);

  const handlePaymentOk = () => setIsPaymentModalVisible(false);
  const handleAddressOk = () => setIsAddressModalVisible(false);

  const handlePaymentCancel = () => setIsPaymentModalVisible(false);
  const handleAddressCancel = () => setIsAddressModalVisible(false);

  const handlePaymentData = (data) => {
    setStateMetodoPago(data);
    setIsPaymentModalVisible(false); // Cerrar el modal solo si la operación de guardado es exitosa
  };


  // if (loading1) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  console.log("apiData", apiData);
  console.log("apiData1", cartItems);
  console.log("dataDireccion", dataDireccion?.GetEmDirecciones);
  console.log("apiDataCuentaPago", apiDataCuentaPago?.GetEmCuentaPago);
  

  cartItems.forEach(item => {
    console.log(item.total.mrp); // Imprime el precio total de cada artículo en el carrito
  });

  let totalPrice = cartItems.reduce((prev, curr) => {
    return prev + Number(curr.total.mrp);
  }, 0);
  console.log(totalPrice); 

  let cart = cartItems.map(item => item.product);
  console.log(cart);
  
  
  // Imprime un array con todos los precios
  return (
    <>
    <StyledComprar>
      <ConfirmarCompra
    stateDireccion={stateDireccion}
    stateMetodoPago={stateMetodoPago}
    cartItems={cartItems?.cartItems}
  />
  </StyledComprar>
    <StyledConfirmationCard>
      <AppRowContainer>
        <Col xs={24} lg={12}>
          <StyledConfirmationItem>
            <h2>Direccion de envio</h2>
            <h4>{stateDireccion?.name}</h4>
            <p>
              {stateDireccion?.ID_PAIS}, {stateDireccion?.ID_CIUDAD},{" "}
              {stateDireccion?.ID_SECTOR}, {stateDireccion?.ZIP_CODE}
            </p>
          </StyledConfirmationItem>

          <StyledConfirmationItem>
            <h3>Phone number</h3>
            {/* <p>{stateDireccion?.TELEFONO}</p> */}
          </StyledConfirmationItem>
        </Col>
        <Col xs={24} lg={12}>
          <StyledConfirmationItem>
            <h3>Your Rewards</h3>

            <StyledConfirmationReward className="confirmation-address-reward">
              <StyledConfirmationRewardRow>
                <img src={"/assets/images/ecommerce/sms-icon.png"} alt="sms" />
                <StyledConfirmationRewardTitle>
                  SMS updates at every step
                </StyledConfirmationRewardTitle>
              </StyledConfirmationRewardRow>
            </StyledConfirmationReward>

            <StyledConfirmationReward className="confirmation-address-reward">
              <StyledConfirmationRewardRow>
                <img
                  src={"/assets/images/ecommerce/add-person.png"}
                  alt="sms"
                />
                <StyledConfirmationRewardTitle>
                  Order shared with 1 Person
                </StyledConfirmationRewardTitle>
              </StyledConfirmationRewardRow>
              <StyledConfirmationRewardButton type="primary">
                Manage
              </StyledConfirmationRewardButton>
            </StyledConfirmationReward>
          </StyledConfirmationItem>
        </Col>
        <StyledTodoSidebarHeader>
          <Button
            ghost
            type="primary"
            icon={<StyledPlusOutlined style={{ marginRight: 8 }} />}
            onClick={showAddressModal}
          >
            Editar Direccion
          </Button>
          <Modal
            title="Editar Direccion"
            visible={isAddressModalVisible}
            onOk={handleAddressOk}
            onCancel={handleAddressCancel}
            footer={null}
          >
            <DeliveryAddress
              direccion={dataDireccion?.GetEmDirecciones}
              setSelectAddress={setStateDireccion}
            />
          </Modal>
        </StyledTodoSidebarHeader>
      </AppRowContainer>
      <hr />
       <AppRowContainer>
        <Col xs={24} lg={8}>
          <StyledConfirmationItem>
            <h2 style={{}}>Metodo de pago</h2>
          
            <p style={{ fontWeight: 'bold', }}>{stateMetodoPago?.ID_CUENTA}</p>
          </StyledConfirmationItem>
        </Col>
        <Col xs={10} lg={12}>
          <StyledConfirmationItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2 style={{ marginRight: "8px" }}>Pagando con </h2>
              <h2>{stateMetodoPago?.NOMBRE_CUENTA}</h2>
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4  style={{ marginRight: "8px", marginTop:"5px" }}>Direccion de la tarjeta:</h4>
              <p style={{ fontWeight: 'bold' }}>La misma que la de envio</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ marginRight: "8px", marginTop:"5px" }}>Número de Cuenta:</h4>
              <p style={{ fontWeight: 'bold' }}>{stateMetodoPago?.NUM_CUENTA}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ marginRight: "8px", marginTop:"5px" }}>Tipo de Cuenta:</h4>
              <p style={{ fontWeight: 'bold' }}>{stateMetodoPago?.TIPO_CUENTA}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ marginRight: "8px", marginTop:"5px" }}>Num CVV:</h4>
              <p style={{ fontWeight: 'bold' }}>{stateMetodoPago?.NUM_CVV}</p>
            </div>
          </StyledConfirmationItem>
        </Col>


         <StyledTodoSidebarHeader>
          <Button
            ghost
            type="primary"
            icon={<StyledPlusOutlined style={{ marginRight: 8 }} />}
            onClick={showPaymentModal}
          >
            Editar Metodo de pago
          </Button>
          <Modal
            title="Editar Metodo de pago"
            visible={isPaymentModalVisible}
            onCancel={handlePaymentCancel}
            footer={null}
          >
            <PaymentInfo onFinish={handlePaymentData} />
          </Modal>
        </StyledTodoSidebarHeader>
      </AppRowContainer>
      <hr />
      <AppRowContainer>
        <Col xs={24} lg={24}>
          <StyledConfirmationItem>
            <h2>Revisar los articulos y el envio</h2>
          </StyledConfirmationItem>
          <ItemsList cartItems={cart} totalPrice={totalPrice} />
        </Col> 





 </AppRowContainer> 
      {/* <Button
        type="primary"
        onClick={handleEnviarDatos}
      >
        Enviar Datos
      </Button> */}
      {isAddTaskOpen ? (
        <AddNewTask
          isAddTaskOpen={isAddTaskOpen}
          onCloseAddTask={onCloseAddTask}
        />
      ) : null}
    </StyledConfirmationCard>
    </>
  );
};

export default AddressInfo;
