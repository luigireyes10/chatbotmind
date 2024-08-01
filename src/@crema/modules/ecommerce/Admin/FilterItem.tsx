import AppCard from "@crema/components/AppCard";
import React, { useEffect, useState } from "react";
import AppRowContainer from "@crema/components/AppRowContainer";
import dayjs from "dayjs";
import { Col, DatePicker, InputNumber, Select, Switch } from "antd";
import { StyledFormWrapper } from "./index.styled";
import { FilterType } from "@crema/types/models/ecommerce/EcommerceApp";

const { Option } = Select;

const statusList = [
  {
    id: 1,
    name: "A",
    value: true,
    value2: "A",
  },
  
  {
    id: 2,
    name: "I",
    value: false,
    value2: "I",
  },
];

type Props = {
  filterData: FilterType | any;
  setFilterData: React.Dispatch<React.SetStateAction<FilterType>> | any;
};

const Filter = ({ filterData, setFilterData }: Props) => {
  console.log(filterData);
  const [inputValues, setInputValues] = useState({
    start: 0,
    end: 0,
    startDate: null,
    endDate: null,
  });

 
  const handlePressEnter = () => {
    setFilterData((prev) => {
      const newMrp = { start: inputValues.start, end: inputValues.end };
      const newCreatedAt = { startDate: inputValues.startDate, endDate: inputValues.endDate };
      
      const updatedData = {
        ...prev,
        mrp: newMrp,
        createdAt: newCreatedAt,
      };
      
      if (newMrp.start === 0 || newMrp.end === 0) {
        updatedData.title = '';
        updatedData.inStock = true;
        updatedData.ESTADO = 'A';
      }
      
      return updatedData;
    });
  };


  const handleNumberChange = (value, field) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: value ? +value : 0,
    }));
  };

  

  const handleDateChange = async (value, field) => {
    const formattedDate = value ? dayjs(value).format("YYYY-MM-DD") : null;

    setInputValues((prev) => ({
      ...prev,
      [field]: formattedDate,
    }));

    setFilterData((prev) => {
      const newCreatedAt = { ...prev.createdAt, [field]: formattedDate };
      const updatedData = { ...prev, createdAt: newCreatedAt };

      return updatedData;
    });
  };


  return (
    <AppCard title="Filtro ">
      <StyledFormWrapper>
        <AppRowContainer>
          <Col xs={24}>
            <Select
              placeholder="Estado"
              onChange={(value) => {

                setFilterData((prev) => ({
                 
                  
                  ...prev,
                  ESTADO: value,
                }));
              }}
            >
              {statusList.map((status) => (
                <Option key={status.value2} value={status.value2}>
                  {status.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} md={12}>
            <InputNumber
              placeholder="Precio de salida"
              onChange={(value) => handleNumberChange(value, 'start')}
              onPressEnter={handlePressEnter}
              
            />
          </Col>
          <Col xs={24} md={12}>
            <InputNumber
              placeholder="Precio final"
              onChange={(value) => handleNumberChange(value, 'end')}
              onPressEnter={handlePressEnter}
            />
          </Col>
          <Col xs={24} md={12}>
            <DatePicker
              //defaultValue={filterData?.createdAt?.start as any}
              value={inputValues.startDate ? dayjs(inputValues.startDate, "YYYY-MM-DD") : null}
              allowClear={false}
              onChange={(value) => handleDateChange(value, 'startDate')}
              //onPressEnter={handlePressEnter}
            />
          </Col>
          <Col xs={24} md={12}>
            <DatePicker
              //defaultValue={filterData?.createdAt?.end as any}
              value={inputValues.endDate ? dayjs(inputValues.endDate, "YYYY-MM-DD") : null}
              allowClear={false}
              onChange={(value) => handleDateChange(value, 'endDate')}
            />
          </Col>
          {/* <Col xs={24}>
            <Switch />
            <span className="notification">Notificaciones</span>
          </Col> */}
        </AppRowContainer>
      </StyledFormWrapper>
    </AppCard>
  );
};

export default Filter;
