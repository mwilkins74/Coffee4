import React, { useState, useEffect } from "react";
import Home from "./Home";
import Search from "./Search";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [isDeleted, setDelete] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/coffees")
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data);
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

  const displayCoffees = coffees.filter((coffee) => {
    return coffee.name.toLowerCase().includes(search.toLowerCase())
  })

  function coffeeData({ id }) {
    const coffeeFilter = coffees.filter((coffee) => coffee.id !== id);
    setCoffees(coffeeFilter);
  }

  function createUser(e) {
    e.preventDefault();
    // if statement that only accepts a username if it is rendered in an email format
    let user = e.target.name.value;
    let userEmail = e.target.email.value;

    console.log(user, userEmail);

    fetch("http://localhost:9292/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user,
        email: userEmail,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
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

      <div className="form">
        <div className="customer-form">
          <h2>
            <strong>Enter Info</strong>
          </h2>
          <h3>
            <strong>to Reserve Coffee</strong>
          </h3>
          <form onSubmit={createUser}>
            <input type="text" name="name" placeholder="Name..." />
            <input type="text" name="email" placeholder="Email..." />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <br />

      <div className="App">
        <Search search={search} onNewSearch={setSearch} />
        <Home
          coffees={displayCoffees}
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
