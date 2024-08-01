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
  QUERY_ADD_PRODUCTOS,
  QUERY_CONSULTA_WISHLIST,
  QUERY_PRODUCTOS_CARRITO_COMPRAS

} from "utils/Queries/Administrative";
import { MUTATION_ADD_CARRITO_COMPRA } from "../../../utils/Mutations/Administrative";
import { useMutation, useQuery } from "@apollo/client";
import { cartItems } from "@crema/mockapi/fakedb";
import { showNotification } from "utils/general";

const WishList = () => {
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
    
  } = useQuery(QUERY_PRODUCTOS_CARRITO_COMPRAS, {
    variables: { condition: { ID_EMPRESA: "1", ID_USER: "1", ESTADO: "A" } },
    fetchPolicy: "cache-first",
  });

  const {
    loading: loading2,
    data: apiData2,
    error:error2 ,
    refetch,
  } = useQuery(QUERY_CONSULTA_WISHLIST, {
    variables: { condition: { ID_EMPRESA: "1", ID_USER: "1", ESTADO: "A" } },
    fetchPolicy: "cache-first",
  });

  const {
    loading: loadingRODUCTO,
    error: errorRODUCTO,
    data: datapRODUCTO,
  } = useQuery(QUERY_ADD_PRODUCTOS, {
    variables: {
      condition: {
        ID_EMPRESA: "1",
        ID_CLASIFICACION: [],
        VENTAS: [],
        NUMERACION_RATING: [],
        ID_PRODUCTO: [],
        ESTADO: "A",
        MRP: {
          start: 0,
          end: 0,
        },
        CREATED_AT: {
          startDate: null,
          endDate: null,
        },
      },
      limit: 20,
    },
    fetchPolicy: "cache-first",
  });

  let Addwishlist = []; 
  apiData2?.GetWishListProduct.map((item) => {
    Addwishlist.push(item); 
  });

   let AddProduct = []; 
   datapRODUCTO?.GetProductos.map((item) =>  {
    AddProduct.push(item); 
  });


  const relatedWishlist = AddProduct?.filter((producto) =>
    Addwishlist?.some((item) => item.ID_PRODUCTO === producto.ID_PRODUCTO)
  );
  
  console.log( apiData2);
   console.log(relatedWishlist); 
  

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


  const onRemoveItem = async (ProductId: number) => {
    console.log('Removing product with ID:', ProductId);
    
    try {
      const responsedata = await updateCartEstate({
        variables: {
          condition: {
            ID_USER: "1",
            ID_WISHL_PROD: "1",
            ID_PRODUCTO: ProductId,
            ESTADO: "I", // Suponiendo que "I" es el estado para inactivo o eliminado
          },
        },
      });
  
      if (responsedata) {
        showNotification({
          message: `Producto eliminado correctamente`,
          type: 'success',
        });
        refetch(); // Refrescar datos para actualizar la lista
        console.log('response', responsedata);
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
        <Col xs={24} sm={12} lg={23}>
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
                    Agregar al carrito
                  </Button>
                </StyledCartsFooter>,
              ]}
            >
              <CartTable
                relatedWishlist={relatedWishlist}
                cartItems={relatedWishlist}
                loading={loading}
                onRemoveItem={onRemoveItem}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counts={counts}
              />
            </AppCard>
          </AppAnimate>
        </Col>
        
      </AppRowContainer>
    </>
  );
};

export default WishList;
