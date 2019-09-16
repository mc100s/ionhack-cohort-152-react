import React from 'react'

// Solution 1
function Welcome1(props) {
  if (props.lang === "fr")
    return <p>Bonjour {props.children}</p>
  else if (props.lang === "de") 
    return <p>Hallo {props.children}</p>
  else
    return <p>Hello {props.children}</p>
}

// Solution 2
function Welcome(props) {
  let greetings = ""
  if (props.lang === "fr")
    greetings = "Bonjour"
  else if (props.lang === "de") 
    greetings = "Hallo"
  else
    greetings = "Hello"
  
  return <p>{greetings} {props.children}</p>
}

export default Welcome;