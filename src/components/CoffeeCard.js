import React, { useState, useEffect } from "react";

function CoffeeCard({
  id,
  name,
  origin,
  roaster,
  price,
  image,
  stock,
  setCoffees,
}) {
  const [newStock, setNewStock] = useState(false);
  const [updatedStock, setStock] = useState(stock);
  const [isDeleted, setIsDeleted] = useState(false)

  console.log(price + "coffee card");
  function handleClick() {
    if (updatedStock != 0) {
      setStock(updatedStock - 1);
      fetch(`http://localhost:9292/coffees/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stock: updatedStock,
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.stock === 0) {
            setNewStock(!newStock);
          }
        });
    }
    else {
      fetch(`http://localhost:9292/coffees/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((data) => setCoffees(data))
        .then(setIsDeleted(!isDeleted));
    } 
  }

  //   useEffect(() => {
  //     fetch(`http://localhost:9292/coffees/${id}`, {
  //         method: "DELETE",
  //     })
  // }, [newStock])

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
