import React from "react";
import { useIntl } from "react-intl";
import MainFeed from "@crema/modules/ecommerce/Home/MainFeed";
import Feed from "@crema/modules/ecommerce/Home/Feed";
import AppPageMeta from "@crema/components/AppPageMeta";
import { ProductDataFilterType } from "@crema/types/models/ecommerce/EcommerceApp";

const Home = () => {
   
  return (
    <>
      <AppPageMeta>
        <MainFeed />
        <Feed filterData={{
          title: "emedia",
          brand: [],
          ideaFor: [],
          discount: [],
          color: [],
          rating: []
        }} viewType={""} setViewType={function (viewType: string): void {
          throw new Error("Function not implemented.");
        } } setFilterData={function (filterData: ProductDataFilterType): void {
          throw new Error("Function not implemented.");
        } } />
      </AppPageMeta>
    </>
  );
};

export default Home;
