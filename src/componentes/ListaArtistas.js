import React from 'react'
import '../styles/listaartistas.css'
import ErrorApi from './ErrorApi';

  const ListaArtistas = ({buscar, setBuscar, artistas, setArtistas, errores, setErrores, setArtistaOk}) => {

    const paginaArtista = (e) => {
      return ("https://www.last.fm/music/" + e)
    }

  return (
    <>
    
      {artistas.length > 0 && errores === false
      ? <main className='Wiki-music'> <ul> {artistas.map(artistas => <li key={artistas.match} className="cd"> <a href={paginaArtista(artistas.name)} target="_blank">{artistas.name}</a> </li>)}  </ul></main>
      : <ErrorApi />}
    
    </>
  )
}

export default ListaArtistas
