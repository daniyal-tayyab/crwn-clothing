import { createStore, compose, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// currying function, a function that returns us another function.
/*
    const curryFun = (a) => (b, c) => {
        return a + b - c;
    }

    const with3 = curryFun(3);
    with3(5, 7);
*/

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currnetState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

const middlewares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
