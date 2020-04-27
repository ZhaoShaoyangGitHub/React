import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

const windows: any = window;

const composeEnhancers = windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const Store = createStore(Reducer, enhancer); // 创建数据存储仓库.单项数据源，唯一性
