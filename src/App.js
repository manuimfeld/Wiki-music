import React from 'react'
import './App.css';
import { useState } from 'react';
import Inicio from './componentes/Inicio';

function App() {

  /* ESTADOS */
  const [buscar, setBuscar] = useState('')
  const [artistas, setArtistas] = useState([])
  const [errores, setErrores] = useState(false)
  const [cargando, setCargando] = useState(false)

  return (
    <Inicio buscar={buscar} setBuscar={setBuscar} artistas={artistas} setArtistas={setArtistas} errores={errores} setErrores={setErrores} cargando={cargando} setCargando={setCargando}/>
  );
}

export default App;
