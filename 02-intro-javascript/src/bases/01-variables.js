// variables y constantes, constantes no se cambian y variables cambian. no se debe usar var

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;

//para cambiar el valor de una variable no se vuele a declarar con let
valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true) {
    //let y const solo funcionan dentro del scope en este caso se modifican dentro del if
    const nombre = 'Peter';
    let valorDado = 6;
    console.log(nombre);
    console.log(valorDado);
}
 // pero si salimos del if, el valor no esta modificado, es decir conserva el valor dado antes de entrar al if.
console.log(valorDado);