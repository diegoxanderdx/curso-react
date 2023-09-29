// //para importar, en el archivo que se importa debe haber una exportacion
import heroes from "../data/heroes";

// //otra forma es cuando exporto por defecto
// import heroes from './data/heroes';

//importacion con individual incluido
// import heroes, { owners } from "../data/heroes";
// console.log(owners);

// //todas en un solo export
// import { heroes, owners } from "./data/heroes";

// console.log(owners);
// find sirve para buscar un elemento en un arreglo
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2));

//filter sirve para filtrar (retorna uno o varios) elementos en un arreglo
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroesByOwner("DC"));
// console.log(getHeroesByOwner("Marvel"));

