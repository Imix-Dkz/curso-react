import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
//Para usara ReactRouter hay que hacer su importación y como se harán rutas dinamicas, tambien se traerá el arreglo de datos...
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import vehicles from './data/vehicles.js';
import VehicleView from './views/VehicleView.jsx';
/*//Uso de la funcionalidad... Simple
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    }
  ]);
*/

const routes = [
  {
    path: "/",
    element: <App/>,
  },
];
//Se creará un arreglo de forma dinamica con las rutas de datos...
vehicles.forEach((vehicle) => {
  routes.push({ //'.push', añade al arreglo existente el nuevo arreglo de datos que estamos creando...
    path: vehicle.name,
    //element: <div>{vehicle.name}</div>
    element: <VehicleView vehicle={vehicle} />
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> ... Cuando se usa ReactRouter, la invocación de la App Se hace de forma diferente...*/}
    <RouterProvider router={router}/>
=======

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
>>>>>>> 3a890d1cd082763c4722055e4c35be19b788cc99
  </React.StrictMode>,
)
