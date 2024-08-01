import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledMainContentViewWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centra el contenido horizontalmente */
  padding: 0 16px; /* Añade espacio en los lados */
`;

export const StyledMainContentView = styled(Content)`
 /* Añade espacio entre el borde y el contenido */
  max-width: 93.3%;

 
  
  margin-top:2px;/* Limita el ancho máximo del contenido */
  width: 100%; /* Asegura que el contenido ocupe todo el ancho disponible */

  @media screen and (max-width: 1200px) {
    max-width: 100%; /* Reducir el ancho máximo en pantallas más pequeñas */
  }
`;

