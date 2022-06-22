import React, {useState} from "react";

function CoffeeCard({ id, name, origin, roaster, price, image, stock }) {
    // const [stock, setStock] = useState({ stock })
    
    function handleClick() {
        // alert ('Testing')
        let updatedStock = stock - 1
        fetch(`http://localhost:9292/coffees/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                stock: updatedStock
            }),
        })
            .then((r) => r.json())
            .then((data) => console.log(data))
    }

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
            <button className="addToCart" onClick={() => handleClick(id)}>
              <strong>Reserve</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
