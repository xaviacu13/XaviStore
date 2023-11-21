import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Menu, Products, Home } from './components/'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu 
      logo="public/images/logo/granosLuna_logo.avif"
       title="Granos Luna"
       subTitle="Todo lo que buscás, lo tenemos acá!..."
       url="https://www.superbid.com.ar/"
    />
    <Home 
      img="public/images/portada/granosluna_portada4.jpeg"
      title="Granos Luna"
    />
    <Products title="Alimentos vacuno" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
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
