import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className='nav-header'>
        <h3 class="logo">Football<br></br> Corner</h3>
        <nav>
          <ul class="nav__links">
            <li><Link href="/">Premeir League</Link></li>
            <li><Link href="/">La Liga</Link></li>
            <li><Link href="/">Bundasliga</Link></li>
            <li><Link href="/">Seri A</Link></li>

          </ul>
        </nav>
        <a class="cta" href="#">Contact</a>
        <p onclick="openNav()" class="menu cta">Menu</p>
      </div>
      <div id="mobile__menu" class="overlay">
        <a class="close" onclick="closeNav()">&times;</a>
        <div class="overlay__content">
          <Link href="/">Premeir League</Link>
          <Link href="/">La Liga</Link>
          <Link href="/">Bundasliga</Link>
        </div>
      </div>
    </nav>
  )
}
