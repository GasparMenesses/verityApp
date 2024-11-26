import React from 'react'
import "./ingredientes.css"
import { Link } from 'react-router-dom'

export const Ingredientes = () => {
  return (
    <div>
        <img src="" alt="" />

        

        <h2 className='titleR'>INGREDIENTES</h2>

        <div className='recipientes'>

            <Link className='no-underline' to="/caja1">
                <div className='R'>
                    <h2 className='textR'>Caja 1</h2>
                </div>
            </Link>

            <Link className='no-underline' to="/caja2">
                <div className='R'>
                    <h2 className='textR'>Caja 2</h2>
                </div>
            </Link>

            <Link className='no-underline' to="/caja3">
                <div className='R'>
                    <h2 className='textR'>Caja 3</h2>
                </div>
            </Link>
            
            <Link className='no-underline' to="/dulcedeleche">
                <div className='R'>
                    <h2 className='textR'>Dulce De Leche</h2>
                </div>
            </Link>

            <Link className='no-underline' to="/manteca">
                <div className='R'>
                    <h2 className='textR'>Manteca</h2>
                </div>
            </Link>

            <Link className='no-underline' to="/azucar">
                <div className='R'>
                    <h2 className='textR'>Azúcar</h2>
                </div>
            </Link>

            <Link className='no-underline' to="/cacao">
                <div className='R'>
                    <h2 className='textR'>Cacao</h2>
                </div>
            </Link>


            <Link className='no-underline' to="/harina">
                <div className='R'>
                    <h2 className='textR'>Harina</h2>
                </div>
            </Link>

            <Link className='no-underline' to="/maicena">
                <div className='R'>
                    <h2 className='textR'>Maicena</h2>
                </div>
            </Link>

        </div>
    </div>
  )
}
