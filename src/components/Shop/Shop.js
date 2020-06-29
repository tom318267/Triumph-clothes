import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection";

const Shop = ({ match }) => {
  return (
    <div className="Shop">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
