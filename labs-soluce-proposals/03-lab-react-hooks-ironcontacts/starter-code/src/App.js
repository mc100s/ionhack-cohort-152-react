import React, { useState } from "react";
import "./App.css";
import fullListOfContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0, 5));
  function addRandomContact() {
    if (contacts.length === fullListOfContacts.length) {
      return // Stop the function
    }

    // Generate a random number between [0; fullListOfContacts.length-1]
    let randomIndex = Math.floor(Math.random() * fullListOfContacts.length)
    let randomContact = fullListOfContacts[randomIndex]

    // contacts.push(randomContact) // WRONG!!! because we should never change the state directly
    // setContacts(contacts) // WRONG!!! because we should never change the state directly

    if (contacts.find(contact => contact.name === randomContact.name)) {
      addRandomContact()
      return
    }

    setContacts([...contacts, randomContact])
  }
  function sortByName() {
    // [...contacts] is to create a copy of contacts, because sort is modifying the array
    setContacts([...contacts].sort((a,b) => {
      if (a.name > b.name) return 1
      else return -1
    }))
  }
  function deleteContact(indexToRemove) {
    // contacts.filter is creating a new array (not modifing the original array)
    setContacts(contacts.filter((contact,i) => i !== indexToRemove))
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <tr key={i}>
              <td>
                <img src={contact.pictureUrl} alt=""/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => deleteContact(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
