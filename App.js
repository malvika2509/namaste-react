// (tag,attributes to the tag,content of tag)
// const heading = React.createElement(
//   "h1",
//   //   props - children or attributes passed
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );
// // heading is an object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // take this obbject, create the tag and pass it in the form that browser understands
// root.render(heading);

/*
    // for crating nested divs in react

    <div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
        <h2>I am H2 tag</h2>
    </div>
    <div id="child">
        <h1>I am H1 tag</h1>
        <h2>I am H2 tag</h2>
    </div>
    </div>;

*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    // React.createElement("h1", {}, "I am H1 tag")
    // for siblings
    [
      React.createElement("h1", {}, "I am H1 tag"),
      React.createElement("h2", {}, "I am H2 tag"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child" },
    // React.createElement("h1", {}, "I am H1 tag")
    // for siblings
    [
      React.createElement("h1", {}, "I am H1 tag"),
      React.createElement("h2", {}, "I am H2 tag"),
    ]
  ),
]);

//to make it more readable we make JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
// render the parent inside the root
root.render(parent);
