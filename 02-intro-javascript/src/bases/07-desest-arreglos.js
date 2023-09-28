const personajes = ["Goku", "Vegeta", "Trunks"];

// la desestructoracion de arreglos es similar a la de objetos, solo que se pasa entre corchetes y se asigna el arreglo del que se quiere extraer
const [, , p3] = personajes; // los espacios vacios quiere decir que no se quiere extraer ese elemento del arreglo, cada espacio es un index del arreglo
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [firstName, setName] = useState("Goku");
console.log(firstName);
setName();
