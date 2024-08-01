import React, { useState } from "react";
import DealsTable from "./DealsTable";
import { useIntl } from "react-intl";
import AppCard from "@crema/components/AppCard";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppSelect from "@crema/components/AppSelect";
import { StyledFlexContainer, StyledTitle } from "./index.styled";
import { DealsTableDataType } from "@crema/types/models/dashboards/CRM";

import DealsTable1 from "modules/CustomComponents/CustomDealsTable";

type Props = {
  dealsTableData: DealsTableDataType[];
  dataproduct: any
};
const Deals = ({ dealsTableData = [] , dataproduct }: Props) => {
  const [tableData, setTableData] = useState(dealsTableData);

  const [tableDataProp, setTableDataProd] = useState(dataproduct);

  const onDealChange = (value: string) => {
    if (value === messages["todo.completed"]) {
      setTableData(
        dealsTableData.filter((data) => data.progress === "Approved")
      );
    } else if (value === messages["common.pending"]) {
      setTableData(
        dealsTableData.filter((data) => data.progress === "Pending")
      );
    } else {
      setTableData(dealsTableData);
    }
  };

  const { messages } = useIntl();

  console.log(dataproduct)

  return (
    <AppCard
      title={
        <StyledFlexContainer>
          <StyledTitle level={5}>
            <IntlMessages id="dashboard.crm.products" />
          </StyledTitle>
        </StyledFlexContainer>
      }
      className="no-card-space-ltr-rtl"
      extra={
        <AppSelect
          menus={[
            messages["common.all"],
            messages["todo.completed"],
            messages["common.pending"],
          ]}
          defaultValue={messages["common.all"]}
          onChange={onDealChange}
        />
      }
    >
     

       <hr />
    
       <DealsTable1 
      dealsTableData={tableData}
      dataproduct={dataproduct}
       />

      
    </AppCard>
  );
};

export default Deals;
