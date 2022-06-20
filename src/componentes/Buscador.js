import React from 'react'
import '../styles/buscador.css'
import Logo from './Logo'


  const Buscador = ({buscar, setBuscar, artistas, setArtistas, setErrores, setCargando}) => {
  
  const fetchApi = () => {
    let url = "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=10&artist="+ buscar +"&api_key=7cf6752f52b73ffc2eebf3f0c51dd36c&format=json"
    fetch(url)
    .then(data=>data.json())
    .then(res=>setArtistas(res.similarartists.artist), setErrores(false))
    .catch(err=> setErrores(true), setArtistas([]))
  }

  const cambiarEstado = () => {
    setCargando(true)
    setTimeout(() => {
      setCargando(false)
    }, 1000);
  }

  return (
    <header>
        <nav>
            <Logo />
            <div className='searchbar-container'>
            <input type="text" onChange={event => setBuscar(event.target.value)} placeholder="Buscar artista"/>
            {/* <button onClick={fetchApi}>Buscar</button> */}
            <button onClick={() => {fetchApi(); cambiarEstado();}}>Buscar</button>
            </div>
        </nav>
    </header>
  )
}

export default Buscador