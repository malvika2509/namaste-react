import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading =
  ((<h1>Malvika React using JSX</h1>), (<h1>Malvika React using JSX</h1>));

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading);

// ANOTHER COMPONENT
function Heading() {
  return (
    <div>
      <h1>Namaste react functional component</h1>
    </div>
  );
}
const number = 100000;
//  In JavaScript, the comma operator evaluates each of its operands (left to right) and returns the result of the last operand.
const title = ((<h1>HI</h1>), (<h2>React element inside element</h2>));
const title1 = (
  <div>
    {title}
    <h1>react element inside jsx</h1>
    <h3>react element inside jsx </h3>
  </div>
);

//React Functional component - JS function that returns react element
const HeadingComponent = () => {
  return (
    <div>
      {/* component composition */}
      <Heading></Heading>
      {/* calling a function in JSX same thing as above */}
      {Heading()}
      {/* writing js inside (JSX) react component */}
      {number}
      <br></br>
      {300 - 700}
      {/* {using react elements inside JSX} */}
      {title1}
      <h1>Namaste react functional component</h1>
    </div>
  );
};

// root1.render(HeadingComponent); - WRONG (this is a function component and not react element)
root1.render(<HeadingComponent></HeadingComponent>);
//for single return
const H = () => true;
//short hand syntax
const A = () => {
  return true;
};
//another way
const B = () => true;
