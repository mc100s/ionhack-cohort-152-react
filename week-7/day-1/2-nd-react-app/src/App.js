import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome"

function App() {
  return (
    <div className="App">
      <h1>React application</h1>
      <Welcome x={42} lang="fr">Alice</Welcome>
      <Welcome lang="en">Bob</Welcome>
      <Welcome lang="de">Christian</Welcome>
    </div>
  );
}

export default App;
