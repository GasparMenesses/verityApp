import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom"

import { Ingredientes } from './components/ingredientes/Ingredientes';
import { Azucar } from './components/ingredientes/recipientes/Azucar';
import { Cacao } from './components/ingredientes/recipientes/Cacao';
import { Harina } from './components/ingredientes/recipientes/Harina';
import { Maicena } from './components/ingredientes/recipientes/Maicena';
import { Leche } from './components/ingredientes/recipientes/Leche';
import { Manteca } from './components/ingredientes/recipientes/Manteca';

import { ReproducirAzucar } from './components/reproductores/ReproducirAzucar';
import { ReproducirCacao } from './components/reproductores/ReproducirCacao';
import { ReproducirHarina } from './components/reproductores/ReproducirHarina';
import { ReproducirMaicena } from './components/reproductores/ReproducirMaicena';
import { ReproducirLeche } from './components/reproductores/ReproducirLeche';
import { ReproducirManteca } from './components/reproductores/ReproducirManteca';

function App() {
  return (
    <HashRouter>

      <Routes>

        <Route path='/' element={<Ingredientes/>}/>

        <Route path='/leche' element={<Leche />}/>
        <Route path='/manteca' element={<Manteca />}/>
        <Route path='/azucar' element={<Azucar />}/>
        <Route path='/cacao' element={<Cacao />}/>
        <Route path='/harina' element={<Harina />}/>
        <Route path='/maicena' element={<Maicena />}/>

        <Route path='/reproducirleche' element={<ReproducirLeche />}/>
        <Route path='/reproducirmanteca' element={<ReproducirManteca />}/>
        <Route path='/reproducirazucar' element={<ReproducirAzucar />}/>
        <Route path='/reproducircacao' element={<ReproducirCacao />}/>
        <Route path='/reproducirharina' element={<ReproducirHarina />}/>
        <Route path='/reproducirmaicena' element={<ReproducirMaicena />}/>

      </Routes>

    </HashRouter>
  );
}


export default App;
