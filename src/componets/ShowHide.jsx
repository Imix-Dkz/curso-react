import React, { useState } from 'react'

function ShowHide(){
    /* En este script se hará uso de una caracteristica de REACT, que son los "hooks/Ganchos"
        Los hooks, permiten control de comportamiento en funcion de los estados definidos en los compojnentes

    */
    const [show, setShow] = useState(true); //Control de Estados
    const handleClick = (event) =>
    {  //Control de eventos de Click... 
        setShow(!show);
    };

  return (<div>
        {/* Se define una condicional para mostrar o no el compónente en cuestión...*/}
        {/*show ? <h2>Hide Me!</h2> : "" ... Otra forma de hacerlo... con renderizado condicional ...*/} 
        <button onClick={handleClick}>{show ? "Hide ":"Show "}Text...</button>
        {show && <h2>Hide Me !!!</h2>}

    </div>)
}

export default ShowHide
