import React, { useState } from "react";
import AppList from "@crema/components/AppList";
import AddressCell from "./AddressCell";
import { addresses } from "@crema/mockapi/fakedb";

const DeliveryAddress = ({dirreccion , selectedAddress , setSelectAddress}) => {


  console.log('dirreccion', dirreccion)

 // const [selectedAddress, setSelectAddress] = useState<any[]>([]);
  return (
    <AppList
      delay={200}
      data={dirreccion}
      renderItem={(address) => (
        <AddressCell
 
          address={address}
          selectedAddress={selectedAddress}
          setSelectAddress={setSelectAddress}
        />
      )}
    />
  );
};

export default DeliveryAddress;
