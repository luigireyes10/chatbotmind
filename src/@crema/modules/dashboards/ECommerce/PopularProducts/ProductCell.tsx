import React from "react";
import { Avatar, Image } from "antd";
import {
  StyledProductCell,
  StyledProductCellContent,
  StyledImg,
} from "./index.styled";
import type { PopularProductDataType } from "@crema/types/models/dashboards/Ecommerce";
import { useRouter } from "next/router";
import { CustomProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";

type ProductCellProps = {
  data: PopularProductDataType;
  item: CustomProductDataType;
  popularProducts: PopularProductDataType[];
  ProductBuscador: {
    GetProductos: Array<{
      __typename: string;
      ID_PRODUCTO: string;
      ID_CLASIFICACION: string | null;
      DESC_PRODUCTO: string | null;
      UNIDAD: string | null;
    }>;
  };
};

const ProductCell: React.FC<ProductCellProps> = ({
  item,
  data,
  popularProducts,
  ProductBuscador,
}) => {
  // Filtrar para encontrar el producto en ProductBuscador que coincida con el ID_PRODUCTO de data
  const productoEncontrado = ProductBuscador?.GetProductos.find(
    (producto) => producto.ID_PRODUCTO === data.ID_PRODUCTO
  );
  console.log(data);
  console.log(popularProducts);

  // Si no se encuentra el producto, no renderizar nada o manejar como se desee
  if (!productoEncontrado) return null;
  console.log(ProductBuscador);
  const router = useRouter();

  return (
    <>
      <StyledProductCell
        key={data.ID_PRODUCTO}
        className="item-hover"
        onClick={() => {
          router.push("/ecommerce/product_detail/" + item?.ID_PRODUCTO);
        }}
      >
        <StyledImg>
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + data?.DEFAULT_RUTA_DOC}
            alt={data.DESC_PRODUCTO}
            height={80}
            width={65}
          />
        </StyledImg>
        <StyledProductCellContent>
          {/* Usar DESC_PRODUCTO de productoEncontrado si está disponible, de lo contrario usar data.DESC_PRODUCTO */}
          <h1>{productoEncontrado.NOMBRE}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: productoEncontrado.DESC_PRODUCTO || data.DESC_PRODUCTO,
            }}
          />

          <p className="price">
            {data.PORC_DESCUENTO}% ${data.PRECIO_DESCUENTO}
            <span style={{ textDecoration: "line-through" }}>
              ${data.COSTO_RD}
            </span>
          </p>
        </StyledProductCellContent>
      </StyledProductCell>
    </>
  );
};

export default ProductCell;
