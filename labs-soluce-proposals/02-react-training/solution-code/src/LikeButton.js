import React, { useState } from "react";

export default function LikeButton() {
  const [counter, setCounter] = useState(0);
  let colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  let color = colors[counter % colors.length];
  let s = { backgroundColor: color, color: "white" };
  return (
    <button onClick={() => setCounter(counter + 1)} style={s}>
      {counter} like{counter !== 1 && "s"}
    </button>
  );
}
