import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "@/page/Home";
import News from "@/page/News";
import TodoList from "@/page/TodoList";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/home" component={Home}></Route> */}
      <Route exact path="/news" component={News}></Route>
      <Route exact path="/todoList" component={TodoList}></Route>
    </Switch>
  );
};

export default Routes;
