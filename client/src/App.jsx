import React, { useState } from "react";
import "./App.css";

const Page = () => {
  const [data, setData] = useState("");

  const fetchData = async (endpoint) => {
    const response = await fetch("/api/" + endpoint);
    const { data } = await response.json();
    setData(data);
  };

  return (
    <main>
      <h1>Serverless v1.0</h1>
      <button onClick={() => fetchData("home")}>Home</button>
      <button onClick={() => fetchData("portfolio")}>Portfolio</button>
      <button onClick={() => fetchData("contact")}>Contact</button>
      <p>{data ? data : <i>Click on a link to load data</i>}</p>
    </main>
  );
};

export default Page;
