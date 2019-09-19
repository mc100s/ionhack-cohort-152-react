import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, NavLink, Route } from "react-router-dom";
import countries from "./countries";
import CountryDetail from "./CountryDetail";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
        <Link className="navbar-brand" to="/">
          WikiCountries
        </Link>
      </nav>
      <div className="row">
        <div className="col-5">
          <div className="list-group">
            {countries.map(c => (
              <NavLink
                key={c.cca3}
                to={"/" + c.cca3}
                className="list-group-item list-group-item-action"
              >
                <img src={`https://www.countryflags.io/${c.cca2}/flat/64.png`} alt="" className="flag" /> 
                {/* c.flag */ } {/* For Mac and Linux */}
                {c.name.common}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="col-7">
          {/* Render CountryDetail when the URL starts with "/..." and define a props.match.params.cca3 */}
          <Route path="/:cca3" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
