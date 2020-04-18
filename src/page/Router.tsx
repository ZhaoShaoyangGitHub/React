import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "@/page/Home";
import News from "@/page/News";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/news" component={News}></Route>
    </Switch>
  );
};

export default Routes;
