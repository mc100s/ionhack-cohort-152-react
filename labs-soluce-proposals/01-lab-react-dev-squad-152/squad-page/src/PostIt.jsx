import React from 'react'

function PostIt(props) {
  let s = { backgroundColor: props.color }
  return <div className="PostIt" style={s}>
    {props.children}
  </div>
}

export default PostIt