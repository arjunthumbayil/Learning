import React from 'react'
import ReactDOM from 'react-dom/client'

//React.createElement is an object and not html tag
//When we render this element onto the DOM, ReactDOM CONVERTS this object to HTML
//and pushes it to browser i.e REPLACES everithing inside the root.

//JSX - is not HTML in JS
//It is at max HTML or XML like syntax

//So it's like React.createElement => ReactElement-JS Object => HTMLElement(render)
//JSX is transpiled before it reaches the JS Engine. Parcel - Babel.

//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = (
  <h1 className="head" id="heading">
    Hello React using JSX
  </h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(jsxHeading)
