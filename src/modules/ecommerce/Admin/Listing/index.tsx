import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { FilterItem, ListingTable } from "@crema/modules/ecommerce/Admin";
import AppRowContainer from "@crema/components/AppRowContainer";
import AppCard from "@crema/components/AppCard";
import { Col, Input } from "antd";
import {
  StyledOrderFooterPagination,
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderPagination,
} from "../../Orders/index.styled";
import { StyledTitle5 } from "../index.styled";
import { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";
import { QUERY_ADD_PRODUCTOS } from "utils/Queries/Administrative";
import { useQuery } from "@apollo/client";

const ProductListing = () => {
  const { messages } = useIntl();
  const [filterData, setFilterData] = useState({
    title: "",
    inStock: true,
    mrp: { start: 0, end: 0 },
    createdAt: { startDate: null, endDate: null },
    ESTADO: "A",
  });

  const [filterParam, setFilterParam] = useState({
    title: "",
    inStock: true,
    mrp: { start: 0, end: 0 },
    createdAt: { startDate: null, endDate: null },
    ESTADO: "A",
  });
  // const [statedataProdMasPop, setstatedataProdMasPop] = useState();

  const [page, setPage] = useState(0);

  const [{ apiData, loading }, { setQueryParams }] = useGetDataApi<{
    list: ProductDataType[];
    total: number;
  }>(
    "/api/ecommerce/list",
    {
      list: [],
      total: 0,
    },
    {},
    false
  );

  const { total } = apiData;

  console.log(apiData);

  const onChange = (page: number) => {
    setPage(page);
  };

  const searchProduct = (title: string) => {
    setFilterData({ ...filterData, title });
  };

  // Crear el objeto de variables basado en filterParam
  const queryVariables = {
    condition: {
      ID_CLASIFICACION: [],
      VENTAS: [],
      NUMERACION_RATING: [],
      ID_PRODUCTO: [],
      ID_EMPRESA: "1",
      ESTADO: filterParam.ESTADO,
      // TITLE: filterParam.title, // Asumiendo que tu backend soporte este filtro
      MRP: {
        start: filterParam.mrp.start,
        end: filterParam.mrp.end,
      },
      CREATED_AT: {
        startDate: filterParam.createdAt.startDate,
        endDate: filterParam.createdAt.endDate,
      },
    },
  };

  console.log(queryVariables);



console.log(queryVariables)



  const {
    loading: loadingRODUCTO,
    error: errorRODUCTO,
    data: dataProdMasPop,
    refetch: refetchListProd,
  } = useQuery(QUERY_ADD_PRODUCTOS, {
    variables: {
      condition: {
        ID_EMPRESA: "1",
        ID_CLASIFICACION: [],
        VENTAS: [],
        NUMERACION_RATING: [],
        ID_PRODUCTO: [],
      },
      limit: 20,
    },
    fetchPolicy: "cache-first", // Use cache if available, otherwise, make a network request
  });

  useEffect(() => {
    //setQueryParams({ filterData, page: page > 0 ? page - 1 : 0 });
    refetchListProd && refetchListProd();

    // console.log(filterParam.ESTADO)
  }, [filterParam]);

  useEffect(() => {
    //setQueryParams({ filterData, page: page > 0 ? page - 1 : 0 });
    console.log(filterData);
    //setFilterParam({ESTADO: filterData?.ESTADO} as never)

    setFilterParam({ ...filterData });
  }, [filterData, page]);

  useEffect(() => {
    if (dataProdMasPop) {
      console.log(dataProdMasPop);
    }
  }, [dataProdMasPop]);

  return (
    <>
      <StyledTitle5>
        {messages["sidebar.ecommerceAdmin.productListing"] as string}
      </StyledTitle5>
      <AppRowContainer>
        <Col xs={24} lg={18}>
          <AppCard
            title={
              <AppsHeader>
                <StyledOrderHeader>
                  <StyledOrderHeaderInputView>
                    <Input
                      id="user-name"
                      placeholder="Buscar"
                      type="buscar"
                      onChange={(event) => searchProduct(event.target.value)}
                    />
                  </StyledOrderHeaderInputView>
                  <StyledOrderHeaderPagination
                    pageSize={10}
                    count={total}
                    page={page}
                    onChange={onChange}
                  />
                </StyledOrderHeader>
              </AppsHeader>
            }
          >
            <ListingTable
              productData={dataProdMasPop?.GetProductos || []}
              loading={loading}
            />
            <StyledOrderFooterPagination
              pageSize={10}
              count={total}
              page={page}
              onChange={onChange}
            />
          </AppCard>
        </Col>
        <Col xs={24} lg={6}>
          <FilterItem filterData={filterData} setFilterData={setFilterData} />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default ProductListing;
