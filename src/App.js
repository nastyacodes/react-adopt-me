import React from 'react';
import { render } from "react-dom";
import Pet from './Pet';

const App = () => {
  // created a stamp [COMPONENT]
  return React.createElement(
    "div", //what kind of tag
    { id: "something-important" }, //attributes we give to component
    [
      React.createElement("h1", {}, "Adopt Me!"), //children of this element
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }), // if we don't put {} and [] it means it has no attributes and children
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockateil",
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed",
      }),
    ] // it can also be an array
  );
};

render(
  //this is going to stamp our App
  React.createElement(App),
  document.getElementById("root")
);
