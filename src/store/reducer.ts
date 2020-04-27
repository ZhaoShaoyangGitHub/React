import { CHANGE_INPUT, ADD_ITEM, DELET_ITEM, GET_LIST } from "./actionType";

const TodoListState: any = {
  inputValue: "Write Something",
  list: ["早上4点起床，锻炼身体", "中午下班游泳一个小时", "晚上刷剧一小时"],
}; //默认数据

const Reducer = (state = TodoListState, action: any) => {
  if (action.type === CHANGE_INPUT) {
    const newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    return newState;
  }
  if (action.type === DELET_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === GET_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list; //复制性的List数组进去
    return newState;
  }
  return state;
};

export default Reducer;
