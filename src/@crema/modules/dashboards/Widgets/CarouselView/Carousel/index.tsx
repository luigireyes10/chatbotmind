import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledCarruselShort, Arrow, PrevArrow, NextArrow } from "./index.styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

type props ={
  ProductSimilares: any;

}
const Thumbnail = ({ image, onClick }) => (
  <div onClick={onClick} style={{ cursor: "pointer",  }}>
    <img
      src={image}
      alt="Thumbnail"
      style={{ height: "250px" }}
    />
  </div>
);



const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // nextArrow: <NextArrow onClick={Slider} />,
  // prevArrow: <PrevArrow onClick={Slider} />,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  const CarouselView = ({ ProductSimilares }) => {
    const handleThumbnailClick = (index) => {
      // Mostrar imagen al hacer clic en la miniatura
    };
  
  return (
   <StyledCarruselShort>
    
      <Slider {...{...settings}}>
        {ProductSimilares?.GetProductosMorePopular?.map((ProductSimilares, index) => (
          <Thumbnail
            key={index}
            image={process.env.NEXT_PUBLIC_API_URL + ProductSimilares?.DEFAULT_RUTA_DOC}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </Slider>
    </StyledCarruselShort>
    
  );
};

export default CarouselView;
