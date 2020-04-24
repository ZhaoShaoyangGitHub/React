import React, { Component } from "react";
import { Input, Button, List } from "antd";
import { TodoListStore } from "@/store/index";

interface stateType {
  inputValue: string;
  list: string[];
}

class TodoList extends Component<props, stateType> {
  constructor(props: any) {
    super(props);
    this.state = TodoListStore.getState();
    TodoListStore.subscribe(this.TodoListStoreChange); //订阅Redux的状态
  }

  TodoListStoreChange = () => {
    const data = TodoListStore.getState();
    this.setState(data);
  };

  changeInputValue = (event: any) => {
    // this.setState({
    //   inputValue: event.target.value,
    // });
    const action = {
      type: "change_input_value",
      value: event.target.value,
    };
    TodoListStore.dispatch(action);
  };

  render() {
    const { list, inputValue } = this.state;
    return (
      <div>
        <Input
          placeholder="placeholder"
          value={inputValue}
          onChange={this.changeInputValue}
          style={{ width: "250px", marginRight: "10px" }}
        />
        {<Button type="primary">增加</Button>}
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={list}
            renderItem={(item) => {
              return <List.Item>{item}</List.Item>;
            }}
          ></List>
        </div>
      </div>
    );
  }
}

export default TodoList;
