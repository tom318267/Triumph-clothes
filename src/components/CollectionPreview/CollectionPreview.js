import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="CollectionPreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
