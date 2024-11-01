import React, { useState } from 'react';
import './recipientes.css';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import db from '../../../db/db';
import Swal from 'sweetalert2';

export const Azucar = () => {
  const [fecha, setFecha] = useState('');

  const handleChange = (e) => {
    setFecha(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fecha) {
      try {
        const docRef = doc(db, 'azucar', 'fechaazucar');
        await setDoc(docRef, { fecha }, { merge: true });
        Swal.fire({
          icon: "success",
          title: "Fecha guardada",
          text: "Los datos fueron actualizados con éxito"
        });
        setFecha('');
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

  const handleVoiceInput = () => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "API de reconocimiento de voz no soportada en este navegador"
      });
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setFecha(transcript); // Setea el texto reconocido como fecha
      Swal.fire({
        icon: "success",
        title: "Fecha capturada por voz",
        text: `Fecha reconocida: ${transcript}`
      });
    };

    recognition.start();
  };

  return (
    <div>
      <h1 className='elementTitle'>AZÚCAR</h1>
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

        {/* Nuevo botón para ingresar fecha por voz */}
        <button className='guardarBtn' onClick={handleVoiceInput}>Ingresar fecha por voz</button>

        <Link className='volverLink' to={'/'}>
          <button className='volverBtn'>Volver</button>
        </Link>

        <Link className='volverLink' to={'/reproducirazucar'}>
          <button className='volverBtn'>Reproductor</button>
        </Link>
      </div>
    </div>
  );
}
