import './App.css';
import { Reproducir } from './components/Reproducir/ReproducirHarina';
import { Ingredientes } from './components/ingredientes/Ingredientes';
import { Azucar } from './components/ingredientes/recipientes/Azucar';
import { Cacao } from './components/ingredientes/recipientes/Cacao';
import { Harina } from './components/ingredientes/recipientes/Harina';
import { Maicena } from './components/ingredientes/recipientes/Maicena';


import { BrowserRouter, Routes, Route } from "react-router-dom"






function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Ingredientes/>}/>
        
        <Route path='/azucar' element={<Azucar />}/>
        <Route path='/cacao' element={<Cacao />}/>
        <Route path='/harina' element={<Harina />}/>
        <Route path='/maicena' element={<Maicena />}/>

      </Routes>

    </BrowserRouter>
  );
}


export default App;
