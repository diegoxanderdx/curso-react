import React from 'react'; 
import ReactDOM from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola soy goku" subTitle={ 123 } /> {/* aca podemos agregar los valores de las propiedades que recibe el componente, el subtitle en este caso es un valor diferenta a string */}
    </React.StrictMode>
);
        