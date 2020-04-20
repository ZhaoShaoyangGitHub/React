import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "@/page/Home";
import News from "@/page/News";
import HookDemo from "@/page/Hook";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/news" component={News}></Route>
      <Route path="/HookDemo" component={HookDemo}></Route>
    </Switch>
  );
};

export default Routes;