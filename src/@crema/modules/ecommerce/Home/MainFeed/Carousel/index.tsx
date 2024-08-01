import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledCarrusel,
  CustomPrevArrow,
  CustomNextArrow,
  StyledHeader,
} from "./index.styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Header from "./contentCarousel"

const Carousel = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    
    slidesToScroll: 1,
    prevArrow: (
      <CustomPrevArrow>
        <LeftOutlined />
      </CustomPrevArrow>
    ),
    nextArrow: (
      <CustomNextArrow>
        <RightOutlined />
      </CustomNextArrow>
    ),
  };

console.log(images)
    return (
      <div style={{ width: "100%", position: "absolute" }}> 
      <StyledCarrusel>
        <StyledHeader>
          <Header />
        </StyledHeader>
       
        <Slider {...settings}>
          {images.map((image, index) => (
              <div key={index} style={{ position: "absolute" }}>
              <img
                className="image"
                src={image}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  height: "700px",
                  objectFit: "cover",
                }}
              />
              <div
                className="content"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  height: "300px",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 0), #F4F7FE)",
                }}
    
              ></div>
              <CustomPrevArrow className="slick-prev">
                <LeftOutlined />
              </CustomPrevArrow>
              <CustomNextArrow className="slick-next">
                <RightOutlined />
              </CustomNextArrow>
            </div>
          ))}
        </Slider>
      </StyledCarrusel>
   </div>
    );
  }
export default Carousel;
