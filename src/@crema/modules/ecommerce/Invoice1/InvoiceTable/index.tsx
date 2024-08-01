import React from "react";

import InvoiceColumns from "./InvoiceColumns";
import { invoiceData } from "@crema/mockapi/fakedb/extraPages";
import { StyledInvoiceTable } from "./index.styled";
import { QUERY_FACTURA_PRODUCTOS } from "utils/Queries/Administrative";
import { useQuery } from "@apollo/client";


const InvoiceTable = () => {

  

  const { loading, data:data1, error, refetch } = useQuery(QUERY_FACTURA_PRODUCTOS, {
    variables: { condition: { ID_PRODUCTO: "1",
    ID_TIPO_TRANS: "FAT",
    ID_DOCUMENTO: "3",
    ID_EMPRESA: "1" } },
    fetchPolicy: "cache-first",
  });

  
const DataFacProduct = data1?.GetEmFacturaProductos;
console.log("DataFacProduct", DataFacProduct);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("apiData", data1);
  console.log("data1", data1.GetEmFacturaProductos);
  

  let ProductArray = [];

  if (Array.isArray(DataFacProduct)) {
    console.log("DataFacProduct is an array", DataFacProduct);
    
    DataFacProduct.forEach((product, index) => {
     
      ProductArray.push(product);
    });DataFacProduct
  } else {
    console.log("DataFacProduct is not an array");
  }
  

  console.log(ProductArray[0].ESTADO);
  
  return (
   <>
      {loading && "Loading..."}
      {error && `Error! ${error.message}`}
      {!loading && !error && DataFacProduct && <StyledInvoiceTable data={DataFacProduct} columns={InvoiceColumns} />}
    </>
  );
};

export default InvoiceTable;
