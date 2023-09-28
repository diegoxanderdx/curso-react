const objetoLiteral = {};

console.log(objetoLiteral); //se visualizan como unas llaves en la consola del navegador y nos muestra un prototype que no lo hemos creado nosotros,

const person = {
  name: "Tony",
  lastName: "Stark",
  age: 45,
};

console.log(person); //se visualiza un objeto con sus propiedades
console.log({ person }); //se visualiza un objeto con sus propiedades y nombre de la variable

console.table({ person }); //se visualiza como una tabla en la consola del navegador
console.table(person); //se visualiza como una tabla en la consola del navegador

//de la siguiente forma creamos una constante pero solo apunta al espacio en memoria donde se encuentra el objeto person

const person2 = person;

// de la sgte forma creamos un nuevo objeto con las mismas propiedades del objeto person osea un clon.

const person3 = { ...person };
