//para importar, en el archivo que se importa debe haber una exportacion
import { heroes } from "./data/heroes";

// find sirve para buscar un elemento en un arreglo
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2));

//filter sirve para filtrar (retorna uno o varios) elementos en un arreglo
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner("DC"));
console.log(getHeroesByOwner("Marvel"));
