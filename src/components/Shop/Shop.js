import React from "react";
import SHOP_DATA from "./ShopData";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

class Shop extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="Shop">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
