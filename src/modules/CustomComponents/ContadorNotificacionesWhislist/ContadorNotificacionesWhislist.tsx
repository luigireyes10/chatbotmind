import React, { useState, useEffect } from 'react';
import AppNotifications from "@crema/components/AppNotifications/index";
import { io } from 'socket.io-client';
import axios from 'axios';
import {StyleContadorNotify, Styledcontent, Styledcontenttext} from './index.styled';
import AppHeart from '@crema/components/AppHeaderHeart';
import { useQuery } from '@apollo/client';
import { QUERY_CONSULTA_WISHLIST } from 'utils/Queries/Administrative';



const ContadorNotificacionesWhislist = ({ targetUserId }) => {
  const [contador, setContador] = useState(0);


  const { loading: loadingWishList, error: errorWishList, data: dataWishList } = useQuery(QUERY_CONSULTA_WISHLIST, {
    variables: { condition: { ID_EMPRESA: '1' , ID_USER:'1'   } },
    fetchPolicy: 'cache-first', // Usa caché si está disponible, sino, hace solicitud de red
  });

  console.log('dataWishList', dataWishList?.GetWishListProduct.length)

  if (loadingWishList ) return 'Loading...';
  if (errorWishList) return `Error! ${errorWishList.message}`;


  // useEffect(() => {
   


  // }, [targetUserId]);

  return (

    <Styledcontent>
       {
       
       dataWishList ?(
          <StyleContadorNotify>
          
            <Styledcontenttext >{dataWishList?.GetWishListProduct?.length}</Styledcontenttext>
          

        </StyleContadorNotify>
        ): <></>}
        <AppHeart />
      
    </Styledcontent>
  );
}

export default ContadorNotificacionesWhislist;
