const App = () => { // created a stamp [COMPONENT]
    return React.createElement(
        "div", //what kind of tag
        { id: "something-important" }, //attributes we give to component
        React.createElement("h1", {}, "Adopt Me!")//children of this element
        // it can also be an array
    );
};

ReactDOM.render( //this is going to stamp our App
    React.createElement(App),
    document.getElementById("root")
);