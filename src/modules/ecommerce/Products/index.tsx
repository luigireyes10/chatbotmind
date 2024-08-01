import React, { useEffect, useMemo, useState } from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import ProductListing from "./ProductListing";
import { useIntl } from "react-intl";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import AppsContainer from "@crema/components/AppsContainer";
import { StyledAppProducts } from "./index.styled";
import AppPageMeta from "@crema/components/AppPageMeta";
import { ProductsSidebar } from "@crema/modules/ecommerce/Products";
import { ProductDataFilterType } from "@crema/types/models/ecommerce/EcommerceApp";
import InfiniteScroll from "react-infinite-scroll-component";
import { StyledLoading } from "@crema/modules/ecommerce/Perfil/Feed/index.styled";
import {
  QUERY_ADD_PRODUCTOS,
  QUERY_PRODUCTO_CLASIFICACION,
  QUERY_SUB_CLASIFICACION,
  QUERY_SUB_CLASIF_DATA,
  QUERY_TOTAL_OFERTAS_DETALLE,
} from "utils/Queries/Administrative";
import { useQuery } from "@apollo/client";
import { log } from "console";
export const VIEW_TYPE = {
  GRID: "grid",
  LIST: "list",
};

const Products = () => {
  const { messages } = useIntl();
  const [filterData, setFilterData] = React.useState<ProductDataFilterType>({
    title: "",
    brand: [],
    ideaFor: [],
    discount: [],
    color: [],
    rating: [],
    category: [],
    price: [],
  });
  const [{ apiData: postList }, { setData: setPostList }] = useGetDataApi(
    "/wall/posts",
    []
  );

  const {
    loading: loadingProdClasificacion,
    error: errorClasificacion,
    data: dataClasificacion,
  } = useQuery(QUERY_PRODUCTO_CLASIFICACION, {
    variables: { condition: { ID_EMPRESA: "1" }, limit: 20 },
    fetchPolicy: "cache-first", // Use cache if available, otherwise, make a network request
  });

  const {
    loading: loadingRODUCTO,
    error: errorRODUCTO,
    data: datapRODUCTO,
  } = useQuery(QUERY_ADD_PRODUCTOS, {
    variables: {
      condition: {
        ID_EMPRESA: "1",
        ID_CLASIFICACION: [],
        VENTAS: [],
        NUMERACION_RATING: [],
        ID_PRODUCTO: [],
        ESTADO: "A",
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
    fetchPolicy: "cache-first", // Use cache if available, otherwise, make a network request
  });

  console.log(datapRODUCTO);
  
console.log(datapRODUCTO?.GetProductos.map((favorite)=> favorite.FAVORITE));

  const {
    loading: loadingdataSubClasifData,
    error: errordataSubClasifData,
    data: dataSubClasifData,
  } = useQuery(QUERY_SUB_CLASIF_DATA, {
    variables: {
      condition: { ID_EMPRESA: "1" },
    },
    fetchPolicy: "cache-first", // Use cache if available, otherwise, make a network request
  });

  const {
    loading: loadingTotalOfertas,
    error: errorTotalOfertas,
    data: dataTotalOfertas,
  } = useQuery(QUERY_TOTAL_OFERTAS_DETALLE, {
    variables: {
      condition: { ID_EMPRESA: "1" },
    },
    fetchPolicy: "cache-first", // Use cache if available, otherwise, make a network request
  });

  const {
    loading: loadingdataSubClasif,
    error: errordataSubClasif,
    data: dataSubClasif,
  } = useQuery(QUERY_SUB_CLASIFICACION, {
    variables: {
      condition: { ID_EMPRESA: "1" },
    },
    fetchPolicy: "cache-first", // Use cache if available, otherwise, make a network request
  });

  const dataOfertDetalle = dataTotalOfertas?.GetOfertasTotalProductosDetalle;

  useEffect(() => {
    if (dataSubClasif) {
      console.log(dataSubClasif?.length);
    }
  }, [dataSubClasif]);

  const DataSubClasifData = dataSubClasifData?.GetEmSubClasifData;
  const DataPro = datapRODUCTO;
  const DataClasifSub = dataSubClasif?.GetEmSubClasificacion;
  const DataClasif = dataClasificacion?.GetEmProductoClasificacionTotal;

  console.log(datapRODUCTO);
  const fetchMoreData = () => {
    // fetch future more data here and update postList
  };

  const [hasMore, setHasMore] = useState(true);

  const [viewType, setViewType] = React.useState(VIEW_TYPE.GRID);
  const [selectedClasifForSubC, setSelectedClasifForSubC] = useState();

  // const dataEncontrada = DataClasifSub?.find((producto) =>
  //   filterData?.ideaFor?.includes(producto.ID_SUB_CLASIF_DATA.toString())
  // )?.ID_CLASIFICACION;

  // console.log(dataEncontrada);

  // console.log(dataEncontrada);
  //const newValues = dataEncontrada;

  //console.log(newValues);
  const [selectedNewValues, setSelectedNewValues] = useState<string[]>([]);

  // useEffect(() => {
  //   if (filterData?.category?.length > 0 && DataClasifSub?.length > 0) {
  //     const selectedCategories = filterData.category;

  //     const relatedSubcategories = DataClasifSub.filter((producto) =>
  //       selectedCategories.includes(producto.ID_CLASIFICACION.toString())
  //     );

  //     const relatedSubcategoryIds = relatedSubcategories.map((producto) =>
  //       producto.ID_SUB_CLASIF_DATA.toString()
  //     );

  //     const updatedSubcategoryIds = new Set([
  //       ...filterData.ideaFor,
  //       ...relatedSubcategoryIds,
  //     ]);

  //     setFilterData((prevState) => ({
  //       ...prevState,
  //       ideaFor: [...updatedSubcategoryIds],
  //     }));
  //   }
  // }, [filterData.category, DataClasifSub]);

  // useEffect(() => {
  //   if (filterData?.ideaFor?.length > 0 && DataClasifSub?.length > 0) {
  //     const relatedSubcategories = DataClasifSub.filter((producto) =>
  //       filterData.ideaFor.includes(producto.ID_SUB_CLASIF_DATA.toString())
  //     );

  //     const relatedCategories = relatedSubcategories.map(
  //       (producto) => producto.ID_CLASIFICACION
  //     );

  //     const updatedCategories = new Set([
  //       ...(filterData.category || []),
  //       ...relatedCategories.map((category) => category.toString()),
  //     ]);

  //     setFilterData((prevState) => ({
  //       ...prevState,
  //       category: [...updatedCategories],
  //     }));
  //   } else if (filterData?.ideaFor?.length === 0) {
  //     setFilterData((prevState) => ({
  //       ...prevState,
  //       category: prevState.category || [],
  //     }));
  //   }
  // }, [filterData.ideaFor, DataClasifSub]);

  // useEffect(() => {
  //   if (filterData?.ideaFor?.length === 0) {
  //     setFilterData((prevState) => ({
  //       ...prevState,
  //       category: prevState.category || [],
  //     }));
  //   }
  // }, [filterData.ideaFor]);

  const ofertas = useMemo(() => {
    return dataOfertDetalle?.map((oferta) => oferta?.ID_PRODUCTO) || [];
  }, [dataOfertDetalle]);

  useEffect(() => {
    if (filterData?.discount?.length > 0 && ofertas.length > 0) {
      setFilterData((prevState) => ({
        ...prevState,
        discount: ofertas,
      }));
    }
  }, [filterData.discount, ofertas, setFilterData]);

  console.log(filterData);

  if (filterData.ideaFor?.length > 0) {
    let relatedSubcategories = [];
    const selectedCategories = filterData.ideaFor;
    relatedSubcategories = DataClasifSub?.filter((producto) =>
      selectedCategories.includes(producto.ID_SUB_CLASIF_DATA.toString())
    );

    const hasMatchingCategory = relatedSubcategories.some((subclasif) =>
      filterData.category.includes(subclasif.ID_CLASIFICACION.toString())
    );

    if (filterData.category.length === 0) {
      filterData.category =
        relatedSubcategories.length === 0
          ? [-1]
          : relatedSubcategories.map((produc) => produc.ID_CLASIFICACION);
    } else if (hasMatchingCategory === true) {
      if (Object.keys(filterData.category).length > 0) {
        const selectedCategories = filterData.category;
        const relatedSubcategories = DataClasif?.filter((producto) =>
          selectedCategories.includes(producto.ID_CLASIFICACION.toString())
        );
      } else {
        console.log("vacio", []);
        filterData.category = relatedSubcategories.map(
          (produc) => produc.ID_CLASIFICACION
        );
      }
    } else {
      console.log("no se encontro esa subcategoria dentro de la categoria");
      filterData.category = [-1];
    }
  } else {
    console.log("No match");
  }

  const [seletedNewValues, setSeletedNewValues] = useState([]);
  // useEffect(() => {
  //   if (newValues?.length > 0) {
  //     console.log(newValues);

  //     setSeletedNewValues((prevState) => ({
  //       ...prevState,
  //     }));
  //   }
  // }, [newValues]);

  console.log(seletedNewValues);

  console.log(DataSubClasifData);

  return (
    <AppsContainer
      title={""}
      sidebarContent={
        (console.log(DataClasifSub),
        (
          <ProductsSidebar
            filterData={filterData}
            DataClasif={DataClasif}
            DataSubClasifData={DataSubClasifData}
            DataPro={DataPro}
            DataClasifSub={DataClasifSub}
            setFilterData={setFilterData}
            dataOfertDetalle={dataOfertDetalle}
          />
        ))
      }
    >
      <AppPageMeta title="Products Listing" />
      {DataClasif && (
        <InfiniteScroll
          dataLength={DataClasif.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <StyledLoading>
              <div className="loader"></div>
            </StyledLoading>
          }
          endMessage={
            <p>
              <b>
                <IntlMessages id="common.notPost" />
              </b>
            </p>
          }
        >
          <ProductListing
            filterData={filterData}
            viewType={viewType}
            setViewType={setViewType}
            setFilterData={setFilterData}
          />{" "}
        </InfiniteScroll>
      )}
    </AppsContainer>
  );
};

export default Products;
