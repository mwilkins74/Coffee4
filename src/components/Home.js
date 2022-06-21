import React from 'react'
import CoffeeCard from "./CoffeeCard"

function Home({ coffees }) {
    const coffeeCards = coffees.map((coffee) => 
    (<CoffeeCard
        key={coffee.id}
        id={coffee.id}
        name={coffee.name}
        origin={coffee.origin_country}
        roaster={coffee.roaster}
        price={coffee.price}
        image={coffee.image}
    />

    ))

  return (
      <div>{coffeeCards}</div>
      
  )
}

export default Home