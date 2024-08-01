import { gql } from "@apollo/client";

const MUTATION_LOGIN = gql`
  mutation Login($condition: LoginInput!) {
    Login(condition: $condition) {
      username
      businessId
      userId
      employeeId
      costCenter
      sellerId
      sessionCookie {
        token
        expiration
      }
    }
  }
`;

const MUTATION_ADD_CARRITO_COMPRA = gql`
mutation UpsertCrearWishListProduct1($condition: WishListProductInput!) {
  UpsertCrearWishListProduct1(condition: $condition) {
    ID_EMPRESA
    ID_WISHL_PROD
    ID_USER
    ID_PRODUCTO
    ESTADO
    TIPO_LISTA
    FECHA_INSERCION
    USUARIO_INSERCION
    FECHA_ACTUALIZACION
    USUARIO_ACTUALIZACION
  }
}
`;

const MUTATION_ADD_WISHLIST_PROD = gql`
mutation UpsertCrearWishListProduct1($condition: WishListProductInput!) {
  UpsertCrearWishListProduct1(condition: $condition) {
    ID_EMPRESA
    ID_WISHL_PROD
    ID_USER
    ID_PRODUCTO
    ESTADO
    TIPO_LISTA
    FECHA_INSERCION
    USUARIO_INSERCION
    FECHA_ACTUALIZACION
    USUARIO_ACTUALIZACION
  }
}
`;

const MUTATION_UPDATE_CREATE_PERFIL = gql`
  mutation UpsertUpdateCrearPerfil($condition: UpdateCreatePerfilInput!) {
    UpsertUpdateCrearPerfil(condition: $condition) {
      ID_EMPRESA
      ID_PERFIL
      ID_USER
      NOMBRE_USUARIO
      NOMBRE_COMPLETO
      BIOGRAFIA
      TELEFONO
      WHATSAPP
      CORREO
      SITIO_WEB
      SEGUIDORES
      PUBLICACIONES
      ID_DIRECCION
      ID_REDES_SOCIALES
      FECHA_INSERCION
      FECHA_CREACION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
      ESTADO
    }
  }
`;

const MUTATION_UPDATE_PASSWORD = gql`
  mutation UpsertUpdateCrearCuenta($condition: RegisterInput!) {
    UpsertUpdateCrearCuenta(condition: $condition) {
      ID_EMPRESA
      EMAIL
      WEB_PASSWORD
      WEB_PASSWORD_UPDATE
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
      USUARIO
      TELEFONO
      WHATSAPP
      TIPO_CUENTA
      NOMBRES
    }
  }
`;

const MUTATION_CREATE_UPDATE_REDES_SOCIALES = gql`
  mutation UpsertUpdateCrearRedesSociales(
    $condition: CreateUpdateRedesSocialesInput!
  ) {
    UpsertUpdateCrearRedesSociales(condition: $condition) {
      ID_EMPRESA
      ID_REDES_SOCIALES
      ID_USER
      REDES_SOCIALES
      TIPO_REDES_SOCIALES
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
    }
  }
`;

const MUTATION_CREATE_DIRECCION_ENVIO = gql`
  mutation UpsertUpdateDireccion($condition: CreateUpdateDireccionesInput!) {
    UpsertUpdateDireccion(condition: $condition) {
      ID_EMPRESA
      ID_USER
      ID_CLIENTE
      ID_TIPO_DIRECCION
      ID_ESTADO
      ID_CIUDAD
      LINEA1
      LINEA2
      LINEA3
      ZIP_CODE
      TELEFONO
      ID_PAIS
      DEFECTO
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
      TR_ORIGEN
      ID_SECTOR
      CALLE
      CASA
      EDIFICIO
      APARTAMENTO
    }
  }
`;

const MUTATION_CREATE_UPDATE_PRODUCT = gql`
  mutation UpsertCreateProducto($condition: CreateUpdateProductosInput!) {
    UpsertCreateProducto(condition: $condition) {
      ID_PRODUCTO
      ID_EMPRESA
      ID_IMPUESTO
      ID_CLASIFICACION
      EM_DOC_IMAGE {
        ID_EMPRESA
        ID_ADJUNTO
        ID_PRODUCTO
        ESTADO
        ORDEN_DOC
        TIPO_DOCUMENTO
        RUTA_DOCUMENTO
        OBSERVACION
        FECHA_ACTUALIZACION
        FECHA_INSERCION
        USUARIO_INSERCION
        USUARIO_ACTUALIZACION
      }
      DESC_PRODUCTO
      UNIDAD
      COSTO_RD
      DEFAULT_RUTA_DOC
      ICONO_PRODUCTO
      CANTIDAD_REORDEN
      UNIDAD_REORDEN
      ESTADO
      OBSERVACION
      FECHA_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_INSERCION
      USUARIO_ACTUALIZACION
      FECHA_VENCIMIENTO
      CONCENTRACION
      ID_PRESENTACION
      INVENTARIO_INICIAL
      ESINVENTARIABLE
      ID_PROD_MARCA
      ESMODIFICABLE
      GENERO
      ESTILO
      ESTILO_FABRICANTE
      REFERENCIA
      OTRAS_ESPECIFICACIONES
      VENTAS
      DEVOLUCION
      CBM
      COMISION_VENTA
      IMPORTADO
      TR_ORIGEN
      PESADO
      ID_PROD_LINEA
      PRODUCTO_ROBABLE
      PESO
      UNIDAD_PESO
      FECHA_CREACION
      DIMENSION_ALTO
      DIMENSION_ANCHO
      DIMENSION_PROFUND
      UNIDAD_DIMENSION
      ID_PROVEEDOR_PRIN
      ID_PROVEEDOR_ALT
      CONSIGNACION
      NUMERACION_RATING
      NOMBRE
      MARGEN_BENEFICIO
      TIPO_PRODUCTO
    }
  }
`;

const MUTATION_CREATE_FACTURA = gql`
  mutation UpsertCreateUpdateFacturaProductos(
    $condition: EmCreateUpdateFacturaProductosInput!
  ) {
    UpsertCreateUpdateFacturaProductos(condition: $condition) {
      ID_TIPO_TRANS
      ID_DOCUMENTO
      ID_EMPRESA
      ID_PRODUCTO
      COD_BARRA
      ID_IMPUESTO
      SECUENCIA
      DESCRIPCION_PRODUCTO
      CANTIDAD
      UNIDAD
      PRECIO
      PORC_DESCUENTO
      MONTO_IMPUESTO
      COSTO_COMPRA
      MONTO_DESCUENTO
      IMPORTE
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
      ID_UBICACION
      IMPORTE_ITBIS
      PRECIO_VENTA
      ART_OFERTA
      ID_CANAL_PRECIO
      PRECIO_LIQUIDADO
      MONTO_EXONERADO
      ID_PERSONAL_VENDEDOR_MOD
      ID_INVENTARIO
      CANTIDAD_REFERENCIA
      UNIDAD_REFERENCIA
      PRECIO_NETO
      CANT_DESPACHADA
      CANTIDAD_PEDIDO
      PRECIO_PEDIDO
      REGALO
      COMISION_VENTA
      MONTO_EXENTO
      MONTO_GRAVADO
      PRECIO_BRUTO
      DESCUENTO
      PRECIO_FINAL_SIN_IMPUESTOS
      IMPUESTO
      PORC_IMPUESTO
      GRAVADO
      EXENTO
      ID_BULTO
      EVENTO
      NO_EVENTO
      PRECIO_FINAL_CON_IMPUESTOS
      TR_ORIGEN
      ENTREGA_CON_CONDUCE
      COSTO_CON_ITBIS
      COSTO_SIN_ITBIS
      OFERTA
      OBSERVACIONES
      COD_VENDEDOR_ACT
      ID_REP_VEN
      COBERTURA_SEGURO
      TASA_EXONERACION
      DESCUENTO_OFERTA
      PORC_DESC_OFERTA
      ID_MARCA
      PORC_CARGO
      MONTO_CARGO
      FECHA_FACTURA
      ID_TIPO_TRANS_EVENTO
      ID_TIPO_TRANS_ALM
      ID_TRANSACCION_ALM
      MONTO_IMP_DESC
      PORC_IMP_RETENIDO
      MONTO_IMP_RETENIDO
      ID_SEC_ENTRADA_COSTO
      CANTIDAD_OFERTA
      ID_OFERTA
    }
  }
`;

const MUTATION_CREATE_CHANGE_PASSWORD = gql`
  mutation UpsertUpdateChangePassword($condition: ChangePasswordInput!) {
    UpsertUpdateChangePassword(condition: $condition) {
      ID_EMPRESA
      EMAIL
      WEB_PASSWORD
      WEB_PASSWORD_UPDATE
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
      USUARIO
      TELEFONO
      WHATSAPP
      TIPO_CUENTA
      NOMBRES
      ID_LOGIN
    }
  }
`;

const MUTATION_CREATE_UPDATE_CUENTA_PAGO = gql`
  mutation UpsertCreateUpdateEmCuentaPago(
    $condition: CreateUpdateCuentaPagoInput!
  ) {
    UpsertCreateUpdateEmCuentaPago(condition: $condition) {
      ID_EMPRESA
      ID_CUENTA
      NUM_CUENTA
      TIPO_CUENTA
      DESC_CUENTA
      ESTADO
      NUM_CVV
      NOMBRE_CUENTA
    }
  }
`;

const MUTATION_CREATE_UPDATE_VALIDAR_COMPRA = gql`
  mutation UpsertCreateUpdateValidaCompra(
    $condition: CreateUpdateValidaCompraInput!
  ) {
    UpsertCreateUpdateValidaCompra(condition: $condition) {
      ID_EMPRESA
      ID_VALIDAR_COMP
      ID_USER
      ID_DIRECCION
      ID_CUENTA_PAGO
      ID_CUENTA
      ID_DIRECCION_ENVIO
      MONTO_CARGO
      MONTO_DESCUENTO
      MONTO_EXENTO
      MONTO_EXONERADO
      MONTO_GRAVADO
      MONTO_IMPUESTO
      MONTO_IMP_DESC
      MONTO_IMP_RETENIDO
      OBSERVACIONES_ENVIO
      MONTO_TOTAL_NETO
    }
  }
`;

const MUTATION_CREATE_OFERTA_PRODUCTO = gql`
  mutation UpsertCreateOferta($condition: OfertasProductosInput!) {
    UpsertCreateOferta(condition: $condition) {
      ID_EMPRESA
      ID_OFERTA_PROD
      ESTADO
      POR_DESCUENTO
      ID_PRODUCTO
      FECHA_INICIO_OFERTA
      FECHA_FIN_OFERTA
      TIPO_OFERTA
      DESC_OFERTA
      INF_PROMOCIONAL
      FOTO_PROMOCIONAL
      FECHA_ACTUALIZACION
      FECHA_INSERCION
      USUARIO_INSERCION
      USUARIO_ACTUALIZACION
    }
  }
`;
const MUTATION_CREATE_OFERTA_DETALLE = gql`
  mutation UpserOfertasProductosDetalle(
    $condition: OfertasProductosDetalleInput!
  ) {
    UpserOfertasProductosDetalle(condition: $condition) {
      ID_EMPRESA
      ID_OFERTA_PROD
      ID_PRODUCTO
      ESTADO
      TIPO_OFERTA
      PORC_DESCUENTO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      FECHA_INICIO_OFERTA
      FECHA_FIN_OFERTA
      INF_PROMOCIONAL
    }
  }
`;
const MUTATION_UPSERT_INSERT_UPDATE_PROSPECTO = gql`
  mutation UpsertInsertUpdateEmCrmProspecto(
    $condition: CreateUpdateEmCrmProspectosInput!
  ) {
    UpsertInsertUpdateEmCrmProspecto(condition: $condition) {
      ID_EMPRESA
      NOMBRES
      WHASTSAPP
      DESCRIPCION
      ID_CHAT
      APELLIDOS
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
    }
  }
`;

const MUTATIO_WHATSAPP_SEND_MESSAGE = gql`
  mutation WhatsappNotificaciones($condition: WhatsappNotifInput!) {
    WhatsappNotificaciones(condition: $condition) {
      ID_EMPRESA
      ID_NOTIFICACION
      DESCRIPCION
      TITULO
      CUERPO_MENSAJE
      TIPO_NOTIFICACION
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
    }
  }
`;

const MUTATION_FILE_CHAT_UPLOAD = gql`
  mutation UpsertInsertUpdateEmChatUpload($condition: ChatUploadInput!) {
    UpsertInsertUpdateEmChatUpload(condition: $condition) {
      ID_EMPRESA
      ID_CLASIF_VARIEDAD
      ID_CLASIFICACION
      DESCRIP_CLASIF_VARIEDAD
      NOMBRE_VARIEDAD
      TIPO_VARIEDAD
      FECHA_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_INSERCION
      USUARIO_ACTUALIZACION
      ESTADO
      URL_IMG_CLASIF_VARIEDA
    }
  }
`;
const MUTATION_CLASIFICAICON_PRODUCTO = gql`
  mutation UpsertCreateClasificacion($condition: ProductoClasifInputCreate!) {
    UpsertCreateClasificacion(condition: $condition) {
      ID_CLASIFICACION
      ID_EMPRESA
      NOMBRE
      ICONO_CLASIF
      DESCRIPCION
      OBSERVACION
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
      CLASIFICACION_PADRE
      TR_ORIGEN
      MARGEN_BENEFICIO
      FOTO_CLASIF
    }
  }
`;

const MUTATION_POST_PERFIL = gql`
 mutation UpsertCreatePostPerfil($condition: CreateUpdatePostPerfilInput!) {
  UpsertCreatePostPerfil(condition: $condition) {
    ID_PRODUCTO
    ID_EMPRESA
    ID_IMPUESTO
    ID_CLASIFICACION
    EM_DOC_IMAGE {
      ID_EMPRESA
      ID_ADJUNTO
      ID_PRODUCTO
      ESTADO
      ORDEN_DOC
      TIPO_DOCUMENTO
      RUTA_DOCUMENTO
      OBSERVACION
      FECHA_ACTUALIZACION
      FECHA_INSERCION
      USUARIO_INSERCION
      USUARIO_ACTUALIZACION
    }
    DESC_PRODUCTO
    UNIDAD
    COSTO_RD
    DEFAULT_RUTA_DOC
    ICONO_PRODUCTO
    CANTIDAD_REORDEN
    UNIDAD_REORDEN
    ESTADO
    OBSERVACION
    FECHA_INSERCION
    FECHA_ACTUALIZACION
    USUARIO_INSERCION
    USUARIO_ACTUALIZACION
    FECHA_VENCIMIENTO
    CONCENTRACION
    ID_PRESENTACION
    INVENTARIO_INICIAL
    ESINVENTARIABLE
    ID_PROD_MARCA
    ESMODIFICABLE
    GENERO
    TIPO_PRODUCTO
    ESTILO
    ESTILO_FABRICANTE
    REFERENCIA
    OTRAS_ESPECIFICACIONES
    VENTAS
    DEVOLUCION
    CBM
    COMISION_VENTA
    IMPORTADO
    TR_ORIGEN
    PESADO
    ID_PROD_LINEA
    PRODUCTO_ROBABLE
    PESO
    UNIDAD_PESO
    FECHA_CREACION
    DIMENSION_ALTO
    DIMENSION_ANCHO
    DIMENSION_PROFUND
    UNIDAD_DIMENSION
    ID_PROVEEDOR_PRIN
    ID_PROVEEDOR_ALT
    CONSIGNACION
    NUMERACION_RATING
    NOMBRE
    MARGEN_BENEFICIO
    FAVORITE
  }
}
`;

export {
  MUTATION_LOGIN,
  MUTATION_ADD_CARRITO_COMPRA,
  MUTATION_ADD_WISHLIST_PROD,
  MUTATION_UPDATE_CREATE_PERFIL,
  MUTATION_UPDATE_PASSWORD,
  MUTATION_CREATE_UPDATE_REDES_SOCIALES,
  MUTATION_CREATE_DIRECCION_ENVIO,
  MUTATION_CREATE_UPDATE_PRODUCT,
  MUTATION_CREATE_FACTURA,
  MUTATION_CREATE_CHANGE_PASSWORD,
  MUTATION_CREATE_UPDATE_CUENTA_PAGO,
  MUTATION_CREATE_UPDATE_VALIDAR_COMPRA,
  MUTATION_CREATE_OFERTA_PRODUCTO,
  MUTATION_CREATE_OFERTA_DETALLE,
  MUTATION_UPSERT_INSERT_UPDATE_PROSPECTO,
  MUTATIO_WHATSAPP_SEND_MESSAGE,
  MUTATION_FILE_CHAT_UPLOAD,
  MUTATION_CLASIFICAICON_PRODUCTO,
  MUTATION_POST_PERFIL,
};
