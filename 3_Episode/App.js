import React from "react"
import ReactDOM from "react-dom/client" 

//React.createElement is an object and not html tag
//When we render this element onto the DOM, ReactDOM CONVERTS this object to HTML  
//and pushes it to browser i.e REPLACES everithing inside the root.

const heading = React.createElement("h1", {id:"heading",}, "Hi from React & Parcel!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);