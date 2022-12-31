import * as React from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <div className="divNavBar">
        <NavBar />
      </div>
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
