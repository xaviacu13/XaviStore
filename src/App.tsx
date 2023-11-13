import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Granos Luna App</h1>
      <h2>Bien venidos a esta pagina</h2>
      <h4>Todo lo que buscás, lo tenemos acá!..</h4>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        Inicia sesión {count}
        </button>
        <h3>
          Integrantes: <code>Diogo, Fatima y Naira</code> 
        </h3>
        <h3>
          Tutor: <code>Lic Rilma Doly Gutierrez Valda</code> 
        </h3>
      </div>
      <p className="read-the-docs">
        Colegio Hernando Siles VVG-Muyupampa
      </p>
    </>
  )
}

export default App
