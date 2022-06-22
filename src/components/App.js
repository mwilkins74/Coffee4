import React, { useState, useEffect } from "react";
import Home from "./Home";
// import Search from "./Search";
// import { Switch, Routes, Route, Link } from "react-router-dom";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [isDeleted, setDelete] = useState(false);
  // const [search, setSearch] = useState("");
  // const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/coffees")
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data);
        //console.log(data)
      });
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:9292/coffees")
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data);
        //console.log(data)
      });
  }, [isDeleted]);

  // const displayCoffees = coffees.filter((coffee) => {
  //   return coffee.name.toLowerCase().includes(search.toLowerCase())
  // })

  function coffeeData({ id }) {
    const coffeeFilter = coffees.filter((coffee) => coffee.id !== id);
    setCoffees(coffeeFilter);
  }

  return (
    <div>
      <div className="header">
        <img
          className="logo"
          width="250"
          alt="Black Coffee Co. Logo"
          src="https://user-images.githubusercontent.com/102488171/174443127-2ddbd44d-c64c-4023-80e4-31436b5b64e3.png"
        />
      </div>
      <div className="App">
        {/* <Search search={search} onNewSearch={setSearch} /> */}
        <Home
          coffees={coffees}
          setCoffees={setCoffees}
          coffeeData={coffeeData}
          setDelete={setDelete}
          isDeleted={isDeleted}
        />
      </div>
    </div>
  );
}

export default App;
