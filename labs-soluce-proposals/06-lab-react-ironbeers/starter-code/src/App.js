import React from "react";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NavMain from "./components/NavMain";
import SingleBeer from "./components/SingleBeer";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:beerId" component={SingleBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </>
  );
}

export default App;
