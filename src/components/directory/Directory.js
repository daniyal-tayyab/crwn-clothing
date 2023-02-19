import React from "react";
import CategoryItem from "../category-item/CategoryItem";

import "./Directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export default Directory;
