import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducers/reducer.utils.js";

import SHOP_DATA from "../utils/shopData.js";

const getCategoriesMap = () => {
  const categoryMap = SHOP_DATA.reduce((acc, categoryObj) => {
    const { title, items } = categoryObj;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CATEGORY_ACTION_TYPES = {
  SET_CATEGORY_MAP: "SET_CATEGORY_MAP",
};

const INITAL_STATE = {
  categoriesMap: {},
};

const categoryReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in category reducer`);
  }
};

export const CategoriesProvider = ({ children }) => {
s
  const [{ categoriesMap }, dispatch] = useReducer(
    categoryReducer,
    INITAL_STATE
  );

  const setCategoriesMap = () => {
    dispatch(
      createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, getCategoriesMap())
    );
  };

  useEffect(() => {
    setCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
