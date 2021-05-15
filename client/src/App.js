import React from "react";
import Home from "./pages/Home";
import Markets from "./pages/Markets";
import AddStocks from "./pages/AddStocks";
import Login from "./pages/Login";
import StockDetail from "./pages/StockDetail";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/markets" exact>
          <Markets />
        </Route>
        <Route path="/addstocks">
          <AddStocks />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/:id">
          <StockDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
