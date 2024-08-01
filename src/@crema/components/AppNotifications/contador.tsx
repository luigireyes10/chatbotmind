import React, { useState, useEffect } from 'react';
import AppNotifications from "@crema/components/AppNotifications/index";
import { io } from 'socket.io-client';
import axios from 'axios';
import {StyleContadorNotify, Styledcontent, Styledcontenttext} from './index.styled';

const socket = io("http://localhost:4005");

const ContadorNotificaciones = ({ targetUserId }) => {
  const [contador, setContador] = useState(0);
  const [postCount, setPostCount] = useState(0); // Nuevo estado para la cantidad de posts


  useEffect(() => {
    // Función para obtener el número de notificaciones del usuario
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:4005/api/notify/66411fc7f5a1513e647b28d3");
        if (response.status === 200) {
          const notifications = response.data;
          setContador(notifications.length); // Establecer el contador basado en las notificaciones recibidas
        }
      } catch (error) {
        console.error('Error al obtener las notificaciones:', error);
      }
    };

    // Llama a la función para obtener el número de notificaciones cuando el componente se monta
    fetchNotifications();
    console.log('response', fetchNotifications);
    

    // Establece un listener para recibir nuevas notificaciones
    socket.on('new-message', () => {
      // Cuando se recibe una nueva notificación, actualiza el contador llamando a la función fetchNotifications
      fetchNotifications();
    });

    // Limpia el listener cuando el componente se desmonta
    return () => {
      socket.off('new-message');
    };
  }, [targetUserId]);

  useEffect(() => {
    // Función para obtener el número de notificaciones del usuario
    const fetchNotifications = async () => {
      // El resto de tu código aquí...
    };

    // Función para obtener los posts del usuario
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4005/api/notificationpostperfil/60b8d2bdf1d5c12a8a8d0f6b");
        if (response.status === 200) {
          const posts = response.data;
          console.log('Posts:', posts);
          setPostCount(posts.length); // Establecer la cantidad de posts
        }
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    };

    // Llama a las funciones para obtener las notificaciones y los posts cuando el componente se monta
    fetchNotifications();
    fetchPosts();

    // Establece un listener para recibir nuevas notificaciones
    socket.on('new-message', () => {
      // Cuando se recibe una nueva notificación, actualiza el contador llamando a la función fetchNotifications
      fetchNotifications();
    });

    // Limpia el listener cuando el componente se desmonta
    return () => {
      socket.off('new-message');
    };
  }, []);

  return (

    <Styledcontent >
      <StyleContadorNotify>
  
      <Styledcontenttext >{Number(postCount) + Number(contador)}</Styledcontenttext> {/* Muestra la cantidad de posts */}
    </StyleContadorNotify>
      <AppNotifications />
    </Styledcontent>
  );
}

export default ContadorNotificaciones;
