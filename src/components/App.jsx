/** @format */

import "../styles/index.scss";

import React from "react";
import Recipies from "./Recipies";

import photo from "../images/pic.jpg";
function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>I'm with React</h1>
        </section>
        <img src={photo} alt="photo" width="250" />
        <Recipies />
      </main>
    </>
  );
}

export default App;
