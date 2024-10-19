import React, { useState } from 'react';
import './recipientes.css';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import db from '../../../db/db';

export const Leche = () => {
  const [fecha, setFecha] = useState('');

  const handleChange = (e) => {
    setFecha(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fecha) {
      try {
        // Referencia al documento con el ID específico que viste en la base de datos
        const docRef = doc(db, 'leche', 'fechaleche');
        await setDoc(docRef, { fecha }, { merge: true });
        Swal.fire({
          icon: "success",
          title: "Fecha guardada",
          text: "Los datos fueron actualizados con éxito"
        });
        setFecha(''); // Limpiar el campo de fecha
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor ingresa una fecha"
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor ingresa una fecha"
      });
    }
  };

  return (
    <div>
      <h1 className='elementTitle'>LECHE</h1>
      <h2 className='elementh2'>Fecha de vencimiento</h2>

      <div className='formDiv'>
        <form className='form'>
          <h4 className='ingresarFecha'>Ingresar fecha haciendo click en el recuadro blanco</h4>
          <input 
            className='input' 
            type="date" 
            value={fecha} 
            onChange={handleChange} 
            placeholder='Ingresar fecha' 
            />
         </form>

         <button className='guardarBtn' onClick={handleSubmit}>Guardar</button>

        <Link className='volverLink' to={'/'}>
          <button className='volverBtn'>Volver</button>
        </Link>

        <Link className='volverLink' to={'/reproducirleche'}>
          <button className='volverBtn'>Reproductor</button>
        </Link>
      </div>
    </div>
  );
}