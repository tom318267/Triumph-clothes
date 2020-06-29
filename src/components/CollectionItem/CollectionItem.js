import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../CustomButton/CustomButton";
import "./CollectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="CollectionItem">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span style={price > 99 ? { width: "15%" } : null} className="price">
          {price}
        </span>
      </div>
      <CustomButton onClick={() => addItem(item)}>ADD TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
