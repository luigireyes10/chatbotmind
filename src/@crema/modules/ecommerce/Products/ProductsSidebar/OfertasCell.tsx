import React, { useState } from "react";
import { Checkbox } from "antd";
import { StyledProductSideCheckedCell } from "./index.styled";

type Props = {
  selected: string[];
  //data: any;
  onChange: (transformedDataOfertaDetalle: string) => void;
  transformedDataOfertaDetalle: any;
};

const OfertasCell = ({
  selected,
  transformedDataOfertaDetalle,
  // data,
  onChange,
}: Props) => {
  console.log(selected);

  console.log(transformedDataOfertaDetalle);

  const data = { id: "1", name: "Total Ofertas" };

  const handleClick = () => {
    onChange(transformedDataOfertaDetalle);
  };

  return (
    <>
      <StyledProductSideCheckedCell onClick={() => onChange(data.id)}>
        <Checkbox checked={selected?.some((item) => item === data.id)} />
        <p className="mb-0">{data.name}</p>
      </StyledProductSideCheckedCell>
    </>
  );
};

export default OfertasCell;
