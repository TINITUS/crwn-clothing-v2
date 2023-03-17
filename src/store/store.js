import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { RootReducer } from "./root-reducer";

// root-reducer
const middleWare = [logger];

const composedEnchancers = compose(applyMiddleware(...middleWare));

export const store = createStore(RootReducer, undefined, composedEnchancers);
