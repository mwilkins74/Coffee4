import React from "react";
import CoffeeCard from "./CoffeeCard";

function Home({ coffees, setCoffees, setDelete, isDeleted }) {
  const coffeeCards = coffees.map((coffee) => (
    <CoffeeCard
      key={coffee.id}
      id={coffee.id}
      name={coffee.name}
      origin={coffee.origin_country}
      roaster={coffee.roaster}
      price={coffee.price}
      image={coffee.image_url}
      stock={coffee.stock}
      setCoffees={setCoffees}
      setDelete={setDelete}
      isDeleted={isDeleted}
    />
  ));

  return <div id="coffee-collection">{coffeeCards}</div>;
}

export default Home;
