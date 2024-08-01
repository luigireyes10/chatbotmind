import React from "react";
import AppList from "@crema/components/AppList";
import AddressCell from "./AddressCell";

const DeliveryAddress = ({ direccion, setSelectAddress }) => {
  console.log('direccion', direccion);

  return (
    <AppList
      delay={200}
      data={direccion}
      renderItem={(address) => (
        <AddressCell
          key={address?.ID_USER}
          address={address}
          selectedAddress={setSelectAddress} // Replace 'selectedAddress' with 'setSelectAddress'
          setSelectAddress={setSelectAddress}
        />
      )}
    />
  );
};

export default DeliveryAddress;
