export type BrandDataType = {
  id: number;
  name: string;
};

export type ProductColorsType = {
  BLUE: string;
  GREY: string;
  PARROT: string;
  LIGHT_PINK: string;
  PINK: string;
};

export type IdealForType = {
  id: number;
  name: string;
};

export type AddressesType = {
  ZIP_CODE: ReactNode;
  ID_CIUDAD: ReactNode;
  ID_SECTOR: ReactNode;
  ID_PAIS: ReactNode;
  id: number;
  name: string;
  mobile: string;
  addressLine: string;
  city: string;
  pin: string;
};

export type MetodoPagoType = {
  ID_CUENTA: string;
  ID_EMPRESA: string;
  NUM_CUENTA: string;
  TIPO_CUENTA: string;
  DESC_CUENTA: string;
  ESTADO: string;
  NUM_CVV: string;
  NOMBRE_CUENTA: string;
};

export type DiscountListType = {
  id: number;
  name: string;
};

export type CartItemsType = {
  id: number;
  product: {
    brand?: number | string;
    image: string;
    title: string;
  };
  price: {
    mrp: string;
    discount: string;
  };
  total: {
    mrp: string;
    discount: string;
    count: number;
  };
  count: number;
};

export type ProductDataFilterType = {
  title: string;
  brand: number[];
  ideaFor: string[];
  discount: number[];
  color: number[];
  rating: number[];
  category: number[];
  price: number[];
};

export type ProductMainDataType = {
  id: number;
  title: string;
  description: string;
  price?: string;
  mrp: string;
  discount: string;
  rating: number;
  ideaFor?: number;
  brand?: number;
  color?: string;
  reviews: number;
  image: FileType[];
  category?: number;
};
export type ProductDataType = {
  VENTAS: any;
  NOMBRE: ReactNode;
  DESC_PRODUCTO: string;
  DEFAULT_RUTA_DOC: string;
  ICONO_PRODUCTO: string;
  ID_PRODUCTO: any;
  id: number;
  title: string;
  createdAt?: string;
  description: string;
  price?: string;
  mrp: number;
  state: string;
  discount: string;
  rating: number;
  ideaFor?: number;
  brand?: number;
  color?: string;
  reviews: number;
  inStock: boolean;
  image: FileType[];
  category?: number;
  SKU?: string;
  productInfo?: ProductInfoType[];
  productSpec?: ProductInfoType[];
  tag?: TagType[];
};

export type CustomProductDataType = {
  ID_PRODUCTO: string;
  ID_EMPRESA: string;
  DESC_PRODUCTO?: string;
  UNIDAD: string;
  COSTO_RD?: string;
  CANTIDAD_REORDEN: string;
  UNIDAD_REORDEN: string;
  ESTADO: string;
  VENTAS: string;
  mrp: number;
  discount: string;
  EM_DOC_IMAGE: CustomFileType[];
};

export type ProductInfoType = {
  FECHA_FIN_OFERTA: string | number | readonly string[];
  FECHA_INICIO_OFERTA: string | number | readonly string[];
  ID_PRODUCTO: string | number | readonly string[];
  POR_DESCUENTO: string | number | readonly string[];
  ID_OFERTA_PROD: string | number | readonly string[];
  DESC_OFERTA: string;
  INF_PROMOCIONAL: string;
  FOTO_PROMOCIONAL: string | number | readonly string[];
  id: number;
  title: string;
  desc: string;
  IMAGE_HOVER: any;
};

export type TagType = {
  id: number;
  name: string;
};

export type RecentOrdersType = {
  id: string;
  customer: string;
  product: string;
  date: string;
  paymentType: string;
  price: string;
  status: string;
};

export type FilterDataType = {
  title: string;
  page?: string | number;
  brand: number[];
  ideaFor: number[];
  discount: number[];
  color: any[];
  rating: number[];
};

export type FilterType = {
  title: string;
  inStock: boolean[];
  mrp: { start: number; end: number };
  createdAt?: { start?: string; end?: string };
};

export type CustomersDataType = {
  id: number;
  name: string;
  email: string;
  lastItem: string;
  lastOrder: string;
  rating: string;
  balance: string;
  address: string;
  joinDate: string;
};

export enum VIEW_TYPE {
  LIST = 1,
  GRID = 2,
}

export type FileType = Partial<File> & {
  preview?: string;
  path?: string;
  src?: string;
  id?: number;
  imagen_hover?: string;
};

export type CustomFileType = Partial<File> & {
  ID_EMPRESA?: string;
  ID_ADJUNTO?: string;
  ESTADO?: string;
  ORDEN_DOC?: string;
  TIPO_DOCUMENTO?: string;
  RUTA_DOCUMENTO?: string;
  OBSERVACION?: string;
};

export type ProductCartItemsType = {
  id: number;
  title: string;
  mrp: number;
  discount: string;
  brand?: number | string;
  image: string;
  count: number;
  createdAt?: string;
  description: string;
  price?: string;
  rating?: number;
  ideaFor?: number;
  color?: string;
  reviews?: number;
  inStock?: boolean;
  category?: number;
  SKU?: string;
  productInfo?: ProductInfoType[];
  productSpec?: ProductInfoType[];
  tag?: TagType[];
};

export type FacturaProducto = {
  itemTitle: ReactNode;

  ID_TIPO_TRANS: string;
  ID_DOCUMENTO: string;
  ID_EMPRESA: string;
  ID_PRODUCTO: string;
  COD_BARRA: string;
  ID_IMPUESTO: string;
  SECUENCIA: number;
  DESCRIPCION_PRODUCTO: string;
  CANTIDAD: number;
  UNIDAD: string;
  PRECIO: number;
  PORC_DESCUENTO: number;
  MONTO_IMPUESTO: number;
  COSTO_COMPRA: number;
  MONTO_DESCUENTO: number;
  IMPORTE: number;
  ESTADO: string;
  FECHA_INSERCION: Date;
  USUARIO_INSERCION: string;
  FECHA_ACTUALIZACION: Date;
  USUARIO_ACTUALIZACION: string;
  ID_UBICACION: string;
  IMPORTE_ITBIS: number;
  PRECIO_VENTA: number;
  ART_OFERTA: string;
  ID_CANAL_PRECIO: string;
  PRECIO_LIQUIDADO: number;
  MONTO_EXONERADO: number;
  ID_PERSONAL_VENDEDOR_MOD: string;
  ID_INVENTARIO: number;
  CANTIDAD_REFERENCIA: number;
  UNIDAD_REFERENCIA: string;
  PRECIO_NETO: number;
  CANT_DESPACHADA: number;
  CANTIDAD_PEDIDO: number;
  PRECIO_PEDIDO: number;
  REGALO: boolean;
  COMISION_VENTA: number;
  MONTO_EXENTO: number;
  MONTO_GRAVADO: number;
  PRECIO_BRUTO: number;
  DESCUENTO: number;
  PRECIO_FINAL_SIN_IMPUESTOS: number;
  IMPUESTO: number;
  PORC_IMPUESTO: number;
  GRAVADO: number;
  EXENTO: number;
  ID_BULTO: string;
  EVENTO: number;
  NO_EVENTO: string;
  PRECIO_FINAL_CON_IMPUESTOS: number;
  TR_ORIGEN: number;
  ENTREGA_CON_CONDUCE: number;
  COSTO_CON_ITBIS: number;
  COSTO_SIN_ITBIS: number;
  OFERTA: number;
  OBSERVACIONES: string;
  COD_VENDEDOR_ACT: string;
  ID_REP_VEN: string;
  COBERTURA_SEGURO: number;
  TASA_EXONERACION: number;
  DESCUENTO_OFERTA: number;
  PORC_DESC_OFERTA: number;
  ID_MARCA: number;
  PORC_CARGO: number;
  MONTO_CARGO: number;
  FECHA_FACTURA: Date;
  ID_TIPO_TRANS_EVENTO: string;
  ID_TIPO_TRANS_ALM: string;
  ID_TRANSACCION_ALM: string;
  MONTO_IMP_DESC: number;
  PORC_IMP_RETENIDO: number;
  MONTO_IMP_RETENIDO: number;
  ID_SEC_ENTRADA_COSTO: number;
  CANTIDAD_OFERTA: number;
  ID_OFERTA: string;
};
