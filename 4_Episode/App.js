import React from 'react'
import ReactDOM from 'react-dom/client'

/*
Foody App Layout
Header
-Logo
-Nav Items
Body
-SearchBar
-Restruant Container => Restraunt Cards
Footer
-Copyrights -Links -Address -Contact etc 
*/

const root = ReactDOM.createRoot(document.getElementById('root'))

const RestrauntCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 Stars</h4>
      <h4>38 Minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul className="">
          <li>Home </li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

root.render(<AppLayout />)
