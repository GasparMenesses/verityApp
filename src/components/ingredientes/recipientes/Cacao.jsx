import React from 'react'
import './recipientes.css'
import { Link } from 'react-router-dom'

export const Cacao = () => {
  return (
    <div>

      <h1 className='elementTitle'>
        CACAO
      </h1>

      <h2 className='elementh2'>
        Fecha de vencimiento
      </h2>

      <div className='formDiv'>

        <form className='form' action="">
          <input className='input' type="date" />
        </form>

        <button className='guardarBtn'>Guardar</button>
        
        
        <Link className='volverLink' to={'/'}>
            <button className='volverBtn'>Volver</button>
        </Link>

      </div>
    </div>
  )
}
