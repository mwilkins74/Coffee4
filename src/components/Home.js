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
        image={coffee.image_url}
    />

    ))

  return (
      <div id="coffee-collection">{coffeeCards}</div>
      
  )
}

export default Home