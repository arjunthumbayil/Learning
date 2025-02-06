import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => (
  <h1 className="head" id="heading">
    Hello from Title Component
  </h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

//Component Composition
const HeadingComponent = () => {
  return (
    <div className="body">
      <Title />
      <h1>Hello from React Functional Component</h1>
    </div>
  )
}

root.render(<HeadingComponent />)
