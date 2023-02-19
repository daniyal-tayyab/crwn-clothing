import { CATEGORY_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducers/reducer.utils";

export const setCategories = (categoriesMap) => {
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesMap);
};
