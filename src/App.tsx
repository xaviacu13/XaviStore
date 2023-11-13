import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Menu, Products, Home } from './components/'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu 
      logo="https://elcomercio.pe/resizer/gj5JbwxkmqRAa4HSpfOHEIUBf7k=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg"
       title="Granos Luna"
       subTitle="Todo lo que buscás, lo tenemos acá!..."
       url="https://www.superbid.com.ar/"
    />
    <Home 
      img="https://img.freepik.com/foto-gratis/campos-trigo-dorados-brillan-al-atardecer-generados-ia_188544-44464.jpg?w=2000&t=st=1699898044~exp=1699898644~hmac=8b363ca658e6eb592bf4b3341218a0baa736585fd15799a5dc50f59e68ca4853"
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
