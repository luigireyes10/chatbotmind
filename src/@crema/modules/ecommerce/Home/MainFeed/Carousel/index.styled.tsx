import styled from "styled-components";

export const StyledCarrusel = styled.div`
  width: 93.1%;
  padding: 0;
  margin: 0 auto;
  border: none;
  position: absolute;
  overflow: hidden;
  top: 0;

  .image {
    width: 100%;
    height: auto;
    max-height: 60%;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }
`;

export const StyledHeader = styled.div`
position: absolute;
height: 58%;
width: 100%;





`

export const CustomPrevArrow = styled.div`
  position: absolute;
  display: flex !important;
  align-items: center;
  justify-content: center;
  color: black;
  width: 60px;
  height: 57%;
  background-color: transparent;
  top: 203px;
  left: 0;
  padding: 20px;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 999;

  & span,
  svg {
    width: 50px;
    height: 50px;
    color: #000;
  }
  &::before {
    overflow: hidden;
    content: none;
  }

  &:active {
    border: 5px solid #022f3c;
    border-block: 5px solid #fff;
    color: white;
  }
`;

export const CustomNextArrow = styled.div`
  position: absolute;
  display: flex !important;
  align-items: center;
  justify-content: center;
  color: black;
  width: 60px;
  height: 57%;
  top: 203px;
  padding: 20px;
  background-color: transparent;
  right: 0;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 999;
  & span,
  svg {
    width: 50px;
    height: 50px;
    color: #000;
  }

  &::before {
    overflow: hidden;
    content: none;
  }

  &:active {
    border: 5px solid #022f3c;
    border-block: 5px solid #fff;
    color: white;
  }
`;
