import React from 'react';
import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Contenido from './componentes/Contenido';
import Navbar from './componentes/Navbar';
// import Tablas from './componentes/Tablas';

function App() {
  
  return (
    <>
      <Navbar/>
      <Bienvenida/>
      <Contenido/> 
    </>
  );
}

export default App;
