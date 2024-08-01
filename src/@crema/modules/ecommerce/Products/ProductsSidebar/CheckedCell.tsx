import React from "react";
import { Checkbox } from "antd";
import { StyledProductSideCheckedCell } from "./index.styled";

type Props = {
  selected: string[];
  data: any;
  onChange: (dataFixed: string) => void;
};

const CheckedCell = ({ selected, data, onChange }: Props) => {
  //console.log(data);
  console.log(selected);

  console.log(data);

  return (
    <>
      <StyledProductSideCheckedCell
        key={data.id}
        onClick={() => onChange(data.id)}
      >
        <Checkbox checked={selected?.some((item) => item === data.id)} />
        <p className="mb-0">{data.name}</p>
      </StyledProductSideCheckedCell>
    </>
  );
};

export default CheckedCell;
