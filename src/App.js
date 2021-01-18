import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
