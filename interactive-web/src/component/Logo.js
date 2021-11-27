import React from 'react'
import './Logo.css'
import logoIMG from '../assets/logo.svg'

function Logo () {
  return (
    <header className = "logo">

        <img src = {logoIMG} alt = "logo"></img>

    </header>
  )
}

export default Logo
