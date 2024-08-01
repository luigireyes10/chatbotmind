import React, { useEffect, useState } from "react";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import AppsContent from "@crema/components/AppsContainer/AppsContent";
import {
  StyledProductListMainContent,
  StyledProductListView,
  StyledProductRow,
} from "./index.styled";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import { VIEW_TYPE } from "../index";
import {
  ProductGrid,
  ProductHeader,
  ProductList,
} from "@crema/modules/ecommerce/Products";
import type {
  ProductDataFilterType,
  ProductDataType,
} from "@crema/types/models/ecommerce/EcommerceApp";
import { AcademyType } from "@crema/types/models/dashboards/AcademyType";
import { CourseCategories } from "@crema/modules/dashboards/Academy";
import { Col } from "antd";
import { StyledProductHeader } from "@crema/modules/ecommerce/Products/ProductHeader/index.styled";
import { WallPaper } from "@crema/modules/dashboards/Widgets";
import { useQuery } from "@apollo/client";
import {
  QUERY_ADD_PRODUCTOS,
  QUERY_GET_OFERTA_PRODUCTOS,
  QUERY_PRODCUTOS_DETALLES,
  QUERY_PRODUCTO_CLASIFICACION,
  QUERY_TOTAL_OFERTAS_DETALLE,
} from "utils/Queries/Administrative";
import { datallete } from "utils/data";
type Props = {
  filterData: ProductDataFilterType;
  viewType: string;
  setViewType: (viewType: string) => void;
  setFilterData: (filterData: ProductDataFilterType) => void;
};

const ProductListing = ({
  filterData,
  viewType,
  setViewType,
  setFilterData,
}: Props) => {
  const [page, setPage] = useState(0);
  const [{ apiData: ecommerceList, loading }, { setQueryParams }] =
    useGetDataApi<{ list: ProductDataType[]; total: number }>(
      "/api/ecommerce/list",
      { list: [] as ProductDataType[], total: 0 },
      {},
      false
    );

  console.log(ecommerceList);

  const categoryId = filterData?.category;
  const priceP = filterData.price;
  const rating = filterData.rating;
  const cadenas = rating.map(String);
  const discount = filterData.discount;

  console.log(priceP);

  console.log(categoryId);
  console.log(cadenas);
  const {
    loading: loadingProdDetalle,
    error: errorProdDetalle,
    data: dataProdDetalle,
  } = useQuery(QUERY_PRODCUTOS_DETALLES, {
    variables: { condition: { ID_EMPRESA: "1" }, limit: 20 },
    fetchPolicy: "cache-first", // Usa caché si está disponible, sino, hace solicitud de red
  });

  const {
    loading: loadingdataProduct,
    error: errordataProduct,
    data: dataProduct,
  } = useQuery(QUERY_ADD_PRODUCTOS, {
    variables: {
      condition: {
        ID_EMPRESA: "1",
        ESTADO: "A",
        ID_CLASIFICACION: categoryId ? categoryId : null,
        VENTAS: priceP ? priceP : null,
        NUMERACION_RATING: cadenas ? cadenas : null,
        ID_PRODUCTO: discount ? discount : null,
        MRP: {
          start: 0,
          end: 0,
        },
        CREATED_AT: {
          startDate: null,
          endDate: null,
        },
      },
      limit: 20,
    },
    fetchPolicy: "cache-first", // Usa caché si está disponible, sino, hace solicitud de red
  });

  const { loading: loadingOfertas, data: dataOfertas } = useQuery(
    QUERY_TOTAL_OFERTAS_DETALLE,
    {
      variables: {
        condition: { ESTADO: "A", ID_EMPRESA: "1" },
        //  , limit: 5
      },
      //fetchPolicy: 'cache-first',
    }
  );

  console.log(dataOfertas);
  const ProductOfertas = dataOfertas?.GetOfertasTotalProductosDetalle;
  const dataProductAdd = dataProduct?.GetProductos;
  console.log("ecommerceList", dataProductAdd);
  console.log(ecommerceList);

  console.log(dataProdDetalle?.GetProductosDetalle.products);

  console.log(dataProduct);

  const dataproducto = datallete; // dataProdDetalle?.GetProductosDetalle?.products
  const searchProduct = (title: string) => {
    const filteredProducts = dataProductAdd?.filter((product) =>
      product.title.includes(title)
    );
    setFilterData(filteredProducts || []); // Asegúrate de que 'filteredProducts' no sea undefined
  };

  const onPageChange = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setQueryParams({ filterData, page });
  }, [filterData, page]);

  console.log(filterData);

  console.log(filterData.category);

  /* if (loadingProdDetalle ) return 'Loading...';
  if (errorProdDetalle) return `Error! ${errorProdDetalle.message}`; */

  return (
    <StyledProductListView>
      <AppsContent>
        <StyledProductHeader>
          <h5>Resultados</h5>
          <p>
            El precio y otros detalles pueden variar según el tamaño y el color
            del producto.
          </p>
        </StyledProductHeader>
        <StyledProductListMainContent>
          {/* <StyledProductRow style={{gridTemplateColumns: '1fr 1fr'}}>
           <WallPaper />
           <WallPaper />
          </StyledProductRow> */}

          {/* <StyledProductRow>
            {academyData?.courseCategories?.map((data, index) => (
                  <CourseCategories key={index} course={data} />
              ))}
          </StyledProductRow> */}

          {viewType === VIEW_TYPE.GRID ? (
            <ProductGrid
              ecommerceList={dataProductAdd}
              dataProductAdd={dataProductAdd}
              loading={loading}
              ProductOfertas={ProductOfertas}
            />
          ) : (
            <ProductList ecommerceList={dataProductAdd} loading={loading} />
          )}
        </StyledProductListMainContent>
      </AppsContent>
    </StyledProductListView>
  );
};

export default ProductListing;
