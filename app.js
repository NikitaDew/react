// const header = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World From React!!!"
// );

// console.log(header); //returns object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

// {
//   /*
//  <div id='parent'>
//     <div id='child'>
//         <h1></h1>
//     </div>
// </div>
//  */
// }

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "h1 from child element")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
