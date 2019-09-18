import React, { useState } from "react";
import users from "./users";
import { capitalize } from "./utils";

function App() {
  const [state, setState] = useState({
    search: "",
    isStudentChecked: false,
    isTeacherChecked: false,
    campus: ""
  });
  function handleChange(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }
  function getFilteredUsers() {
    return users.filter(
      user =>
        (user.firstName + " " + user.lastName)
          .toUpperCase()
          .includes(state.search.toUpperCase()) &&
        (!state.isStudentChecked || user.role === "student") &&
        (!state.isTeacherChecked || user.role === "teacher") &&
        (state.campus === "" || state.campus === user.campus)
    );
  }
  function getCampuses() {
    return users
      .map(user => user.campus)
      .filter((campus, i, campuses) => campuses.indexOf(campus) === i)
      .sort();
  }
  return (
    <div className="App">
      <h1>IronBook</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <input
        type="text"
        name="search"
        value={state.search}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="isStudentChecked"
        checked={state.isStudentChecked}
        onChange={handleChange}
      />{" "}
      Student{" "}
      <input
        type="checkbox"
        name="isTeacherChecked"
        checked={state.isTeacherChecked}
        onChange={handleChange}
      />{" "}
      Teacher{" "}
      <select name="campus" value={state.campus} onChange={handleChange}>
        <option value="">All campuses</option>
        {getCampuses().map(campus => (
          <option key={campus} value={campus}>
            {campus}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredUsers().map((user, i) => (
            <tr key={i}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{capitalize(user.role)}</td>
              <td>
                {user.linkedin && (
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/linkedin.png" className="logo" alt="" />
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
