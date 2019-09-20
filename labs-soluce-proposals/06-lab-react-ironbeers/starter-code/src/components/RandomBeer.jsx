import React, { useEffect, useState } from "react";
import BeerDetailsCard from "./BeerDetailsCard";
import axios from "axios";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers/random")
      .then(res => {
        setRandomBeer(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="full-page">
      <BeerDetailsCard beer={randomBeer} />
    </section>
  );
};

export default RandomBeer;
