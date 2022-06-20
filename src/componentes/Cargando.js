import React from 'react'
import '../styles/cargando.css'
import Buscador from './Buscador'

const Cargando = () => {
  return (
    <>
    <div className="contenedorSpin">
    <div className="cargar"></div>
    <p>Cargando...</p>
    </div>
    </>
  )
}

export default Cargando