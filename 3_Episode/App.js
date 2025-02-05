import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = (
  <h1 className="head" id="heading">
    Hello React using JSX
  </h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

//React Functional Component - is a normal JS Function which returns some JSX

const HeadingComponent = () => {
  return <h1>Hello from React Functional Component</h1>
}

root.render(heading)
