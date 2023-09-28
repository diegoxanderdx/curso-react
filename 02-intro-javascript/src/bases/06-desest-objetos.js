// //desestructurcion de objetos o asignacion desestructurante

const person = {
  name: "Tony",
  age: 45,
  password: "Ironman",
  range: "Soldier",
};

//tradicional repitiendo persona
console.log(person.name);
console.log(person.age);
console.log(person.password);

//desestructurando: se crea una contante, se pasa entre llaves el nombre de la propiedad que se quiere extraer del objeto y se asigna el objeto del que se quiere extraer
const { name, age, password } = person;

console.log(name);
console.log(age);
console.log(password);

//desestructurando en una funcion y con valor por defecto para una propiedad que no existe en el objeto
const returnPerson = ({ name, age, range = "Captain" }) => {
  console.log(name, age, range);
};

returnPerson(person);

const useContext = ({ password, name, age, range = "Captain" }) => {
  return {
    keyName: password,
    years: age,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  keyName,
  years,
  latlng: { lat, lng },
} = useContext(person);

console.log(keyName, years);
console.log(lat, lng);
