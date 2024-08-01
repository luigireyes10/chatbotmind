import React, { useEffect, useState } from 'react'; // Correct the import for `useState`
import IntlMessages from '@crema/helpers/IntlMessages';
import { Image } from 'antd';
import {
  StyledWallpaperAvatar,
  StyledWallPaperCard,
  StyledWallpaperContent,
  StyledWallpaperContentAction,
  StyledWallpaperContentActionItem,
  StyledWallpaperContentFooter,
  StyledWallpaperHeader,
  StyledWallpaperHeaderAction,
  StyledWallpaperTitle,
  StyledDedc,
  Styleinfo,
  StyledDescuento,

} from './index.styled';

const WallPaper = ({ Ofertas }) => {
  const [selectImg, setSelectImg] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (Ofertas?.GetOfertasProductos?.length > 0) {
      setSelectImg(Ofertas.GetOfertasProductos[0].FOTO_PROMOCIONAL);
      setSelected(Ofertas.GetOfertasProductos[0]); 
    }
  }, [Ofertas?.GetOfertasProductos]);
console.log(selected);

console.log(selectImg);

  return (
    <>



    <StyledWallPaperCard
      heightFull
      className="background-image"
      style={{
        backgroundImage: `url(http://localhost:4005/${selectImg})`,
      }}
    > 
     <StyledDescuento> <h1>{selected?.POR_DESCUENTO}% de Descuento</h1></StyledDescuento>
      <StyledWallpaperHeader>

              <StyledDedc><h1>{selected?.DESC_OFERTA}</h1></StyledDedc>
    
      </StyledWallpaperHeader>

      <StyledWallpaperContent>
        <StyledWallpaperTitle>
          
          {Ofertas?.GetOfertasProductos?.INF_PROMOCIONAL}
        </StyledWallpaperTitle>
        <StyledWallpaperTitle>
          {Ofertas?.GetOfertasProductos?.DESC_OFERTA}
        </StyledWallpaperTitle>

        <StyledWallpaperContentFooter>
          <StyledWallpaperTitle>
          <Styleinfo><h3>{selected?.INF_PROMOCIONAL}</h3>
         </Styleinfo>
          </StyledWallpaperTitle>
        </StyledWallpaperContentFooter>
      </StyledWallpaperContent>
    </StyledWallPaperCard>
    </>
  );
};

export default WallPaper;