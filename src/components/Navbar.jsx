import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="logo">
        <h4>
          Football <br /> Corner
        </h4>
      </div>
      <ul className='links'>
        <li>Premier League</li>
        <li>La Liga</li>
        <li>Bundasliga</li>
        <li>Seri A</li>
        <li>Ligue 1</li>

      </ul>
    </nav>
  )
}
