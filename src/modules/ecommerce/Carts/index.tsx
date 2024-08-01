import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CartTable, OrderSummary } from "@crema/modules/ecommerce/Carts";
import AppCard from "@crema/components/AppCard";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Button, Col } from "antd";
import AppAnimate from "@crema/components/AppAnimate";
import AppPageMeta from "@crema/components/AppPageMeta";
import QueueAnim from "rc-queue-anim";
import { StyledCartsFooter } from "./index.styled";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import type { CartItemsType } from "@crema/types/models/ecommerce/EcommerceApp";
import { postDataApi, putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import {
  QUERY_PRODUCTOS_CARRITO_COMPRAS

} from "utils/Queries/Administrative";
import { MUTATION_ADD_CARRITO_COMPRA } from "../../../utils/Mutations/Administrative";
import { useMutation, useQuery } from "@apollo/client";
import { cartItems } from "@crema/mockapi/fakedb";
import { showNotification } from "utils/general";

const Carts = () => {
  const router = useRouter();
  const infoViewActionsContext = useInfoViewActionsContext();

  const [{ apiData, loading }, { setData: setTableData }] = useGetDataApi<
    CartItemsType[]
  >("/api/cart/get", [], {});

  const [updateCartEstate] = useMutation(MUTATION_ADD_CARRITO_COMPRA);


  const {
    loading: loading1,
    data: apiData1,
    error,
    refetch,
  } = useQuery(QUERY_PRODUCTOS_CARRITO_COMPRAS, {
    variables: { condition: { ID_EMPRESA: "1", ID_USER: "1", ESTADO: "A" } },
    fetchPolicy: "cache-first",
  });

  const Getproducts = apiData1?.GetCarritoProductosDetalle1 || [];

  const [counts, setCounts] = useState<Record<number, number>>({});

  useEffect(() => {
    setCounts(
      Getproducts.reduce(
        (acc, product) => ({ ...acc, [product.id]: product.count }),
        {}
      )
    );
  }, [Getproducts]);

  if (loading1) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("apiData", apiData);
  console.log("apiData1", apiData1?.GetCarritoProductosDetalle1);
  console.log(counts);

  const onRemoveItem = async (ProductId: number) => {

    console.log('productId', ProductId);
    
    try {
      
       
      const responsedata =  await updateCartEstate({
        variables: {
          condition: {
            ID_USER: "1",
            ID_CARRITO_COMP: "CPROD",
            ID_PRODUCTO: ProductId,
            ESTADO: "I",
          },
        },
      });

      if (responsedata) {
        showNotification({
          message: `Caja Cerrada Correctamente`,
          type: 'success',
        })

        refetch()

        console.log('response', responsedata)

      //  console.log('product.title', product.title)

      //  infoViewActionsContext.showMessage( `${product.title} added to cart successfully` );
        //refetch && refetch()
       
      }
    } catch (error) {
      console.error("Error updating cart state:", error);
    }
  };

  const onIncrement = (ProductId: number) => {
    console.log("id", ProductId);

    setCounts((prevCounts) => ({
      ...prevCounts,
      [ProductId]: (prevCounts[ProductId] || 1) + 1,
    }));
  };

  const onDecrement = (ProductId: number) => {
    console.log("id", ProductId);

    setCounts((prevCounts) => ({
      ...prevCounts,
      [ProductId]: prevCounts[ProductId] > 1 ? prevCounts[ProductId] - 1 : 1,
    }));
  };

  return (
    <>
      <AppPageMeta title="Carts" />

      <AppRowContainer>
        <Col xs={24} lg={16}>
          <AppAnimate animation="transition.slideLeftIn" delay={200}>
            <AppCard
              key="a"
              className="no-card-space-ltr-rtl"
              actions={[
                <StyledCartsFooter key={1}>
                  <Button
                    //type="primary"
                    style={{
                      borderRadius: "0px",
                      backgroundColor: "#001529",
                      color: "white",
                    }}
                    onClick={() => {
                      router.push("/ecommerce/products");
                    }}
                  >
                    Continuar Comprando
                  </Button>
                  <Button
                    // className="btn-secondary"
                    style={{
                      borderRadius: "0px",
                      backgroundColor: "#ff8e16",
                      color: "white",
                    }}
                    onClick={() => {
                      router.push("/ecommerce/checkout");
                    }}
                  >
                    Comfirmar Compra
                  </Button>
                </StyledCartsFooter>,
              ]}
            >
              <CartTable
                cartItems={apiData1?.GetCarritoProductosDetalle1}
                loading={loading}
                onRemoveItem={onRemoveItem}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counts={counts}
              />
            </AppCard>
          </AppAnimate>
        </Col>
        <Col xs={24} lg={8}>
          <AppAnimate animation="transition.slideRightIn" delay={200}>
            <OrderSummary cartItems={apiData} key="b" />{" "}
          </AppAnimate>
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Carts;
