import React from "react";

function Flag(props) {
  return (
    <img
      className="Flag"
      src={`https://www.countryflags.io/${props.country}/flat/64.png`}
      alt={"Flag of " + props.country}
    />
  );
}

export default Flag;
