import React from 'react'
import '../styles/error.css'

  const ErrorApi = () => {
  return (
    <div className='error-div'>
      <h1>Ha ocurrido un error y no se ha encontrado al artista</h1>
      <p>Esto puede ser porque se escribió mal su nombre o que no esté en la lista. Vuelve a intentarlo</p>
    </div>
  )
}

export default ErrorApi