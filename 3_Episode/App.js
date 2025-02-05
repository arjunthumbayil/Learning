import React from 'react'
import ReactDOM from 'react-dom/client'

//React.createElement is an object and not html tag
//When we render this element onto the DOM, ReactDOM CONVERTS this object to HTML
//and pushes it to browser i.e REPLACES everithing inside the root.

const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hi from React & Parcel!'
)

//JSX - is not HTML in JS
//It is at max HTML or XML like syntax

const jsxHeading = <h1 id="heading">Hello React using JSX</h1>

console.log("jsx" + jsxHeading)
console.log("react" + heading)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(jsxHeading)

// So it's like React.createElement => ReactElement-JS Object => HTMLElement(render)

//JSX is transpiled before it reaches the JS Engine

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)