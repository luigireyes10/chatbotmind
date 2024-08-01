import React, { useState, useEffect } from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useRouter } from "next/router";
import {
  HeartFilled,
  HeartOutlined,
  SaveFilled,
  SearchOutlined,
  StarOutlined,
} from "@ant-design/icons";
import {
  StyledProductGridAction,
  StyledProductGridActionItem,
  StyledProductGridCard,
  StyledProductGridCardHeader,
  StyledProductGridCardHeaderBadge,
  StyledProductGridCardHeaderThumb,
  StyledProductGridCardPara,
  StyledProductGridCardTitle,
  StyledProductListFavorCheck,
  StyledProductListSearchCheck,
} from "./index.styled";
import type { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";
import { datallete } from "utils/data";
import { Space } from "antd";
import Item from "antd/es/list/Item";
import { useMutation } from "@apollo/client";
import { MUTATION_ADD_WISHLIST_PROD } from "utils/Mutations/Administrative";

type Props = {
  item: ProductDataType;
  ProductOfertas: any;
};

const GridItem = (props: Props) => {
  const { item, ProductOfertas } = props;

  const [filterData, setFilterData] = useState({
    favorite: [],
  });

  console.log(item);
  const productoEncontrado = ProductOfertas?.find(
    (producto) => producto.ID_PRODUCTO === item.ID_PRODUCTO
  );

  const [isFavorite, setIsFavorite] = useState(item.FAVORITE === 'S'); 
  const router = useRouter();
  const [addwishlist] = useMutation(MUTATION_ADD_WISHLIST_PROD);
  
  useEffect(() => {
    setIsFavorite(item.FAVORITE === 'S'); 
  }, [item.FAVORITE]);


  let favorite 
  if(isFavorite === true){
    favorite = 'I'
  }else{
    favorite = 'A'
  }

  const OnFavorite = async () => {
    setIsFavorite(!isFavorite);

    const condition = {
      ID_USER: "1",
      ID_PRODUCTO: item.ID_PRODUCTO, 
      ESTADO: favorite,
      ID_EMPRESA: "1",
      ID_WISHL_PROD: "1",
    };


    try {
      const responsedata = await addwishlist({
        variables: {
          condition, 
        },
      });

      if (responsedata) {
        console.log("response", responsedata);
      }
    } catch (error) {
      console.error("Error updating cart state:", error);
    }
  };


  return (
    <StyledProductGridCard className="item-hover">

      <StyledProductListFavorCheck onClick={OnFavorite}>
        {isFavorite  ? <HeartFilled /> : <HeartOutlined />}
      </StyledProductListFavorCheck>

      <StyledProductListSearchCheck onClick={OnFavorite}>
        <SearchOutlined />
      </StyledProductListSearchCheck>

      <StyledProductGridCardHeader>
        <StyledProductGridCardHeaderThumb
          onClick={() => {
            router.push("/ecommerce/product_detail/" + item.ID_PRODUCTO);
          }}
          backgroundImage={
            process.env.NEXT_PUBLIC_API_URL + item?.ICONO_PRODUCTO
          }
        >
          <img
            src={process.env.NEXT_PUBLIC_API_URL + item?.DEFAULT_RUTA_DOC}
            alt="watch"
          />
        </StyledProductGridCardHeaderThumb>
      </StyledProductGridCardHeader>

      <StyledProductGridCardTitle className="text-truncate">
        {item.NOMBRE}
      </StyledProductGridCardTitle>

      <StyledProductGridCardHeaderBadge>
        <StyledProductGridCardPara className="text-truncate">
          {/* {item.rating} */}

          <p dangerouslySetInnerHTML={{ __html: item.DESC_PRODUCTO }} />
        </StyledProductGridCardPara>
      </StyledProductGridCardHeaderBadge>

      <StyledProductGridAction>
        <StyledProductGridActionItem
          className={productoEncontrado?.PORC_DESCUENTO > 0 ? "cut" : ""}
        >
          ${item.VENTAS}
        </StyledProductGridActionItem>
        {productoEncontrado?.PORC_DESCUENTO > 0 && (
          <>
            <StyledProductGridActionItem>
              ${" "}
              {+item.VENTAS -
                Math.round(
                  (+item.VENTAS * +productoEncontrado?.PORC_DESCUENTO) / 100
                )}
            </StyledProductGridActionItem>
            <StyledProductGridActionItem className="green">
              {productoEncontrado?.PORC_DESCUENTO}%{" "}
              <IntlMessages id="ecommerce.off" />
            </StyledProductGridActionItem>
          </>
        )}
      </StyledProductGridAction>
    </StyledProductGridCard>
  );
};

export default GridItem;
