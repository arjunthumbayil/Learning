import React from "react"
import ReactDOM from "react-dom/client" 



const parent = React.createElement(
  'div',
  { id: 'parent' },[
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', { id: 'parent' }, 'I am h1')
  ), React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', { id: 'parent' }, 'I am h1')
  )
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

