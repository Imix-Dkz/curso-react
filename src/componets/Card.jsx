//rfce, es un snipped rápido gracias a la extención "ES7 React/Redux/React-Native/JS snippets"
import React from 'react'
import "./Card.css";
import { Link } from 'react-router-dom';

function Card({title="Default Title", description="Default Description"}){
  return (
    <div className="Card">
      <Link to={title}><h2>{title}</h2></Link>
      <p>{description}</p>
    </div>
  )
}

export default Card
