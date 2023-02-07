import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Componente from './components/Componente.jsx';
import './App.css';
import Propiedades from './components/Propiedades.jsx';
import Estado from './components/Estado.jsx';
import RenderizadoCondicional from './components/Renderizado';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScroolHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';


function App() {
  const [count, setCount] = useState(0)
  let nombre = 'Juan';
  let auth = true;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <>
    <header>
    <div className="App">
    <section>
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </section>
    <section>
          <label htmlFor='nombre'>Nombre </label>
      <br></br>
      <input type='text' id='nombre' />
      <h2>{nombre}</h2>
      <p>{auth ? "El usuario está logueado" : "El usuario no está logueado"}</p>
      <p>{ 2+1 }</p>
      <ul>
        {estaciones.map((el,index) => (
          <li key={index}>{el}</li>
          ))}
      </ul>
    
    </section>
  </div>
    <section>
    <hr />
    <Componente msg="Hola soy un componente Funcional expresado desde una prop."/>
    <hr />
    <Propiedades 
      cadena="Esto es una cadena de texto" 
      numero = {19} 
      booleano = {false}
      arreglo={[1,2,3]}
      objeto={{nombre:"Jon", correo: "Jonmircha@gmail.com"}}
      funcion={num => num * num}
      elementoReact={<i>Esto es un elemento React</i>}
      componenteReact={<Componente msg="Soy un componente pasado como props" />}
    />
    <hr />
    <Estado>Hola</Estado>
    <hr />
    <RenderizadoCondicional />
    <hr />
    <RenderizadoElementos />
    <hr />
    <EventosES6 />
    <hr />
    <EventosES7 />
    <hr />
    <MasSobreEventos />
    <hr />
    <ComunicacionComponentes />
    <hr />
    <CicloVida />
    <hr />
    <AjaxApis />
    <hr />
    <ContadorHooks titulo="Seguidores" />
    <hr />
    <ScroolHooks />
    <hr />
    <RelojHooks />
    <hr />
    </section>
    </header>
    </>
  )
}

export default App
