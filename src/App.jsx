import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let nombre = 'Juan';
  let auth = true;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <>
    <div className="App">
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
    </div>
    </>
  )
}

export default App
