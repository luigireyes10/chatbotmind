import React, { useEffect, useState } from "react";
// import { Slider } from "antd";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  StyledProductSideCheckedCell,
  StyledProductSidebarPriceSelector,
} from "./index.styled";

type Props = {
  selected?: string[];
  data?: any;
  onChange?: (selected) => void;
  transformedDataVentas: any;
  maxVentas: any;
  minVentas: any;
};

const PriceSelector = ({
  selected,
  data,
  maxVentas,
  minVentas,
  transformedDataVentas,
  onChange,
}: Props) => {
  console.log(minVentas);
  console.log(maxVentas);

  const [value, setValue] = useState<[number, number]>([0, maxVentas]);
  const stringValue = value.map((num) => num.toString());

  useEffect(() => {
    setValue([0, maxVentas]);
  }, [maxVentas]);

  const handleChange = (value: [number, number]) => {
    setValue(value);
    onChange(selected);
  };
  // const onChangeComplete = (value: [number | number]) => {
  //   onChange(selected);
  //   setValue(value);
  //   console.log("onChangeComplete: ", value);
  // };

  selected = stringValue;

  console.log(selected);
  const [selectId, setSelectId] = useState();
  console.log(value);

  return (
    <>
      <Slider
        range
        min={0}
        max={maxVentas}
        step={10}
        onChangeComplete={handleChange}
        defaultValue={[100, 1000]}
      />

      <StyledProductSidebarPriceSelector>
        <span>$ {value[0]}</span>
        <span>$ {value[1]}</span>
      </StyledProductSidebarPriceSelector>
    </>
  );
};

export default PriceSelector;
