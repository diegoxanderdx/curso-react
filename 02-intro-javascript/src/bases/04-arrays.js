// es una coleccion de informacion que se encuentra dentro de una misma variable

const array = new Array(); //se crea un nuevo array vacio

console.log(array); //se visualiza en la consola del navegador como un array vacio , llaves cuadradas y un prototype que no lo hemos creado nosotros

const array2 = [];

console.log(array2); //se visualiza en la consola del navegador como un array vacio , llaves cuadradas y un prototype que no lo hemos creado nosotros

const array3 = [1, 2, 3, 4]; //se crea un nuevo array con elementos y el index siempre inicia en 0

console.log(array3); //se visualiza en la consola del navegador como un array con sus elementos , llaves cuadradas y un prototype que no lo hemos creado nosotros

let array4 = [...array3, 5]; //los ... se llaman operador spread y sirve para clonar un objeto

console.log(array4);

const array5 = array4.map(function (number) {
  return number * 2;
}); //map es un metodo que se utiliza para recorrer un array, se le debe pasar una funcion para modificar los elementos, en este caso una multiplicacion por 2

console.log(array5);
