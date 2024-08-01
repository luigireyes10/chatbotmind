import { gql } from "@apollo/client";

const QUERY_BANNERS = gql`
  query GetBanners {
    GetBanners {
      ID_EMPRESA
      ID_BANNER_PAGE
      SECUENCIA
      RUTA_DOCUMENTO
      NOTA
      ESTADO
      ORDEN
    }
  }
`;

const QUERY_PRODUCTO_CLASIFICACION = gql`
  query GetEmProductoClasificacionTotal($condition: ProductoClasifInput!) {
    GetEmProductoClasificacionTotal(condition: $condition) {
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

const QUERY_PRODUCTO_CATEGORIA = gql`
  query GetEmProductoClasificacion($condition: ProductoClasifInput!) {
    GetEmProductoClasificacion(condition: $condition) {
      ID_CLASIFICACION
      ID_EMPRESA
      DESCRIPCION
      ESTADO
      CLASIFICACION_PADRE
      FOTO_CLASIF
    }
  }
`;

const QUERY_PRODUCTO_DESTACADO = gql`
  query GetProductosDestacados($condition: ProductosDestacadosInput!) {
    GetProductosDestacados(condition: $condition) {
      ID_PRODUCTO
      ID_EMPRESA
      DESC_PRODUCTO
      UNIDAD
      COSTO_RD
      CANTIDAD_REORDEN
      UNIDAD_REORDEN
      ESTADO
      NOMBRE
      VENTAS
      EM_DOC_IMAGE {
        ID_EMPRESA
        ID_ADJUNTO
        ESTADO
        ORDEN_DOC
        TIPO_DOCUMENTO
        RUTA_DOCUMENTO
        OBSERVACION
      }
    }
  }
`;

const QUERY_OFERTAS_PRODUCTOS = gql`
  query GetOfertasProductosDetalle($condition: OfertasProductosDetalleInput!) {
    GetOfertasProductosDetalle(condition: $condition) {
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

const QUERY_TOTAL_OFERTAS_DETALLE = gql`
  query GetOfertasTotalProductosDetalle(
    $condition: OfertasProductosDetalleInput!
  ) {
    GetOfertasTotalProductosDetalle(condition: $condition) {
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
      COSTO_RD
      DEFAULT_RUTA_DOC
      PRECIO_DESCUENTO
      NOMBRE
    }
  }
`;

const QUERY_PRODUCTOS_MAS_POPULARES = gql`
  query GetProductosMorePopular(
    $condition: ProductosMorePopularInput!
    $limit: Int!
  ) {
    GetProductosMorePopular(condition: $condition, limit: $limit) {
      CANTIDAD_EXISTENTE
      ID_EMPRESA
      COD_BARRA
      DESC_PRODUCTO
      ID_CLASIFICACION
      ID_PRODUCTO
      NOMBRE_PROD
      UNIDAD
      CLASIFICACION
      PRECIO_VENTA
      ID_MONEDA
      PORC_DESCUENTO
      PRECIO_VENTA_CON_ITB
      TIPO_BIEN_SERVICIO
      VENTAS
      DEFAULT_RUTA_DOC
    }
  }
`;

const QUERY_PRODUCTOS_CARRITO_COMPRAS = gql`
  query GetCarritoProductosDetalle1($condition: CarritoProductoInput!) {
    GetCarritoProductosDetalle1(condition: $condition) {
      id
      product {
        image
        title
        brand
      }
      price {
        mrp
        discount
      }
      total {
        mrp
        discount
        count
      }
      count
    }
  }
`;

const QUERY_PERFIL = gql`
  query GetEmPerfil($condition: PerfilInput!) {
    GetEmPerfil(condition: $condition) {
      ID_EMPRESA
      ID_PERFIL
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
      ID_USER
      TIPO_USER
      FECHA_NACIMIENTO
      NOMBRE_USUARIO
      FOTO_PERFIL
    }
  }
`;

const QUERY_PRODCUTOS_DETALLES = gql`
  query GetProductosDetalle(
    $condition: ProductosMorePopularInput!
    $limit: Int!
  ) {
    GetProductosDetalle(condition: $condition, limit: $limit) {
      products {
        id
        title
        description
        mrp
        discount
        rating
        ideaFor
        state
        brand
        color
        reviews
        image {
          id
          src
          imagen_hover
        }
        createdAt
        inStock
        category
        SKU
        productInfo {
          id
          title
          desc
        }
        productSpec {
          id
          title
          desc
        }
      }
      total
    }
  }
`;

const QUERY_CONSULTA_WISHLIST = gql`
query GetWishListProduct($condition: WishListProductInput!) {
  GetWishListProduct(condition: $condition) {
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

const QUERY_CONSULTA_CARRITO_COMP = gql`
  query GetCarritoProductos($condition: CarritoProductoInput!) {
    GetCarritoProductos(condition: $condition) {
      ID_EMPRESA
      ID_CARRITO_COMP
      ID_USER
      ID_PRODUCTO
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
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
  }
`;

const QUERY_CONSULTA_DIRECCIONES = gql`
  query GetEmDirecciones($condition: GetDrireccionesInput!) {
    GetEmDirecciones(condition: $condition) {
      ID_EMPRESA
      ID_DIRECCION_ENVIO
      DIRECCION_ENVIO
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

const QUERY_CONSULTA_REDES_SOCIALES = gql`
  query GetEmRedesSociales($condition: CreateUpdateRedesSocialesInput!) {
    GetEmRedesSociales(condition: $condition) {
      ID_EMPRESA
      ID_REDES_SOCIALES
      ID_USER
      REDES_SOCIALES
      TIPO_REDES_SOCIALES
      ESTADO
      SITIO_WEB
      WHATSAPP
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
    }
  }
`;

const QUERY_CONSULTA_CUENTA_PAGO = gql`
  query GetEmCuentaPago($condition: GetCuentaPagoInput!) {
    GetEmCuentaPago(condition: $condition) {
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

const QUERY_CONSULTA_SUMMARY_PRODUCT_CHEKOUT = gql`
  query GetCarritoProductosDetalle1Checkout($condition: CarritoProductoInput!) {
    GetCarritoProductosDetalle1Checkout(condition: $condition) {
      cartItems {
        id
        product {
          image
          title
          brand
        }
        price {
          mrp
          discount
        }
        total {
          mrp
          discount
          count
        }
        count
      }
      totalPrice
      totalDiscount
    }
  }
`;

const QUERY_ADD_PRODUCTOS = gql`
 query GetProductos($condition: ProductosInput!) {
  GetProductos(condition: $condition) {
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

const QUERY_FACTURA_PRODUCTOS = gql`
  query GetEmFacturaProductos($condition: GetEmFacturaProductosInput!) {
    GetEmFacturaProductos(condition: $condition) {
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

const QUERY_EMPRESA = gql`
  query GetEmpresa {
    GetEmpresa {
      ID_EMPRESA
      NOMBRE_EMPRESA
      COLOR_FONDO
      CAMPO1
      CAMPO2
      CAMPO3
      COLOR_RECORD_ACT
      COLOR_ITEM_ACT
      COLOR_BARRA
      COLOR_MENU
      COLOR_PANTALLA
      COLOR_ITEM_MENU
      COLOR_ITEM_BARRA
      COLOR_ITEM_PANTALLA
      COLOR_VENTANA
      COLOR_VENTANA_EMERG
      RUTA_FOTO
      RUTA_FOTO_HEADER
      RUTA_FOTO_FOOTER
      RUTA_FOTO_LOGO
      DIA_LAB_ANTERIOR
      DIA_LAB_ACTUAL
      DIA_LAB_PROXIMO
      RNC
      FECHA_ULTIMA_FACTURACION
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
      COLOR_PRINCIPAL
      ID_CIUDAD
    }
  }
`;
const QUERY_PRODUCTOS_BUSCADOR = gql`
  query GetProductos($condition: ProductosInput!) {
    GetProductos(condition: $condition) {
      ID_PRODUCTO
      ID_CLASIFICACION
      DESC_PRODUCTO
      UNIDAD
      NOMBRE
    }
  }
`;

const QUERY_GET_OFERTA_PRODUCTOS = gql`
  query GetOfertasProductos($condition: OfertasProductosInput!) {
    GetOfertasProductos(condition: $condition) {
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

const QUERY_GET_FACTURA_ENC = gql`
  query GetEmFacturaEnc($condition: GetEmFacturaEncInput!) {
    GetEmFacturaEnc(condition: $condition) {
      ID_DOCUMENTO
      ID_EMPRESA
      ID_TIPO_TRANS
      ID_CLIENTE
      NOMBRE_CLIENTE
      CIUDAD_PROVINCIA
      MONTO_BRUTO
      MONTO_NETO
      PORC_DESCUENTO
      MONTO_DESC
      MONTO_IMPUESTOS
      MONTO_GRAVADO
      MONTO_EXENTO
      ESTADO_DOCUMENTO
      ESTADO
      NOTAS
      REALIZADO_POR
      RECIBIDO_POR
      ID_CONDICION
      AUT_ORDEN_COMPRA
      AUT_CAMB_PRECIO
      COD_TRANSPORTE
      APELLIDOS_CTE
      TASA_MONEDA
      ID_MONEDA
      NCF_FIJO
      SEC_NCF
      ID_TIPO_NCF
      RNC
      FECHA_FACTURA
      CAL_DESC
      TASA_IMP
      DEVUELTA
      NO_TRANSACCION
      FECHA_VENC
      ID_PERSONAL_FACTURADOR
      ID_EMPLEADO_REP
      ID_PERSONAL_DESP
      DESPACHADA
      FECHA_DESP
      ID_PEDIDO
      ID_TIPO_TRANS_PED
      ID_REP_VEN
      FECHA_ANULACION
      DIAS
      MONTO_COMISION
      MONTO_COMISION_PAGADA
      MONTO_INICIAL
      NO_PAGOS
      FRECUENCIA_PAGOS
      BULTOS
      RAZON_SOCIAL
      ID_TIPO_TRANS_CONDUCE
      ID_CONDUCE
      IMPUESTO_RETENIDO
      PORC_IMP_RETENIDO
      ID_TIPO_ANULACION
      DESC_PAGO
      FECHA_ULT_INTERES
      MONTO_DESC_FACTURA
      NOTA_COMENTARIO
      FECHA_ENTREGA
      ENTREGADA
      FACT_CORTESIA
    }
  }
`;

const QUERY_GET_FACTURA_DETAIL = gql`
  query GetOneEmFacturaProductos($condition: GetOneEmFacturaProductosInput!) {
    GetOneEmFacturaProductos(condition: $condition) {
      ID_DOCUMENTO
      ID_EMPRESA
      ID_TIPO_TRANS
      ID_CLIENTE
      NOMBRE_CLIENTE
      DIRECCION_LINEA1
      DIRECCION_LINEA2
      CIUDAD_PROVINCIA
      PAIS
      MONTO_BRUTO
      MONTO_NETO
      PORC_DESCUENTO
      MONTO_DESC
      MONTO_IMPUESTOS
      MONTO_GRAVADO
      MONTO_EXENTO
      ESTADO_DOCUMENTO
      ESTADO
      ID_PERSONAL_VENDEDOR
      RECIBIDO_POR
      ID_CONDICION
      RECIBIDO
      DEVUELTO
      AUT_CAMB_PRECIO
      COD_TRANSPORTE
      APELLIDOS_CTE
      TASA_MONEDA
      ID_MONEDA
      NCF_FIJO
      SEC_NCF
      ID_TIPO_NCF
      RNC
      FECHA_FACTURA
      CAL_DESC
      FECHA_VENC
      ID_EMPLEADO_REP
      ID_PERSONAL_DESP
      DESPACHADA
      FECHA_DESP
      ID_PEDIDO
      ID_TIPO_TRANS_PED
      ID_REP_VEN
      FECHA_ANULACION
      MONTO_COMISION
      MONTO_COMISION_PAGADA
      MONTO_INICIAL
      NO_PAGOS
      products {
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
  }
`;

const QUERY_GET_PROSPECTOS = gql`
  query GetEmCrmProspecto($condition: GetEmCrmProspectosInput!) {
    GetEmCrmProspecto(condition: $condition) {
      ID_EMPRESA
      CEDULARNC
      NOMBRES
      APELLIDOS
      TIPO_ORGANIZACION
      TIPO_PROSPECTO
      PASAPORTE
      APODO
      ID_PROVINCIA
      ID_MUNICIPIO
      ID_SECTOR
      ID_VIA
      EMAIL
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
      ESTADO
      SEXO
      ESTADO_CIVIL
      FECHA_NACIMIENTO
      TIPO_LICENCIA
      ID_PAIS
      PEPS
      CARGO
      VINCULADO_A
    }
  }
`;

const QUERY_GET_CLASIF_VARIEDAD = gql`
  query GetEmClasifVariedad($condition: GetClasifVariedadInput!) {
    GetEmClasifVariedad(condition: $condition) {
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
const QUERY_CRM_PROSPECTO = gql`
  query GetEmCrmProspecto($condition: GetEmCrmProspectosInput!) {
    GetEmCrmProspecto(condition: $condition) {
      ID_EMPRESA
      NOMBRES
      APELLIDOS
      WHASTSAPP
      DESCRIPCION
      ID_CHAT
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
    }
  }
`;

const QUERY_SUB_CLASIF_DATA = gql`
  query GetEmSubClasifData($condition: SubClasifDataInput!) {
    GetEmSubClasifData(condition: $condition) {
      ID_SUB_CLASIF_DATA
      ID_EMPRESA
      NOMBRE
      OBSERVACION
      DESCRIPCION
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
      VALUETYPE
    }
  }
`;

const QUERY_SUB_CLASIFICACION = gql`
  query GetEmSubClasificacion($condition: ProductoClasifInput!) {
    GetEmSubClasificacion(condition: $condition) {
      ID_CLASIFICACION
      ID_SUB_CLASIF
      ID_EMPRESA
      NOMBRE
      OBSERVACION
      DESCRIPCION
      ESTADO
      FECHA_INSERCION
      USUARIO_INSERCION
      FECHA_ACTUALIZACION
      USUARIO_ACTUALIZACION
      VALUETYPE
      ID_SUB_CLASIF_DATA
    }
  }
`;

export {
  QUERY_BANNERS,
  QUERY_PRODUCTO_CLASIFICACION,
  QUERY_PRODUCTO_DESTACADO,
  QUERY_OFERTAS_PRODUCTOS,
  QUERY_PRODUCTOS_MAS_POPULARES,
  QUERY_PRODUCTOS_CARRITO_COMPRAS,
  QUERY_PERFIL,
  QUERY_PRODCUTOS_DETALLES,
  QUERY_CONSULTA_WISHLIST,
  QUERY_CONSULTA_CARRITO_COMP,
  QUERY_CONSULTA_DIRECCIONES,
  QUERY_CONSULTA_CUENTA_PAGO,
  QUERY_CONSULTA_SUMMARY_PRODUCT_CHEKOUT,
  QUERY_FACTURA_PRODUCTOS,
  QUERY_EMPRESA,
  QUERY_CONSULTA_REDES_SOCIALES,
  QUERY_PRODUCTO_CATEGORIA,
  QUERY_PRODUCTOS_BUSCADOR,
  QUERY_GET_OFERTA_PRODUCTOS,
  QUERY_GET_FACTURA_ENC,
  QUERY_GET_FACTURA_DETAIL,
  QUERY_GET_PROSPECTOS,
  QUERY_GET_CLASIF_VARIEDAD,
  QUERY_ADD_PRODUCTOS,
  QUERY_CRM_PROSPECTO,
  QUERY_TOTAL_OFERTAS_DETALLE,
  QUERY_SUB_CLASIF_DATA,
  QUERY_SUB_CLASIFICACION,
};
