import React, { useState } from "react";
import "./app.css";

const Page = () => {
  const [data, setData] = useState("");

  const fetchData = async (endpoint) => {
    const response = await fetch("/api/" + endpoint);
    const data = await response.text();
    setData(data);
  };

  return (
    <div>
      <button onClick={() => fetchData("home")}>Home</button>
      <button onClick={() => fetchData("portfolio")}>Portfolio</button>
      <div>{data}</div>
    </div>
  );
};

export default Page;
