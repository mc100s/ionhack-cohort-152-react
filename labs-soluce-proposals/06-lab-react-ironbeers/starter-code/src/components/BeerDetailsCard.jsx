import React from "react";

function BeerDetailsCard({ beer }) {
  return (
    <div className="beer-details-container">
      <div className="beer-details-img">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="beer-details-name-attenuation">
        <h2 className="beer-details-name">{beer.name}</h2>
        <h3 className="beer-details-attenuation">{beer.attenuation_level}</h3>
      </div>
      <h3 className="beer-details-tagline">{beer.tagline}</h3>
      <p className="beer-details-description">{beer.description}</p>
      <p className="beer-details-contributor">{beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsCard;
