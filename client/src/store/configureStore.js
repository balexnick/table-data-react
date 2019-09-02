import { createStore, applyMiddleware } from "redux";
import { rootReduser } from "../redusers/redusers";
// import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(rootReduser, applyMiddleware(thunk));
// ,logger
