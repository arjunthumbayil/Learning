const reactHeading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello From React'
)

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

const reactRoot = ReactDOM.createRoot(document.getElementById('root3'))
reactRoot.render(parent)

console.log('arjun', parent)
