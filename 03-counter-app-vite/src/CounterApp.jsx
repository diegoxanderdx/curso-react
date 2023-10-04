//importamos useState (use significa que es un hook pero basicamente es una funcion)
import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
//usamos el argumento de setCounter para modificar el valor del counter, por convencion para los cambios se usa set
//el argumento enviado a useState es el valor por defecto del counter
//podemos iniciar el estado con el valor value que enviamos desde el main.jsx
  const [ counter, setCounter ] = useState(value);

  const handleAdd = () => {
    setCounter( counter + 1 );
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2> 

      <button onClick={ handleAdd }>
        +1
      </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}