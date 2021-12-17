import React from "react";
import { Route, Routes, useParams } from "react-router-dom";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
//import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = (params) => {
  params = useParams();
  
  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/" element={<CollectionsOverviewWithSpinner />} />
        {/* <Route path="/collectionId" element={<CollectionPage />} /> */}
      </Routes>
    </div>
  );
};

export default ShopPage;