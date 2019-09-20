import React, { useEffect, useState } from "react";
import BeerDetailsCard from "./BeerDetailsCard";
import axios from "axios";

const SingleBeer = props => {
  const beerId = props.match.params.beerId;

  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers/" + beerId)
      .then(res => {
        setBeer(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="full-page">
      <BeerDetailsCard beer={beer} />
    </section>
  );
};

export default SingleBeer;
