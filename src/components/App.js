import React, { useState, useEffect } from "react";
import Home from "./Home";

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((response) => response.json())
      .then((data) => setCoffees(data));
  }, []);
    // console.log(coffees);

  return (
    <div>
      <img
        className="logo"
        width="250"
        alt="Black Coffee Co. Logo"
        src="https://user-images.githubusercontent.com/102488171/174443127-2ddbd44d-c64c-4023-80e4-31436b5b64e3.png"
      />
      <Home coffees={coffees} />
    </div>
  );
}

export default App;
