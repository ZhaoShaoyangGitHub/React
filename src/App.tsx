import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import logo from "@/assets/images/logo.svg";
import "@/assets/css/App.css";
import Routes from "@/page/Router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Redirect to="/news"></Redirect>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/news">news</Link>
            </li>
          </ul>
          {/* <Routes></Routes> */}
          <Route path="" component={Routes} />
        </Router>
      </header>
    </div>
  );
}

export default App;
