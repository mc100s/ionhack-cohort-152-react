import React from 'react'

function IdCard(props) {
  return <div className="IdCard box">
    <img src={props.picture} alt="" className="IdCard__img"/>
    <div className="IdCard__content">
      <strong>First Name</strong>: {props.firstName} <br/>
      <strong>Last Name</strong>: {props.lastName} <br/>
      <strong>Height</strong>: {props.height/100}m <br/>
      <strong>Birth</strong>: {props.birth.toGMTString().substr(0,16)} <br/>
    </div>
  </div>
}

export default IdCard