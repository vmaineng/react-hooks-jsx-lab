import React from "react";
import { name, city } from "../data/data.js";

const divStyle = {
  color: 'firebrick'
};

function Home() {
  // update the JSX being returned!
  return <div id="home" style={divStyle}>
    <h1>"Your {name} is a Web Developer from Your {city}"</h1>
  </div>;
}

export default Home;
