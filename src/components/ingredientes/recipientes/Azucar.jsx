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
          text: "Ocurrió un problema al guardar la fecha. Intenta nuevamente."
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

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      setFecha(transcript);

      Swal.fire({
        icon: "success",
        title: "Fecha capturada por voz",
        text: `Fecha reconocida: ${transcript}`
      });

      // Guardar la fecha directamente en Firebase después del reconocimiento
      try {
        const docRef = doc(db, 'azucar', 'fechaazucar');
        await setDoc(docRef, { fecha: transcript }, { merge: true });
        Swal.fire({
          icon: "success",
          title: "Fecha guardada",
          text: "La fecha capturada por voz fue guardada exitosamente"
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al guardar la fecha",
          text: "Hubo un problema guardando la fecha reconocida. Intenta nuevamente."
        });
      }
    };

    recognition.start();

    // Configura un temporizador para detener el reconocimiento después de 3 segundos
    setTimeout(() => {
      recognition.stop();
      Swal.fire({
        icon: "info",
        title: "Tiempo de reconocimiento terminado",
        text: "El reconocimiento de voz se detuvo automáticamente."
      });
    }, 4500); // 3000 ms = 3 segundos
  };

  return (
    <div>
      <h1 className='elementTitle'>AZÚCAR</h1>

      <button className='guardarBtnVoz' onClick={handleVoiceInput}>
          Ingresar fecha por voz
        </button>
        
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

        <Link className='volverLink' to={'/reproducirazucar'}>
          <button className='volverBtn'>Reproductor</button>
        </Link>
      </div>
    </div>
  );
}
