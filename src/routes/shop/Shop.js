import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.action";

import AllCategoriesPreview from "../all-categories-preview/AllCategoriesPreview";
import Category from "../category-page/Category";

import SHOP_DATA from "../../utils/shopData";

import "./Shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories(SHOP_DATA));
  }, []);

  return (
    <Routes>
      <Route index element={<AllCategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
