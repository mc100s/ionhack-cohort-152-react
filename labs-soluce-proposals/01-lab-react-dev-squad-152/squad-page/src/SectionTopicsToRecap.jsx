import React from 'react'
import PostIt from './PostIt'

function SectionTopicsToRecap(props) {
  return <div className="SectionTopicsToRecap">
    <h2>Topics to Recap</h2>
    <div className="postit-container">
      <PostIt color="pink">Debugging Tool</PostIt>
      <PostIt color="tomato">APIs</PostIt>
      <PostIt color="skyblue">Mapbox</PostIt>
    </div>
  </div>
}

export default SectionTopicsToRecap