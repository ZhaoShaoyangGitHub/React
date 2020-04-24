import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "@/assets/css/App.css";
import Routes from "@/page/Router";

function App() {
  return (
    <Router>
      {/* 重定向 */}
      <Redirect to="/todoList"></Redirect>
      {/* <Routes></Routes> */}
      <Route path="" component={Routes} />
    </Router>
  );
}

export default App;
