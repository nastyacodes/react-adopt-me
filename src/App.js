import React from "react";
import { render } from "react-dom";
import SearchParams from './SearchParams';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams/>
      </div>
    </React.StrictMode>
  );
};

//this is going to stamp our App
render(<App/>, document.getElementById("root"));
