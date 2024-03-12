//rfce, es un snipped rápido gracias a la extención "ES7 React/Redux/React-Native/JS snippets"
import React from 'react'
import "./Card.css";

function Card({title="Default Title", description="Default Description"}){
  return (
    <div className="Card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
