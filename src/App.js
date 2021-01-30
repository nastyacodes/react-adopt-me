import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockateil" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  )
};

//this is going to stamp our App
render(<App/>, document.getElementById("root"));
