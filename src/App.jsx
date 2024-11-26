import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom"

import { Ingredientes } from './components/ingredientes/Ingredientes';
import { Azucar } from './components/ingredientes/recipientes/Azucar';
import { Cacao } from './components/ingredientes/recipientes/Cacao';
import { Harina } from './components/ingredientes/recipientes/Harina';
import { Maicena } from './components/ingredientes/recipientes/Maicena';
import { DulceDeLeche } from './components/ingredientes/recipientes/DulceDeLeche';
import { Manteca } from './components/ingredientes/recipientes/Manteca';
import { Caja1 } from './components/ingredientes/recipientes/Caja1';
import { Caja2 } from './components/ingredientes/recipientes/Caja2';
import { Caja3 } from './components/ingredientes/recipientes/Caja3';

import { ReproducirAzucar } from './components/reproductores/ReproducirAzucar';
import { ReproducirCacao } from './components/reproductores/ReproducirCacao';
import { ReproducirHarina } from './components/reproductores/ReproducirHarina';
import { ReproducirMaicena } from './components/reproductores/ReproducirMaicena';
import { ReproducirDulceDeLeche } from './components/reproductores/ReproducirDulceDeLeche';
import { ReproducirManteca } from './components/reproductores/ReproducirManteca';
import { ReproducirCaja1 } from './components/reproductores/ReproducirCaja1';
import { ReproducirCaja2 } from './components/reproductores/ReproducirCaja2';
import { ReproducirCaja3 } from './components/reproductores/ReproducirCaja3';

function App() {
  return (
    <HashRouter>

      <Routes>
        <Route path='/' element={<Ingredientes/>}/>
        <Route path='/dulcedeleche' element={<DulceDeLeche />}/>
        <Route path='/manteca' element={<Manteca />}/>
        <Route path='/azucar' element={<Azucar />}/>
        <Route path='/cacao' element={<Cacao />}/>
        <Route path='/harina' element={<Harina />}/>
        <Route path='/maicena' element={<Maicena />}/>
        <Route path='/caja1' element={<Caja1 />}/>
        <Route path='/caja2' element={<Caja2 />}/>
        <Route path='/caja3' element={<Caja3 />}/>

        <Route path='/reproducirdulcedeleche' element={<ReproducirDulceDeLeche />}/>
        <Route path='/reproducirmanteca' element={<ReproducirManteca />}/>
        <Route path='/reproducirazucar' element={<ReproducirAzucar />}/>
        <Route path='/reproducircacao' element={<ReproducirCacao />}/>
        <Route path='/reproducirharina' element={<ReproducirHarina />}/>
        <Route path='/reproducirmaicena' element={<ReproducirMaicena />}/>
        <Route path='/reproducircaja1' element={<ReproducirCaja1 />}/>
        <Route path='/reproducircaja2' element={<ReproducirCaja2 />}/>
        <Route path='/reproducircaja3' element={<ReproducirCaja3 />}/>

      </Routes>

    </HashRouter>
  );
}


export default App;
