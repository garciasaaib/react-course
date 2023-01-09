import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <section>
          <h1>Redux Essentials Example</h1>

          <div className="navContent">
            <div className="navLinks">
              <Link to="/">Posts</Link>
            </div>
          </div>
        </section>
      </nav>
    </header>
  )
}