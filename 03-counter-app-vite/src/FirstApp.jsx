// las funcionen debeb ser declaradas por fuera del functional componenr para evitar que cree un nuevo espacio de memoria cada vez que se renderiza el componente
const nombre = 'Jorge';
const getResult = (a, b) => {
  return a + b;
};

export const FirstApp = ( { title, subTitle} ) => {

//las porperties o props son argumentos (en este caso propiedades) que reciben las functonal components, estos props son objetos y generalmente se desestructura.

  return (
    // cuando quiero retornar más de un elemento, debo envolverlos en un fragmento usando <> y </>, que actuan como nodo padre
    //una expresion (que no sea un objeto) de javascript se puede imprimir creando una variable y dentro del html, usamos llaves para mosrtar el valor de la variable
    <>
      <h1>{ title }</h1>
      <p> { subTitle }</p>
      <h1>{ getResult(1, 2) }</h1>
    </>

    //podemos mostrar el resultado o retorno de una funcion
  );
};
