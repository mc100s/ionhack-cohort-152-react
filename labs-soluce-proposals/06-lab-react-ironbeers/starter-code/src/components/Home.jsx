import React from "react";
import { Link } from "react-router-dom";
import AllBeersImg from "../img/beers.png";
import NewBeerImg from "../img/new-beer.png";
import RandomBeerImg from "../img/random-beer.png";

const Home = () => {
  return (
    <section className="full-page">
      <Link to="/beers">
        <div className="img-wrapper">
          <img src={AllBeersImg} alt="all the beers" />
        </div>
        <h2>All beers</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          consequatur tempore alias, reiciendis provident laboriosam minus
          necessitatibus molestias libero facere soluta aspernatur eveniet fuga
          voluptatibus maiores fugiat autem ab delectus.
        </p>
      </Link>

      <Link to="/random-beer">
        <div className="img-wrapper">
          <img src={RandomBeerImg} alt="random beer" />
        </div>
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          consequatur tempore alias, reiciendis provident laboriosam minus
          necessitatibus molestias libero facere soluta aspernatur eveniet fuga
          voluptatibus maiores fugiat autem ab delectus.
        </p>
      </Link>

      <Link to="/new-beer">
        <div className="img-wrapper">
          <img src={NewBeerImg} alt="all the beers" />
        </div>
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          consequatur tempore alias, reiciendis provident laboriosam minus
          necessitatibus molestias libero facere soluta aspernatur eveniet fuga
          voluptatibus maiores fugiat autem ab delectus.
        </p>
      </Link>
    </section>
  );
};

export default Home;
