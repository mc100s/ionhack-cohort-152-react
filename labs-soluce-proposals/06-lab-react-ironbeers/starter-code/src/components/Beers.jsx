import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Beers = () => {
  const [allBeers, setAllBeers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(res => {
        setIsFetching(false);
        setAllBeers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {isFetching && <i className="fas fa-spinner">Looading beers</i>}
      {allBeers.map((b, i) => (
        <Link to={"/beers/" + b._id}>
          <div key={i} className="beer-card">
            <div className="beer-card-image">
              <img src={b.image_url} alt={b.name} />
            </div>
            <div className="beer-description">
              <h2 className="beer-description-title">{b.name}</h2>
              <h3 className="beer-description-tagline">{b.tagline}</h3>
              <p className="beer-description-contributor">
                <span className="bold">Created by: </span>
                {b.contributed_by}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Beers;
