import React, { useState } from "react";
import AppCard from "@crema/components/AppCard";
import RecentContact from "./RecentContact";
import AppScrollbar from "@crema/components/AppScrollbar";
import CoinDropdown from "./CoinDropdown";
import { useIntl } from "react-intl";
import {
  StyledAmountTag,
  StyledAmountWrapper,
  StyledCoinInput,
  StyledCoinWrapper,
  StyledFlexWrapper,
  StyledRecentContact,
  StyledSecondaryText,
} from "./index.styled";
import { Button } from "antd";
import { QuickTransferType } from "@crema/types/models/dashboards/Crypto";

type Props = {
  quickTransfer: QuickTransferType;
};


const QuickTransfer = ({ quickTransfer }: Props) => {
  console.log('quickTransfer', quickTransfer)
  const [selectedCoinId, setSelectedCoinID] = useState(
    quickTransfer.coinList[0].id
  );

  const selectedCoin = () => {
    return quickTransfer.coinList.find((coin) => coin.id === selectedCoinId);
  };
  const handleCoinChange = (value: any) => {
    setSelectedCoinID(value);
  };
  const coin = selectedCoin();
  const { messages } = useIntl();
  return (
    <AppCard>
     
      <StyledAmountWrapper>
       
        <AppScrollbar>
          <StyledFlexWrapper>
            {quickTransfer.recentContact.map((contact, index) => (
              <StyledRecentContact key={index}>
                <RecentContact recentContact={contact} />
              </StyledRecentContact>
            ))}
          </StyledFlexWrapper>
        </AppScrollbar>
      </StyledAmountWrapper>
      <div
        style={{
          textAlign: "left",
        }}
      >
        <Button size="large" type="primary">TRANSFER NOW</Button>
      </div>
    </AppCard>
  );
};

export default QuickTransfer;
