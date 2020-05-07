import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../store/reducer";

import createSagaMiddleware from "redux-saga";
import mySagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const windows: any = window;

const composeEnhancers = windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySagas);

export default store;
