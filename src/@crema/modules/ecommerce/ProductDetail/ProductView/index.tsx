import React from "react";
import ProductSpecification from "./ProductSpecification";
import ProductInfo from "./ProductInfo";
import DeliveryInfo from "./DeliveryInfo";
import Reviews from "./Reviews";
import AvailableOffers from "./AvailableOffers";
import Image from "next/image";
import { Divider, Rate } from "antd";
import OpcionPopular from "/public/assets/images/logo/opcionPopular.svg"
import {
  StyledProductView,
  StyledProductViewTitle,
  StyledProductDetailPrice,


} from "./index.styled";
import type { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";
import { StyledFollowItemBtn } from "@crema/modules/apps/Wall/WhoToFollow/index.styled";

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

const calcPorcentofDiscount = (mrp: number, discount: number) => {
  const result = discount / mrp * 100
  return parseInt(result+"");
}

const ProductView = ({ product  }: Props) => {
  const discount = calcPorcentofDiscount(product.mrp, +product.discount);
  const price = SplitDecimal(product.mrp - +product.discount);
  console.log(product);
  return (
    <StyledProductView>
      <StyledProductViewTitle>
        <h1>
          {product.title || "No title found"}
        </h1>

        <div className="detailsProduct">
          {
            product.productSpec.map((spec, index) => {
              if(index >= 2) return; 
              else{
                return (
                  <p key={spec.id}>
                  {spec.title} : {spec.desc}
                  </p>
                )
              }
            })
          }
        </div>

    
        <Rate defaultValue={3} style={{color: "#0996f3"}} /> 

        <StyledFollowItemBtn>Seguir Vendedor</StyledFollowItemBtn>

       
          <div className="OpcionPopular-Container">
            <div className="OpcionPopular">
              
              <Image src={OpcionPopular} alt="Opcion Popular" />
              <p>Opción <span>Popular</span></p>
            </div>
            <p>para {` "${product.title}"`}</p>
          </div>
          {/* <p>8k Comprados el mes pasado</p> */}
      </StyledProductViewTitle>

      <Divider style={{ marginTop: 15, marginBottom: 15}} />
      <br />

          <StyledProductDetailPrice>
              <h2 className="discount ">- {discount}%</h2><h2>RD$ </h2> <span>{price.integer}</span> <h2>{price.decimal || '00'}</h2>
          </StyledProductDetailPrice>
      <p className="text-secondary mb-0 priceRecomended">
        Precio recomendado: <span className="line-through"> ${(+product.mrp).toFixed(2)} </span>
      </p>
      
      <h2 className="devolucion"> Aplica para devolucion <span>Gratis</span>  </h2>
      <p className="devolucion" style={{marginLeft: 5}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, </p>
        

      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <AvailableOffers />
      <DeliveryInfo />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      
      <ProductSpecification productSpec={product.productSpec || []} />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <ProductInfo productInfo={product.productInfo || []} />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <Reviews reviews={product} />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
    </StyledProductView>
  );
};

export default ProductView;
