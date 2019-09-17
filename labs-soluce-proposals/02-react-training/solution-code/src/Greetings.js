import React from "react";

function Greetings({ lang, children }) {
  function getGreetings() {
    switch (lang) {
      case "fr":
        return "Bonjour";
      case "de":
        return "Hallo";
      case "es":
        return "Hola";
      default:
        return "Hello";
    }
  }
  return (
    <div className="Greetings box">
      {getGreetings()} {children}
    </div>
  );
}

export default Greetings;
