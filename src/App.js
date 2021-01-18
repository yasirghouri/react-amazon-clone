import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <Header />
          <h1>Homepage</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
