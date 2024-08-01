import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import Carousel from './Carousel/index';
import { StyledProductGridC, StyledProductGridCard } from "modules/CustomComponents/CustomGridItem/index.styled";
import router from "next/router";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Col } from "antd";

type props ={
  ProductSimilares: any;
}
const MainFeed = ({ProductSimilares}: props) => {

// console.log(ProductSimilares);


  return (
    <StyledProductGridC
    
      className="item-hover"
      onClick={() => {
        router.push("/ecommerce/product_detail/");
      }}
    >
      
      <>

        <Carousel ProductSimilares={ProductSimilares} />
      </>
      </StyledProductGridC>     

  );
};

export default MainFeed;