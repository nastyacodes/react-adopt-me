import React from "react";
import { render } from "react-dom";
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams/>
    </div>
  );
};

//this is going to stamp our App
render(<App/>, document.getElementById("root"));
