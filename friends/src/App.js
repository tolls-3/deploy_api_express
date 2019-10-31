import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get((process.env.REACT_APP_API || "") + "/api/friends")
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data && data[0].name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
