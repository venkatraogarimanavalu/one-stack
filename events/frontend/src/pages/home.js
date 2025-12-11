import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    console.log("Home component loaded");
    axios.get("http://127.0.0.1:8001/home/")
      .then(res => {
        console.log("API Response:", res.data);
        setNames(res.data.names);  // store the list
      })
      .catch(err => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
