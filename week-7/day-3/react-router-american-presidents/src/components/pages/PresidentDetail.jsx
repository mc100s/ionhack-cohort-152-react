import React from "react";
import presidents from "../../presidents";

export default function PresidentDetail(props) {
  let number = Number(props.match.params.number); // Because of <Route path='/.../:number' component={...}/>
  // let president = presidents[number - 1]; // Solution 1
  let president = presidents.find(p => p.number === number); // Solution 2

  if (!president) {
    return <div>Oops, there is no president {props.match.params.number}</div>
  }

  return (
    <div>
      <h1>President Detail</h1>
      <ul>
        <li>Number: {president.number}</li>
        <li>Name: {president.president}</li>
        <li>Took Office: {president.took_office}</li>
        <li>Left Office: {president.left_office}</li>
        <li>Party: {president.party}</li>
      </ul>
    </div>
  );
}
