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
  coffeeData,
  setDelete,
  isDeleted,
}) {
  // const [newStock, setNewStock] = useState(false);
  const [updatedStock, setStock] = useState(stock);
  const [liked, setLiked] = useState(false)
  //const [isDeleted, setIsDeleted] = useState(false)

  // console.log(price + "coffee card");
  function handleClick() {
    if (updatedStock >= 0) {
      alert(`You Reserved a Bag of ${name}`);
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
    }
    else {
      alert (`Ain\'t no ${name} left, sucker.`)
    }
    
  }

  function handleDelete(id) {
    fetch(`http://localhost:9292/coffees/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => coffeeData({ data, id }))
      .then(setDelete(!isDeleted));
  }

  function handleLike() {
    setLiked(!liked)
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
            {/* <h6> Current Stock: {stock}</h6> */}
            <button className="addToCart" onClick={() => handleClick(id)}>
              <strong>Reserve</strong>
            </button>
            <br />
            <br />
            <button className="delete" onClick={() => handleDelete(id)}>
              ❌
            </button>
            {liked ? (
              <button
                className="like-btn"
                onClick={handleLike}
              >
                ⬆
              </button>
            ) : (
              <button className="unlike-btn" onClick={handleLike}>
                ➖
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
