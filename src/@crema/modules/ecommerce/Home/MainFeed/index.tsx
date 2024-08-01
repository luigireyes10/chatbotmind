import React, { useEffect } from "react";
import { StyledMain } from "./index.styled";
import Carousel from './Carousel/index';
import { useQuery } from "@apollo/client";
import { QUERY_BANNERS, QUERY_PRODUCTO_CATEGORIA, QUERY_PRODUCTO_CLASIFICACION, QUERY_PRODUCTOS_BUSCADOR } from "utils/Queries/Administrative";
import { saveToLocalStorage } from "utils/general";

const CarruselPerfil = () => {
  const images1 = [
    '/assets/imagensliderhome/slider-7.webp',
    '/assets/imagensliderhome/slider-9.jpg',
    '/assets/imagensliderhome/slider-6.webp',
    '/assets/imagensliderhome/slider-5.webp',
    '/assets/imagensliderhome/slider-3.webp',

  ];

   const { loading, error, data: images } = useQuery(QUERY_BANNERS);


    
 
   const { loading: loadingCateg, error: errorCateg, data: ProductCateg } = useQuery(QUERY_PRODUCTO_CATEGORIA, {
    variables: { condition: { ID_EMPRESA: '1' } },
    fetchPolicy: 'cache-first', // Usa caché si está disponible, sino, hace solicitud de red
    });



    const { loading: loadingBuscador, error: errorBuscador, data: ProductBuscador } = useQuery(QUERY_PRODUCTOS_BUSCADOR, {
      variables: { condition: { ID_EMPRESA: '1' } },
      fetchPolicy: 'cache-first', // Usa caché si está disponible, sino, hace solicitud de red
      });
  

     console.log(ProductCateg)

     console.log(ProductBuscador)

  useEffect(() => {
    if(ProductCateg){

      saveToLocalStorage('DataCategoria', ProductCateg?.GetEmProductoClasificacion)
    }
  }, [ProductCateg])


  
  useEffect(() => {
    if(ProductBuscador){

      saveToLocalStorage('DataProductBuscador', ProductBuscador?.GetProductos)
    }
  }, [ProductBuscador])
  
   

   if (loading) return 'Loading...';
   if (error) return `Error! ${error.message}`;
  return (
      <StyledMain>
        <Carousel images={images1} />
      </StyledMain>
  );
};

export default CarruselPerfil;
