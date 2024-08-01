import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  StyledInvoiceHeader,
  StyledInvoiceHeaderItem,
  StyledInvoiceHeaderRow,
  StyledInvoiceLogo,
} from "./index.styled";
import { invoiceData } from "@crema/mockapi/fakedb/extraPages";
import { v4 as uuidv4 } from 'uuid';
import { log } from "console";
import { useQuery } from "@apollo/client";
import { QUERY_EMPRESA } from "utils/Queries/Administrative";

interface Invoice {
  id: string;
  date: string;
  dueDate: string;
}


let lastInvoiceId = 0;

function createInvoice(): Invoice {
  const date = new Date();
  const dueDate = new Date();
  dueDate.setDate(date.getDate() + 30); 

  lastInvoiceId += 1; 

  return {
    id: lastInvoiceId.toString().padStart(10, '0'), 
    date: date.toLocaleDateString(),
    dueDate: dueDate.toLocaleDateString(), 
  };
}

const Header = () => {


  const { loading, data:data1, error, refetch } = useQuery(QUERY_EMPRESA, {
    variables: { condition: { ID_PRODUCTO: "1",
    ID_TIPO_TRANS: "FAT",
    ID_DOCUMENTO: "3",
    ID_EMPRESA: "1" } },
    fetchPolicy: "cache-first",
  });
  const DataFacEmpresa = data1?.GetEmpresa;

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;


  console.log("apiData", data1);
  console.log("data1", DataFacEmpresa);
  let EmpresaArray = [];

  if (Array.isArray(DataFacEmpresa)) {
    console.log("DataFacProduct is an array", DataFacEmpresa);
    
    DataFacEmpresa.forEach((product, index) => {
     
      EmpresaArray.push(product);
    });DataFacEmpresa
  } else {
    console.log("DataFacProduct is not an array");
  }


  const invoice = createInvoice();
  console.log(invoice);
  
const HeaderEm = {

    Empresa: {

        name: "Emedia",
        address: "La vega",
        city: "La vega",
        phone: "809-242-1234",
    },

    client: {
        name: "Juan Perez",
        phone: "809-242-1234",
        email: "juanperez28@gmaqil.com"
    }
};
const HeaderEmEmpresa = HeaderEm.Empresa;
const HeaderEmClient = HeaderEm.client;

  return (
    <StyledInvoiceHeader>
      <StyledInvoiceLogo>
        <img alt="logo" src={EmpresaArray[0].RUTA_FOTO_LOGO} />
      </StyledInvoiceLogo>

      <StyledInvoiceHeaderRow>
        <StyledInvoiceHeaderItem>
          <h3>{EmpresaArray[0].NOMBRE_EMPRESA}</h3>
          <p>Dirección: {HeaderEmEmpresa.address}</p>
          <p>Ciudad:    {EmpresaArray[0].ID_CIUDAD}</p>
          <p>Telefono:     {HeaderEmEmpresa.phone}</p>
        </StyledInvoiceHeaderItem>

        <StyledInvoiceHeaderItem>
          <h3>
            <IntlMessages id="Cliente" />
          </h3>
         <p>Nombre: {HeaderEmClient.name}</p>
          <p>Telefono: {HeaderEmClient.phone}</p>
          <p>Email: {HeaderEmClient.email}</p>
        </StyledInvoiceHeaderItem>

        <StyledInvoiceHeaderItem>
          <h3>
            <IntlMessages id="Factura" />
          </h3>
          <p>
            <IntlMessages id="invoice.id" />: {invoice.id}
          </p>
          <p>
            <IntlMessages id="Emitida" />: {invoice.date}
          </p>
          <p>
            <IntlMessages id="Devido a" />: {invoice.dueDate}
          </p>
        </StyledInvoiceHeaderItem>
      </StyledInvoiceHeaderRow>
    </StyledInvoiceHeader>
  );
};

export default Header;
