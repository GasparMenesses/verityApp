import React, { useState } from 'react';
import './recipientes.css';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import db from '../../../db/db';
import Swal from 'sweetalert2';

export const Caja2 = () => {
  const [fecha, setFecha] = useState('');

  const handleChange = (e) => {
    setFecha(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fecha) {
      try {
        const docRef = doc(db, 'caja2', 'fechacaja2');
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
      // Guardar la fecha directamente en Firebase después del reconocimiento
      try {
        const docRef = doc(db, 'caja2', 'fechacaja2');
        await setDoc(docRef, { fecha: transcript }, { merge: true });
        Swal.fire({
          icon: "success",
          title: "Fecha guardada",
          text: "La fecha capturada por voz fue guardada exitosamente",
          text: `Fecha reconocida: ${transcript}`,
          timer: 4000, // Duración en milisegundos (4 segundos)
          timerProgressBar: true,
        });

        const utterance = new SpeechSynthesisUtterance(transcript);
        utterance.lang = "es-ES"; // Español
        window.speechSynthesis.speak(utterance);

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
    }, 6000); // 6000 ms = 6 segundos
  };

  return (
    <div>
      <h1 className='elementTitle'>CAJA2</h1>

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

        <Link className='volverLink' to={'/reproducircaja2'}>
          <button className='volverBtn'>Reproductor</button>
        </Link>
      </div>
    </div>
  );
}
