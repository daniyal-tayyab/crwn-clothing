import React from "react";
import { Link } from "react-router-dom";

import "./CategoryItem.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <Link to={`/shop/${title}`}>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
