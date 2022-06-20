import React from 'react'
import '../styles/buscador.css'

const refrescar = () => {
  window.location.reload();
}

const Logo = () => {
  return (
    <h1 className='navBar-logo' onClick={() => {refrescar()}}>Wiki-Music</h1>
  )
}

export default Logo