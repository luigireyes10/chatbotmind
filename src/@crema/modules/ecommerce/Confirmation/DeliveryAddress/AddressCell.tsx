import React from "react";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import {
  StyledDeliveryAddrCell,
  StyledDeliveryAddressItem,
  StyledDeliveryAddrRow,
  StyledDeliveryEditBtn,
  StyledDeliveryRadio,
} from "./index.styled";
import type { AddressesType } from "@crema/types/models/ecommerce/EcommerceApp";

type Props = {
  address?: AddressesType | any;
  selectedAddress?: AddressesType | any;
  setSelectAddress: (data: AddressesType) => void;
};
const AddressCell = ({ address, selectedAddress, setSelectAddress }: Props) => {
  const isActive = selectedAddress?.id === address.id;
  console.log('address', address);
  return (
    <StyledDeliveryAddrCell
      onClick={() => setSelectAddress(address)}
      className="item-hover"
    >
      <StyledDeliveryAddrRow>
        <StyledDeliveryRadio checked={isActive}>
          {address?.ID_CLIENTE}
        </StyledDeliveryRadio>
        <p className="mb-0">{address?.ESTADO}</p>
        {isActive ? (
          <StyledDeliveryEditBtn size="small">
            <EditOutlined />
          </StyledDeliveryEditBtn>
        ) : null}
      </StyledDeliveryAddrRow>
      <StyledDeliveryAddressItem>
        {address?.ID_PAIS}, {address?.ID_CIUDAD}, {address?.ID_SECTOR} , {address?.ZIP_CODE}
      </StyledDeliveryAddressItem>
      {isActive ? (
        <StyledDeliveryAddressItem>
          <Button type="primary">Deliver Here</Button>
        </StyledDeliveryAddressItem>
      ) : null}
    </StyledDeliveryAddrCell>
  );
};

export default AddressCell;
