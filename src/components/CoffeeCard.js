import React from "react";

function CoffeeCard({ id, name, origin, roaster, price, image }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img className="images" src={image} alt={name} />
          </div>
          <div class="flip-card-back">
            <h2>{origin}</h2>
            <h1>{roaster}</h1>
            <h3>${price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
