import React from "react";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import "./CollectionsOverview.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="CollectionsOverview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
