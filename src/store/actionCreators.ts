import { CHANGE_INPUT, ADD_ITEM, DELET_ITEM, GET_LIST } from "./actionType";
import axios from "axios";

export const changeInputAction = (value: any) => {
  const action = {
    type: CHANGE_INPUT,
    value,
  };
  return action;
};

export const addItemAction = () => {
  const action = {
    type: ADD_ITEM,
  };
  return action;
};

export const deletItemAction = (index: number) => {
  return {
    type: DELET_ITEM,
    index,
  };
};

export const getListAction = (data: any) => {
  return {
    type: GET_LIST,
    data,
  };
};

export const getTodoList = () => {
  return (dispatch: any) => {
    axios
      .get(
        "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList",
      )
      .then((res) => {
        const data = res.data;
        dispatch(getListAction(data));
      });
  };
};
