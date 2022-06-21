import React from 'react'

function CoffeeCard({id, name, origin, roaster, price, image}) {
  return (
    <div className="card" class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2>{name}</h2>
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard