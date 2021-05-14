import React from "react";
import Home from "./pages/Home";
import Markets from "./pages/Markets";
import AddStocks from "./pages/AddStocks";
import Login from "./pages/Login";
import StockDetail from "./pages/StockDetail";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id">
          <StockDetail />
        </Route>
        <Route path="/markets" exact>
          <Markets />
        </Route>
        <Route path="/addstocks" exact>
          <AddStocks />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
