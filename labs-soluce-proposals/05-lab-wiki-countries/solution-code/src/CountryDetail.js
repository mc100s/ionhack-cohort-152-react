import React from "react";
import countries from "./countries";
import { Link } from "react-router-dom";

export default function CountryDetail(props) {
  // To make the code even cleaner: put that function inside a file "utils.js"
  function getCountryFromCca3(cca3) {
    return countries.find(c => c.cca3 === cca3);
  }
  let cca3 = props.match.params.cca3;
  let country = getCountryFromCca3(cca3);

  // When the URL is wrong
  if (!country) {
    return <div>
      <h2>404</h2>
    </div>
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <table className="table">
        <tbody>
          <tr>
            <td>Captial</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area.toLocaleString()} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(cca3 => (
                  <li key={cca3}>
                    <Link to={"/" + cca3}>
                      {getCountryFromCca3(cca3).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
