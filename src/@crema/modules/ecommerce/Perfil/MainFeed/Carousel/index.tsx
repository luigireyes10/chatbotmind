import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledCarrusel, StyledCarruselShort } from "./index.styled";

const CustomPrevArrow = (props) => (
  <div
    className={props.className}
    style={{ ...props.style, display: "block", color: "black", backgroundColor: "black", WebkitBorderRadius: "20px"}}
    onClick={props.onClick}
  >
  </div>
);

const CustomNextArrow = (props) => (
  <div
    className={props.className}
    style={{ ...props.style, display: "block", color: "black", backgroundColor: "black", WebkitBorderRadius: "20px"}}
    onClick={props.onClick}
  >
  </div>
);

const Thumbnail = ({ image, onClick }) => (
  <div onClick={onClick} style={{ cursor: "pointer" }}>
    <img
      src={image}
      alt="Thumbnail"
      style={{ width: "100%", height: "150px", objectFit: "cover", padding: "5px", borderRadius: "15px"}}
    />
  </div>
);

const Carousel = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const thumbnailSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleThumbnailClick = (index) => {
    // Mostrar img al hacer click en la miniatura
  };

  return (
    <StyledCarrusel>
      {}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="image"
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "400px"}}
            />
          </div>
        ))}
      </Slider>
      {}
      <StyledCarruselShort>
        <Slider {...thumbnailSettings}>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              image={image}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </Slider>
      </StyledCarruselShort>
    </StyledCarrusel>
  );
};

export default Carousel;
