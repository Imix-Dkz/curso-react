import "./App.css";
//Si se crea un componente("CARD"), antes de integrarlo en el proyecto hay que importarlo
import Card from "./componets/Card";
import vehicles from "./data/vehicles";

function App(){
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

        {vehiclesList}

      </div>
    </div>
  );
  
}

export default App;