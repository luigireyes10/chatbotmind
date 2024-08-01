import styled from "styled-components";

export const StyledCarrito = styled.div`

  .carrito-card {
    margin-left: -200px;
    width: 200px;
    border-radius: 0;
    border: 0;
  }

  .producto {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    img {
      width: 150px;
      height: 200px;
      margin-right: 12px;
      object-fit: cover;
      border: 1px solid #3F3F3F;
      border-radius: 10px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    }

    .producto-info {
      display: flex;
      align-items: center;

      .ant-input-number {
        margin-top: -2px;
      }
    }
  }

  .divider-full-width {
    width: 100%;
  }

  .spaceBetween {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 1024px) {
    .carrito-card {
      width: 200px !important;
    }
  }

  @media screen and (max-width: 1366px) {
    .carrito-card {
      margin-left: -173px !important;
    }
  }

  @media screen and (max-width: 1920px) {
    .carrito-card {
      margin-left: -260px;
      width: 280px;
    }

    .producto {
      img {
        width: 250px !important;
      }
    }
  }
`;
