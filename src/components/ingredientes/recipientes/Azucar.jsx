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
          icon: 'success',
          title: 'Fecha guardada',
          text: 'Los datos fueron actualizados con éxito',
        });
        setFecha('');
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un problema al guardar la fecha. Intenta nuevamente.',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingresa una fecha',
      });
    }
  };

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'API de reconocimiento de voz no soportada en este navegador',
      });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.continuous = false; // Solo grabar una vez, no en bucle
    recognition.interimResults = false; // Solo resultados finales

    // Evento: Resultado exitoso
    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      setFecha(transcript);

      try {
        const docRef = doc(db, 'azucar', 'fechaazucar');
        await setDoc(docRef, { fecha: transcript }, { merge: true });

        Swal.fire({
          icon: 'success',
          title: 'Fecha guardada',
          text: `Fecha capturada por voz: ${transcript}`,
        });

        // Reproducir la fecha reconocida
        const utterance = new SpeechSynthesisUtterance(transcript);
        utterance.lang = 'es-ES';
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema guardando la fecha reconocida. Intenta nuevamente.',
        });
      }
    };

    // Evento: Error durante el reconocimiento
    recognition.onerror = (event) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Error en el reconocimiento de voz: ${event.error}`,
      });
    };

    // Iniciar el reconocimiento de voz
    recognition.start();

    // Detener el reconocimiento después de 5 segundos
    setTimeout(() => {
      recognition.stop();
    }, 5000); // 5000 ms = 5 segundos
  };

  return (
    <div>
      <h1 className="elementTitle">AZÚCAR</h1>

      <button className="guardarBtnVoz" onClick={handleVoiceInput}>
        Ingresar fecha por voz (Graba por 5 segundos)
      </button>

      <h2 className="elementh2">Fecha de vencimiento</h2>

      <div className="formDiv">
        <form className="form">
          <h4 className="ingresarFecha">
            Ingresar fecha haciendo click en el recuadro blanco
          </h4>
          <input
            className="input"
            type="date"
            value={fecha}
            onChange={handleChange}
            placeholder="Ingresar fecha"
          />
        </form>

        <button className="guardarBtn" onClick={handleSubmit}>
          Guardar
        </button>

        <Link className="volverLink" to={'/'}>
          <button className="volverBtn">Volver</button>
        </Link>

        <Link className="volverLink" to={'/reproducirazucar'}>
          <button className="volverBtn">Reproductor</button>
        </Link>
      </div>
    </div>
  );
};
