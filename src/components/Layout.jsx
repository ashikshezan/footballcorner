import React from 'react'
import Navbar from './Navbar'


export default function Layout(props) {
  return (
    <div className='layout'>
      {props.children}
    </div>
  )
}
