import React from 'react'
import '../styles/listaartistas.css'
import Buscador from './Buscador'
import Cargando from './Cargando'
import ListaArtistas from './ListaArtistas'

  const Inicio = ({buscar, setBuscar, artistas, setArtistas, errores, setErrores, cargando, setCargando}) => {
  return (
    <>
      <Buscador buscar={buscar} setBuscar={setBuscar} artistas={artistas} setArtistas={setArtistas} errores={errores} setErrores={setErrores} setCargando={setCargando}/>

      {artistas <= 0 && errores !== true && cargando !== true
      ? <main className='Wiki-music'>
        <h2>¿Qué es Wiki-Music?</h2>
        <p>Wiki-Music es una página web que contiene información de artistas musicales</p>
        <strong>(¡y es muy facil de usar!)</strong>
        <div className="contenedor">
        <article>
        <img src="https://ouch-cdn2.icons8.com/f9VWsdj___bTQkKx1dhcVPaHb8oUDJNxYaByEZ3t0tw/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzM1/L2QzZTRhODBkLTgw/NTUtNGZkYi04Yzkx/LTNmNWU1YzQzZmMy/MS5zdmc.png" alt="" />
        </article>
        <article>
          <h2>Nueva música</h2>
        <p>¿Tienes ganas de escuchar nuevos artistas pero de un mismo genero musical?</p>
        <p>Solamente escriba el nombre en la barra de busqueda y luego presione el botón <strong>Buscar</strong></p>
        <p>Automaticamente se generarán 10 artistas similares y haciendo click en su nombre, irás a su perfil y podrás escuchar sus canciones</p>
        </article>
        </div>
        <div className="contenedor reverse">
        <article>
        <img src="https://cyberowls.net/cyberdata/wp-content/uploads/2022/01/COMPU.png" alt=""/>
        </article>
        <article>
          <h2>Nuevas funcionalidades</h2>
        <p>Actualmente estoy trabajando en este proyecto para agregar mas funcionalidades como:</p>
        <p>Abrir una ventana modal cuando selecciones al cantante</p>
        <p>Poder ver su imagen, nombre y sus géneros musicales</p>
        <p>¡Y poder escuchar su canción más conocida desde la página!</p>
        </article>
        </div>
        </main>
      : cargando ? <Cargando /> : <ListaArtistas buscar={buscar} setBuscar={setBuscar} artistas={artistas} setArtistas={setArtistas} errores={errores} setErrores={setErrores}/>}
    </>
  )
}
export default Inicio
