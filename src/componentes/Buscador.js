import React from 'react'
import '../styles/buscador.css'
import Logo from './Logo'

  const Buscador = ({buscar, setBuscar, artistas, setArtistas, setErrores, setCargando}) => {

  const fetchApi = (e) => {
    let url = "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=10&artist="+ e +"&api_key=7cf6752f52b73ffc2eebf3f0c51dd36c&format=json"
    fetch(url)
    .then(data=>data.json())
    .then(res=>setArtistas(res.similarartists.artist), setErrores(false))
    .catch(err=> setErrores(true), setArtistas([]))
  }

  /* Seteo el estado para mostrar el componente de carga con ternarias en ListaArtistas.js o Inicio.js */
  const cambiarEstado = () => {
    setCargando(true)
    setTimeout(() => {
      setCargando(false)
    }, 1000);
  }

  /* Con esta función, al presionar enter hago un llamado a la api */
  const detectket = (e) => {
    if (e.key === 'Enter' && buscar.length > 0) {
      fetchApi(buscar)
      cambiarEstado()
    }
  }

  return (
    <header>
        <nav>
            <Logo />
            <div className='searchbar-container'>
            <input type="text" onChange={event => setBuscar(event.target.value)} onKeyDown={detectket} placeholder="Buscar artista"/>
            <button onClick={() => {fetchApi(buscar); cambiarEstado();}}>Buscar</button>
            </div>
        </nav>
    </header>
  )
}

export default Buscador