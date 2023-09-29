//async es una palabra reservada que se puede usar como una función asíncrona osea que va a retornar una promesa,
//await es una palabra reservada que se puede usar dentro de una función asíncrona y va a esperar a que una promesa se resuelva

// const getImagenPromesa = () => new Promise(resolve => resolve('https://asdasdasd.com'));
// getImagenPromesa().then(console.log);

const getImagen = async () => {
  try {
    const apiKey = "8yJQf0R6MFRmKI4KjPMagxyBfXd68Fwx";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo del error
    console.error(error);
  }
};

getImagen();
