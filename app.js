let heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "this is first heading"),
    React.createElement("h1", { id: "heading2" }, "this is second heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1a" }, "this is first heading"),
    React.createElement("h1", { id: "heading2a" }, "this is second heading"),
  ]),
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
