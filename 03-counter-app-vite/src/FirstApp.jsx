//para las proptupes primero hacemos la importacion de la libreria y la instalamos en consola con
//yarn add prop-types
//las proptypes nos definen el tipo de dato que recibira el prop
import PropTypes from "prop-types";

export const FirstApp = ( { title, subTitle} ) => {

  return (
    <>
      <h1>{ title }</h1>
      <p> { subTitle }</p>
    </>

    //podemos mostrar el resultado o retorno de una funcion
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  subTitle: "Soy un subtitulo",
}
