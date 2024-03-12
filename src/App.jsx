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