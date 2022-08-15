import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import auth from "./auth";
import forum from "./forum";

const reducer = combineReducers({
  auth,
  forum
});
const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
const store = createStore(reducer, middleware)

export default store
