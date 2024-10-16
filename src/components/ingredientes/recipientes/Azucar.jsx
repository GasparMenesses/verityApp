import React from 'react'
import './recipientes.css'
import { Link } from 'react-router-dom'
import db from '../../../db/db'

export const Azucar = () => {
  return (
    <div>

      <h1 className='elementTitle'>
        AZÚCAR
      </h1>

      <h2 className='elementh2'>
        Fecha de vencimiento
      </h2>

      <div className='formDiv'>

        <form className='form' action="">
            <h4 className='ingresarFecha'>Ingresar fecha haciendo click en el recuadro blanco </h4>
            <input className='input' type="date" placeholder='Ingresar fecha' />
        </form>

        <button className='guardarBtn'>Guardar</button>
        
        
        <Link className='volverLink' to={'/'}>
            <button className='volverBtn'>Volver</button>
        </Link>

      </div>
    </div>
  )
}

