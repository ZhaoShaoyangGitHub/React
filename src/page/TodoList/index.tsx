import React, { Component } from "react";
import { Store } from "@/store/index";
import {
  changeInputAction,
  addItemAction,
  deletItemAction,
  getTodoList,
} from "@/store/actionCreators";

import TodoListUi from "./TodoListUi";

interface stateType {
  inputValue: string;
  list: string[];
}

class TodoList extends Component<props, stateType> {
  constructor(props: any) {
    super(props);
    this.state = Store.getState();
    Store.subscribe(this.TodoListStoreChange); //订阅Redux的状态
  }

  componentDidMount() {
    const action = getTodoList();
    Store.dispatch(action);
  }

  TodoListStoreChange = () => {
    const data = Store.getState();
    this.setState(data);
  };

  changeInputValue = (event: any) => {
    // this.setState({
    //   inputValue: event.target.value,
    // });

    // const action = {
    //   type: CHANGE_INPUT,
    //   value: event.target.value,
    // };
    Store.dispatch(changeInputAction(event.target.value));
  };

  addListItem = () => {
    Store.dispatch(addItemAction());
  };

  deletKListItem = (index: number) => {
    Store.dispatch(deletItemAction(index));
  };

  render() {
    const { list, inputValue } = this.state;
    return (
      <TodoListUi
        inputValue={inputValue}
        list={list}
        changeInputValue={this.changeInputValue}
        addListItem={this.addListItem}
        deletKListItem={this.deletKListItem}
      />
    );
  }
}

export default TodoList;
