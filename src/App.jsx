<<<<<<< HEAD
import "./App.css";
//Si se crea un componente("CARD"), antes de integrarlo en el proyecto hay que importarlo
import Card from "./componets/Card";
import ShowHide from "./componets/ShowHide";
import vehicles from "./data/vehicles";

function App(){
  //Aqui se está creando un arreglo de datos que está por ser invocado más adelante...
  const vehiclesList = vehicles.map( v => {
    return <Card title={v.name} description={v.description} />
  })
  return (
    <div className="App">
      <h1>Hola React</h1>
      <div className="container">
        {/* //Ejemplo de pase de datos a un componente... 
          <Card title="Titulo 1" description="Descripcion"/>
          <Card/>
          <Card title="Titulo 3" description="Descripcion 4"/>
          <Card/> 
        */}

        {/*Así se invoca el arreglo de datos creado previamente...*/}
        {vehiclesList}
      </div>

      {/* <ShowHide/>  //Se elimina xq sólo se uso para lo ejercicios de "ShowHide.jsx"*/}
    </div>
  );
  
}

export default App;
=======
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
    </>
  )
}

export default App
>>>>>>> 3a890d1cd082763c4722055e4c35be19b788cc99
