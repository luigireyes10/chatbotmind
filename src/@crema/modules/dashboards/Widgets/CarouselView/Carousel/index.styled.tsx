import styled from 'styled-components';

export const StyledCarruselShort = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  padding: 20px 0;

  & ::before {
    overflow: hidden;
    content: none;
  }

  .slick-list {
    overflow: initial !important;
  }

  .slick-track {
    display: flex !important;
    align-items: center;
  }

  .slick-slide {
    flex: 0 0 auto !important;
    margin-right: 10px;
  }
`;

export const Arrow = styled.div`
  /* Estilos base de las flechas */
  position: absolute;
  cursor: pointer;
  z-index: 1;
  color: #000000;
  font-size: 24px;
  width: 50px;
  height: 120px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  
  display: flex !important;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
`;

// Estilos para la flecha de Next
export const NextArrow = styled(Arrow)`
  right: 10px;

  &:hover {
    color: #000000; 
  }
`;

// Estilos para la flecha de Prev
export const PrevArrow = styled(Arrow)`
  left: 10px;

  &:hover {
    color: #000000; 
  }
`;