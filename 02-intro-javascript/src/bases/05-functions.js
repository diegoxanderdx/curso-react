//funciones se guardan en una cons
const greet = function (name) {
  return `Hi ${name}`;
};

//llamado a la funcion
console.log(greet("John"));

//funciones de flecha o lambda
const greet2 = (name) => {
  return `Hi ${name}`;
};

console.log(greet2("Goku"));

const greet3 = (name) => `Hi ${name}`;
const greet4 = () => `Hello World`;

console.log(greet3("Vegeta"));
console.log(greet4());

//para devolver un objeto se debe poner entre parentesis para que no lo tome como un bloque de codigo
const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser());

//tarea

const getActiveUser = (name) => ({
  uid: "ABC567",
  username: name,
});

const activeUser = getActiveUser("Diego");
console.log(activeUser);
