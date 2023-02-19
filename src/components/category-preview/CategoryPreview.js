import React from "react";

import { useNavigate } from "react-router-dom";

import "./CategoryPreview.styles.scss";

import ProductCard from "../productCard/ProductCard";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`${title}`);
  };

  return (
    <div className="category-preview-container">
      <h2>
        <span className="category-preview-title" onClick={goToCategory}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="category-preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
