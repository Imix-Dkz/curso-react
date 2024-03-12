import React from 'react';
import './VehicleView.css';
import { Link } from 'react-router-dom';

function VehicleView({vehicle}) {
  return (
    <div className="VehicleView">
      <h1>{vehicle.name}</h1>
      <h2>{vehicle.description}</h2>
      <img src={vehicle.image} alt={vehicle.name+"_img"} />

      <Link to={"/"}><h3>Regresar a página principal</h3></Link>
    </div>
  )
}

export default VehicleView
