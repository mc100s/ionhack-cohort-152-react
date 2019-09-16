import React, { Component } from "react";
import Paris from "./Paris";
import "./App.css";

// // Former syntax (still working)
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1> Hello Ironhackers! </h1>
//       </div>
//     );
//   }
// }

function App(props) {
  return (
    <div className="App">
      <h1> Hello Ironhackers! </h1>
      <Paris />
      <Paris />
      <Paris />
    </div>
  );
}

export default App;
