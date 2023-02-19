import { createSelector } from "reselect"; // for memoization.

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, categoryObj) => {
      const { title, items } = categoryObj;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

// before memoization

// export const selectCategoriesMap = (state) => {
//   console.log("category selector fired");
//   return state.categories.categories.reduce((acc, categoryObj) => {
//     const { title, items } = categoryObj;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
// };
