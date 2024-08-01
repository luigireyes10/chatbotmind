import React from "react";
import { StyledInvoiceTruncateView } from "./index.styled";
import type { ColumnsType } from "antd/es/table";
import { FacturaProducto } from "@crema/types/models/ecommerce/EcommerceApp";



const InvoiceColumns: ColumnsType<FacturaProducto> = [


  {
    title: "Descripción",
    key: "item",
    // render: (rowData: FacturaProducto) => {
    //   console.log("rowData", rowData.ESTADO);
       
    //     return (
    //       <>
    //         <h6>{rowData?.itemTitle}</h6>
    //         {rowData?.ESTADO ? (
    //           <StyledInvoiceTruncateView>
    //             <span className="text-truncate">{rowData?.ESTADO}</span>
    //           </StyledInvoiceTruncateView>
    //         ) : null}
    //       </>
    //     );
    //  },
  },
  {
    title: "Tipo de Asignación",
    key: "item",
    render: (rowData: FacturaProducto) => {
      console.log("rowData", rowData.ESTADO);
       
        return (
          <>
            <h6>{rowData?.itemTitle}</h6>
            {rowData?.ESTADO ? (
              <StyledInvoiceTruncateView>
                <span className="text-truncate">{rowData?.ESTADO}</span>
              </StyledInvoiceTruncateView>
            ) : null}
          </>
        );
     },
  },
  {
    title: "Cantidad",
    key: "item",
    render: (rowData: FacturaProducto) => {
      console.log("rowData", rowData.ESTADO);
       
        return (
          <>
            <h6>{rowData?.itemTitle}</h6>
            {rowData?.ESTADO ? (
              <StyledInvoiceTruncateView>
                <span className="text-truncate">{rowData?.ESTADO}</span>
              </StyledInvoiceTruncateView>
            ) : null}
          </>
        );
     },
  },
  {
    title: "Precio",
    key: "item",
    render: (rowData: FacturaProducto) => {
      console.log("rowData", rowData.ESTADO);
       
        return (
          <>
            <h6>{rowData?.itemTitle}</h6>
            {rowData?.ESTADO ? (
              <StyledInvoiceTruncateView>
                <span className="text-truncate">{rowData?.ESTADO}</span>
              </StyledInvoiceTruncateView>
            ) : null}
          </>
        );
     },
  },
];

  

export default InvoiceColumns;
