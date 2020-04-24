const TodoListState: any = {
  inputValue: "Write Something",
  list: ["早上4点起床，锻炼身体", "中午下班游泳一个小时"],
}; //默认数据

const TodoListReducer = (state = TodoListState, action: any) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }
  return state;
};

export { TodoListReducer };
