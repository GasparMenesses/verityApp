import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import './inicioVerity.css';
import db from '../../db/db'; 

export const ReproducirHarina = () => {
  // Estado para almacenar la fecha obtenida de Firestore
  const [fechaProducto, setFechaProducto] = useState('');
  // Función para obtener los datos de Firestore
  const fetchFechaProducto = async () => {
    try {
      // Referencia al documento en Firestore
      const docRef = doc(db, 'harina', 'fechaharina');
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
  // useEffect para llamar a la función cuando el componente se monta
  useEffect(() => {
    fetchFechaProducto();
  }, []);
  // Función para reproducir la fecha usando Speech Synthesis
  const leerTexto = () => {
    if ("speechSynthesis" in window && fechaProducto) {
      const utterance = new SpeechSynthesisUtterance(`La harina vence el ${fechaProducto}`);
      utterance.lang = "es-ES"; // Español
      window.speechSynthesis.speak(utterance);
    } else {
      console.log("Speech Synthesis no está disponible en este navegador o no se ha cargado la fecha.");
    }
  };

  return (
    <div className="reproductor">
      <button className="botonReproducir" onClick={leerTexto}>REPRODUCIR</button>
    </div>
  );
};