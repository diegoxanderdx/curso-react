// los template strings sirven para concatenar strings con variables, resultados de poperaciones, strings multilinea etc.
//usamos backticks ``

const firstName = 'Fernando';
const lastName = 'Herrera';

// para concatenar strings se usa el signo de dolar y llaves ${}
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

function getSaludo(firstName) {
    return 'Hola ' + firstName;
}

console.log(`Este es un texto: ${getSaludo(firstName)}`);