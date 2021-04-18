import React from "react";
import "./app.css";
import ContextTest from "./ContextTest";
import ReduxTest from "./ReduxTest";

function App() {
  return (
    <div className="App">
      <div>
        <ContextTest />
      </div>
      <div>
        <ReduxTest />
      </div>
    </div>
  );
}

export default App;
