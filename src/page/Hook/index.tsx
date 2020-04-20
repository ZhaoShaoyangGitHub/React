import React from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import Tex1 from "./UseState";
import Tex2 from "./UseEffect";

type stateType = {
  url: string;
  path: string;
};

class HookDemo extends React.Component {
  state: stateType = {
    url: "/HookDemo",
    path: "/HookDemo",
  };

  componentDidMount() {}

  render() {
    const { url, path } = this.state;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${url}/useState`}>useState</Link>
          </li>
          <li>
            <Link to={`${url}/useEffect`}>useState</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={path}>
            HOOK
          </Route>
          <Route exact path={`${url}/useState`}>
            <Tex1 />
          </Route>
          <Route exact path={`${url}/useEffect`}>
            <Tex2 />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default HookDemo;
