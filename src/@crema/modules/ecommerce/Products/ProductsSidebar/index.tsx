import React, { useEffect, useState } from "react";
import ProductsCategory from "./ProductsCategory";
import PriceSelector from "./PriceSelector";
import AppList from "@crema/components/AppList";
import CheckedCell from "./CheckedCell";
import OfertasCell from "./OfertasCell";
import RatingCell from "./RatingCell";
import AppScrollbar from "@crema/components/AppScrollbar";
import AppGrid from "@crema/components/AppGrid";
import ColorCell from "./ColorCell";
import {
  StyledProductSidebar,
  StyledProductSidebarItem,
  StyledProductSidebarItemTitle,
  StyledProductSidebarTitle,
} from "./index.styled";
import {
  brandData,
  discountList,
  idealFor,
  productColors,
} from "@crema/mockapi/fakedb";
import type { ProductDataFilterType } from "@crema/types/models/ecommerce/EcommerceApp";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTO_CLASIFICACION } from "utils/Queries/Administrative";
import Item from "antd/es/list/Item";
import { String } from "lodash";

type Props = {
  filterData: ProductDataFilterType;
  setFilterData: (data: ProductDataFilterType) => void;
  DataClasif: any;
  DataPro: any;
  DataSubClasifData: any;
  DataClasifSub: any;
  clasificacionesEncontradas: any;
  dataEncontrada: any;
  dataOfertDetalle: any;
};
const ProductSidebar = ({
  filterData,
  DataPro,
  setFilterData,
  DataClasif,
  DataSubClasifData,
  DataClasifSub,
  dataOfertDetalle,
  dataEncontrada,
  clasificacionesEncontradas,
}: Props) => {
  const [selectedBrand, setSelectedBrand] = useState<number[]>(
    filterData.brand
  );
  const [selectedFor, setSelectedFor] = useState<string[]>(filterData.ideaFor);
  const [selectedCategory, setSelectedCategory] = useState<number[]>(
    filterData.category
  );
  const [selectedDiscount, setSelectedDiscount] = useState<number[]>(
    filterData.discount
  );
  const [selectedColor, setSelectedColor] = useState<number[]>(
    filterData.color
  );
  const [customerRating, setCustomerRating] = useState<number[]>(
    filterData.rating
  );

  const [selectedPrice, setSelectedPrice] = useState<number[]>(
    filterData.price
  );

  // const {
  //   loading: loadingProdClasificacion,
  //   error: errorClasificacion,
  //   data: dataClasificacion,
  // } = useQuery(QUERY_PRODUCTO_CLASIFICACION, {
  //   variables: { condition: { ID_EMPRESA: "1" }, limit: 20 },
  //   fetchPolicy: "cache-first", // Use cache if available, otherwise, make a network request
  // });

  // console.log(dataClasificacion);

  console.log(DataClasif);

  useEffect(() => {
    setFilterData({
      title: filterData.title,
      brand: selectedBrand,
      ideaFor: selectedFor,
      discount: selectedDiscount,
      color: selectedColor,
      rating: customerRating,
      category: selectedCategory,
      price: selectedPrice,
    });
  }, [
    filterData.title,
    selectedBrand,
    selectedFor,
    selectedDiscount,
    selectedColor,
    customerRating,
    selectedCategory,
    selectedPrice,
  ]);
  console.log(selectedDiscount);

  console.log(selectedPrice);

  console.log(selectedPrice);

  const onSelectBrand = (brandId: number) => {
    if (selectedBrand.some((brand) => brand === brandId)) {
      setSelectedBrand(selectedBrand.filter((brand) => brand !== brandId));
    } else {
      setSelectedBrand(selectedBrand.concat(brandId));
    }
  };

  const onSelectCategory = (id: number) => {
    if (selectedCategory?.some((item) => item === id)) {
      setSelectedCategory(selectedCategory?.filter((item) => item !== id));
    } else {
      setSelectedCategory(selectedCategory?.concat(id));
    }
  };

  console.log(selectedCategory);

  const onSelectPrice = (id1: number, id2: number) => {
    // Establece selectedPrice directamente a un arreglo con los dos nuevos identificadores
    setSelectedPrice(id1, id2);
  };

  console.log(selectedPrice);

  const onSelectFor = (id: String) => {
    if (selectedFor.some((item) => item === id)) {
      setSelectedFor(selectedFor.filter((item) => item !== id));
    } else {
      setSelectedFor(selectedFor.concat(id));
    }
  };

  console.log(selectedFor);

  const onSelectDiscount = (id: number) => {
    if (selectedDiscount.some((item) => item === id)) {
      setSelectedDiscount(selectedDiscount.filter((item) => item !== id));
    } else {
      setSelectedDiscount(selectedDiscount.concat(id));
    }
  };

  console.log(selectedDiscount);

  const onSelectColor = (id: number) => {
    if (selectedColor.some((item) => item === id)) {
      setSelectedColor(selectedColor.filter((item) => item !== id));
    } else {
      setSelectedColor(selectedColor.concat(id));
    }
  };

  const onSelectRating = (id: number) => {
    if (customerRating.some((item) => item === id)) {
      setCustomerRating(customerRating.filter((item) => item !== id));
    } else {
      setCustomerRating(customerRating.concat(id));
    }
  };

  const transformedDataClasif = DataClasif?.map((data) => ({
    id: data.ID_CLASIFICACION,
    name: data.NOMBRE,
    subcate: data.SUB_CATEGORIA,
  }));

  const transformedDataSubClasifData = DataSubClasifData?.map((data) => ({
    id: data.ID_SUB_CLASIF_DATA,
    name: data.NOMBRE,
  }));

  console.log(DataClasifSub);

  const transformedDataVentas = Array.isArray(DataPro?.GetProductos)
    ? DataPro.GetProductos.map((data) => ({
        id: data.ID_PRODUCTO,
        ventas: data.VENTAS,
      }))
    : [];

  console.log(selectedFor);

  // Usar filter para obtener todos los productos que coincidan con los IDs en selectedFor
  console.log(transformedDataVentas);

  const valoresDeVentas = transformedDataVentas?.map((item) => item.ventas);
  const minVentas = Math.min(...valoresDeVentas);
  const maxVentas = Math.max(...valoresDeVentas) + 100;

  console.log([minVentas, maxVentas]);
  console.log(dataOfertDetalle);

  // const transformedDataOfertaDetalle = Array.isArray(dataOfertDetalle)
  //   ? dataOfertDetalle.map((data) => data.ID_PRODUCTO.toString()) : [];

  // const transformedDataOfertaDetalle = dataOfertDetalle?.map(
  //   (data) => data.ID_PRODUCTO
  // );

  // const transformedDataOfertaDetalle = Array.isArray(dataOfertDetalle)
  //   ? dataOfertDetalle.map((data) => {
  //       data.ID_PRODUCTO, data.Estado;
  //     })
  //   : [];

  const transformedDataOfertaDetalle = Array.isArray(dataOfertDetalle)
    ? dataOfertDetalle.map((data) => data.ID_PRODUCTO)
    : [];

  console.log(transformedDataOfertaDetalle);

  return (
    <AppScrollbar>
      <StyledProductSidebar>
        <StyledProductSidebarTitle>Filter By</StyledProductSidebarTitle>
        {/* <StyledProductSidebarItem>
          <StyledProductSidebarItemTitle>Brand</StyledProductSidebarItemTitle>
          <AppList
            data={brandData}
            renderItem={(data) => (
              console.log(data),
              (
                <CheckedCell
                  key={data.id}
                  data={data}
                  onChange={onSelectBrand}
                  selected={selectedBrand}
                />
              )
            )}
          />
        </StyledProductSidebarItem> */}
        <StyledProductSidebarItem>
          <StyledProductSidebarItemTitle>
            Categories
          </StyledProductSidebarItemTitle>
          <AppList
            data={transformedDataClasif}
            renderItem={(data) => (
              console.log(data),
              (
                <ProductsCategory
                  key={data.id}
                  data={data}
                  onChange={onSelectCategory}
                  selected={selectedCategory}
                />
              )
            )}
          />
        </StyledProductSidebarItem>
        <StyledProductSidebarItem>
          <StyledProductSidebarItemTitle>Price</StyledProductSidebarItemTitle>

          <PriceSelector
            minVentas={minVentas}
            transformedDataVentas={transformedDataVentas}
            maxVentas={maxVentas}
            onChange={onSelectPrice}
            selected={selectedPrice}
          />
        </StyledProductSidebarItem>

        <StyledProductSidebarItem>
          <StyledProductSidebarItemTitle>
            Ideal For
          </StyledProductSidebarItemTitle>
          <AppList
            data={transformedDataSubClasifData}
            renderItem={(data) => (
              console.log(data),
              (
                <CheckedCell
                  key={data.id}
                  data={data}
                  onChange={onSelectFor}
                  selected={selectedFor}
                />
              )
            )}
          />
        </StyledProductSidebarItem>

        <StyledProductSidebarItem>
          <StyledProductSidebarItemTitle>
            Discount
          </StyledProductSidebarItemTitle>

          <OfertasCell
            // key={data.id}
            // data={data}
            transformedDataOfertaDetalle={transformedDataOfertaDetalle}
            onChange={onSelectDiscount}
            selected={selectedDiscount}
          />
        </StyledProductSidebarItem>

        {/* <StyledProductSidebarItem>
          <StyledProductSidebarItemTitle>Color</StyledProductSidebarItemTitle>
          <AppGrid
            data={Object.values(productColors)}
            responsive={{
              xs: 10,
              sm: 10,
              md: 10,
              lg: 10,
              xl: 10,
              xxl: 10,
            }}
            itemPadding={0}
            renderItem={(data, index) => (
              <ColorCell
                key={"color-" + index}
                data={data}
                selected={selectedColor}
                onChange={onSelectColor}
              />
            )}
          />
        </StyledProductSidebarItem> */}

        <StyledProductSidebarItem>
          <StyledProductSidebarItemTitle>
            Customer Ratings
          </StyledProductSidebarItemTitle>
          <AppList
            data={[5, 4, 3, 2, 1]}
            renderItem={(data) => (
              <RatingCell
                key={data}
                data={data}
                onChange={onSelectRating}
                selected={customerRating}
              />
            )}
          />
        </StyledProductSidebarItem>
      </StyledProductSidebar>
    </AppScrollbar>
  );
};

export default ProductSidebar;
