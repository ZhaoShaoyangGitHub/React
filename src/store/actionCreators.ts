import { CHANGE_INPUT, ADD_ITEM, DELET_ITEM } from "./actionType";

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
  const action = {
    type: DELET_ITEM,
    index,
  };
  return action;
};
