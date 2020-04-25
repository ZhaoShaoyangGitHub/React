import React, { Component } from "react";
import { Input, Button, List } from "antd";

interface propsState {
  inputValue: string;
  list: Array<any>;
  changeInputValue: Function;
  addListItem: Function;
  deletKListItem: Function;
}

const TodoListUi = (
  props: propsState = {
    inputValue: "",
    list: [],
    changeInputValue: () => {},
    addListItem: () => {},
    deletKListItem: () => {},
  },
) => {
  return (
    <div style={{ margin: "30px auto", width: "350px" }}>
      <Input
        placeholder="placeholder"
        value={props.inputValue}
        onChange={(event) => {
          props.changeInputValue(event);
        }}
        style={{ width: "250px", marginRight: "10px" }}
      />
      {
        <Button
          type="primary"
          onClick={() => {
            props.addListItem();
          }}
        >
          增加
        </Button>
      }
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => {
            return (
              <List.Item
                onClick={() => {
                  props.deletKListItem(index);
                }}
              >
                {item}
              </List.Item>
            );
          }}
        ></List>
      </div>
    </div>
  );
};

export default TodoListUi;
