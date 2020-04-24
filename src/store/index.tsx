import { createStore } from "redux";
import { TodoListReducer } from "./reducer";

const windows: any = window;

export const TodoListStore = createStore(
  TodoListReducer,
  windows.__REDUX_DEVTOOLS_EXTENSION__ &&
    windows.__REDUX_DEVTOOLS_EXTENSION__(),
); // 创建数据存储仓库
