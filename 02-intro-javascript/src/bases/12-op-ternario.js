// el operador ternario es una forma de simplificar el if-else, una forma corta de tomar una decisión

const activo = true;

// let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// console.log(mensaje);

// forma corta
const mensaje2 = (activo) ? 'Activo' : 'Inactivo';

//cuando no quiero procesar el else, osea una unica condicion

const mensaje = activo && 'Activo';
console.log(mensaje);
