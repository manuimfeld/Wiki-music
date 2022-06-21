import React from 'react'
import '../styles/listaartistas.css'
import ErrorApi from './ErrorApi';

  const ListaArtistas = ({artistas, errores}) => {

    /* Funcion para tener el link de la página de los artistas */
    const paginaArtista = (e) => {
      return ("https://www.last.fm/music/" + e)
    }

  return (
    <>
      {/* Si hay artistas y no hay errores, se mostrarán en la página */}
      {artistas.length > 0 && errores === false
      ? <main className='Wiki-music'>
          <ul> 
            {artistas.map(artistas =>
            <li key={artistas.match} className="cd">
              <a href={paginaArtista(artistas.name)} rel="noopener noreferrer" target="_blank">
                Escuchar {artistas.name} 
                <img src="https://cdn-icons-png.flaticon.com/128/60/60734.png" width="30" height="30" alt="" />
              </a>
            </li>
            )}  
            </ul>
        </main>
      : /* Si hay errores se muestra el componente de error */ <ErrorApi />}
    
    </>
  )
}

export default ListaArtistas
