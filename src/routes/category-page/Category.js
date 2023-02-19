import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import ProductCard from "../../components/productCard/ProductCard";

import "./Category.styles.scss";

const Category = () => {
  const { category } = useParams();
  console.log("render/re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);

  const [prodcuts, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("Effect fired calling setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 style={{ textAlign: "center", textTransform: "capitalize" }}>
        {category}
      </h2>
      <div className="category-page-container">
        {prodcuts &&
          prodcuts.map((prodcut) => (
            <ProductCard key={prodcut.id} product={prodcut} />
          ))}
      </div>
    </>
  );
};

export default Category;
