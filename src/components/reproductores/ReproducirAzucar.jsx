import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import './inicioVerity.css';
import db from '../../db/db'; 

export const ReproducirAzucar = () => {
  // Estado para almacenar la fecha obtenida de Firestore
  const [fechaProducto, setFechaProducto] = useState('');
  const [speechLoaded, setSpeechLoaded] = useState(false);

  // Función para obtener los datos de Firestore
  const fetchFechaProducto = async () => {
    try {
      // Referencia al documento en Firestore
      const docRef = doc(db, 'azucar', 'fechaazucar');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Si el documento existe, guardamos el valor de la fecha en el estado
        setFechaProducto(docSnap.data().fecha);
      } else {
        console.log('¡No existe el documento!');
      }
    } catch (error) {
      console.error('Error al obtener el documento:', error);
    }
  };

  // Función para reproducir la fecha usando Speech Synthesis
  const leerTexto = () => {
    if ("speechSynthesis" in window && fechaProducto) {
      const utterance = new SpeechSynthesisUtterance(`El azúcar vence el ${fechaProducto}`);
      utterance.lang = "es-ES"; // Español
      window.speechSynthesis.speak(utterance);
    } else {
      console.log("Speech Synthesis no está disponible en este navegador o no se ha cargado la fecha.");
    }
  };

  // useEffect para obtener la fecha al cargar la página
  useEffect(() => {
    fetchFechaProducto();

    // Verificar si la API de speech synthesis está lista
    if ("speechSynthesis" in window) {
      setSpeechLoaded(true);
    }
  }, []);

  // useEffect para reproducir el texto automáticamente cuando se carga la fecha y la API está lista
  useEffect(() => {
    if (fechaProducto && speechLoaded) {
      leerTexto();
    }
  }, [fechaProducto, speechLoaded]);

  return (
    <div className="reproductor">
      <button className="botonReproducir" onClick={leerTexto}>REPRODUCIR</button>
    </div>
  );
};