import React, { useState, useEffect } from 'react';
import AppNotifications from "@crema/components/AppNotifications/index";
import { io } from 'socket.io-client';
import axios from 'axios';
import {StyleContadorNotify, Styledcontent, Styledcontenttext} from './index.styled';
import AppHeart from '@crema/components/AppHeaderHeart';
import { useQuery } from '@apollo/client';
import { QUERY_CONSULTA_CARRITO_COMP, QUERY_CONSULTA_WISHLIST } from 'utils/Queries/Administrative';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';


const ContadorNotificacioneCarritoComp = ({ targetUserId }) => {
  const [contador, setContador] = useState(0);
  const router = useRouter();


  const { loading: loadingCarritoComp, error: errorCarritoComp, data: dataCarritoComp } = useQuery(QUERY_CONSULTA_CARRITO_COMP, {
    variables: { condition: { ID_EMPRESA: '1' , ID_USER:'1'   } },
    fetchPolicy: 'cache-first', // Usa caché si está disponible, sino, hace solicitud de red
  });

  console.log('dataCarritoComp', dataCarritoComp)


  if (loadingCarritoComp ) return 'Loading...';
  if (errorCarritoComp) return `Error! ${errorCarritoComp.message}`;


  // useEffect(() => {
   


  // }, [targetUserId]);

  return (

    <Styledcontent>
       {
       
       dataCarritoComp ?(
          <StyleContadorNotify>
          
            <Styledcontenttext >{dataCarritoComp?.GetCarritoProductos?.length}</Styledcontenttext>
    
          
        </StyleContadorNotify>
        ): <></>}
         <ShoppingCartOutlined
             style={{ fontSize: "22px", color: "#fff" }}
             onClick={() => router.push("/ecommerce/cart")}
              />
    </Styledcontent>
  );
}

export default ContadorNotificacioneCarritoComp;
