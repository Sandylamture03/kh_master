import React from "react";
import Gretting from "./components/Gretting";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Aug-03-session</h1>
        <p>This is a simple React app.</p>
        <Gretting />
      </div>
    );
  }
}

export default App;
