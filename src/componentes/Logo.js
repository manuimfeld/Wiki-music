import React from 'react'
import '../styles/buscador.css'

const refrescarPagina = () => {
  window.location.reload();
}

const Logo = () => {
  return (
    <h1 className='navBar-logo' onClick={() => {refrescarPagina()}}>Wiki-Music</h1>
  )
}

export default Logo