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
      {names.length > 0 ? (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {names.map((name, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No names found</p>
      )}
    </div>
  );
}

export default Home;
