import React from "react";
import OrderActions from "./OrderActions";
import { Typography } from "antd";
import { StyledListingStatus } from "../index.styled";
import { StyledOrderTable } from "../../Orders/index.styled";
import { ellipsisLines } from "@crema/helpers/StringHelper";
import { NextRouter, useRouter } from "next/router";
import { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";
import type { ColumnsType } from "antd/es/table";

const getPaymentStatusColor = (ESTADO: boolean) => {
  switch (ESTADO) {
    case true: {
      return "#43C888";
    }
    case false: {
      return "#F84E4E";
    }
  }
};

const getColumns = (router: NextRouter): ColumnsType<ProductDataType> => [
  {
    title: "Nombre del producto",
    dataIndex: "ID_PRODUCTO",
    key: "ID_PRODUCTO",
    render: (ID_PRODUCTO, record) => (
      console.log(record),
      
      <Typography.Link
        onClick={() => router.push(`/ecommerce/product_detail/${ID_PRODUCTO}`)}
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          style={{
            width: "40px",
            height: "40px",
            objectFit: "contain",
            marginRight: 10,
          }}
          src={process.env.NEXT_PUBLIC_API_URL + record?.EM_DOC_IMAGE?.[0]?.RUTA_DOCUMENTO}
          alt="crema-logo"
        />
        {ellipsisLines(record.NOMBRE)}  
      </Typography.Link>
    ),
  },
  {
    title: "Producto SKU",
    dataIndex: "ID_PRODUCTO",
    key: "ID_PRODUCTO",
  },
  {
    title: "Creado en",
    dataIndex: "FECHA_INSERCION",
    key: "FECHA_INSERCION",
  },
  {
    title: "Estado",
    dataIndex: "ESTADO",
    key: "ESTADO",
    render: (ESTADO, record) => (
      <StyledListingStatus
        style={{
          color: getPaymentStatusColor(record?.ESTADO),
          backgroundColor: getPaymentStatusColor(record?.ESTADO) + "44",
        }}
      >
        {record?.ESTADO}
      </StyledListingStatus>
    ),
  },
  {
    title: "Precio",
    dataIndex: "VENTAS",
    key: "VENTAS",
    render: (price) => <span>${price}</span>,
  },
  {
    title: "Acciones",
    dataIndex: "actions",
    key: "actions",
    className: "order-table-action",
    fixed: "right",
    render: (text, record) => <OrderActions id={record.id} />,
  },
];

type Props = {
  productData: any[];
  loading: boolean;
};

const ProductTable = ({ productData, loading }: Props) => {

  console.log(productData);

  
  const router = useRouter();
 //const listproduct = dataProdMasPop?.GetProductos


  return (
    <StyledOrderTable
      hoverColor
      data={productData}
      loading={loading}
      columns={getColumns(router)}
      scroll={{ x: "auto" }}
    />
  );
};

export default ProductTable;
