# movies-app

## Prueba técnica realizada para puesto de Frontend Junior para empresa EMAIS

## Documentación:

Una vez descargada:

En la terminal --->
1 npm install
2 npm start

MOVIES APP es una mini-app en la que a través de una API de cine debía pintar en pantalla un listado de películas con su información.

Para crear la App utilicé la herramienta create react app por el poco tiempo y el tipo de app.

Las tecnologias que utilicé fueron html, css y Javascript.
Para el css utilicé bootstrap unicamente en las "cards" de las películas y para el resto css directamente en una hoja de estilos.

La app hace una llamada a la API https://api.themoviedb.org/3/search/movie del que obtenemos el título , la fecha de publicación y una breve descripción.

Para la llamada a la API utilicé la libreria AXIOS , pues no había trabajado nunca con ella y quería probar, de lo contrario habría utilizado fetch de javascript.

Utilicé React-router-dom para estructurar las rutas "home" para la página principal en la que muestro una lista de las películas mejor valoradas y "fav" para el apartado de favoritos.

cada "Card" tiene un botón para añadir la película a la lista de favoritos.
Una vez añadadida el botón muta a "borrar" para que desde la misma card y sin cambiar de página puedes eliminar de favoritos esta película.

Tambien haciendo click en la card de la película puedes navegar a la ruta '/movie/id' utilizando useParams() de react-router-dom donde encontrarás información de la película y tambien podrás añadirla o borrarla de favoritos en el caso de que ya haya sido añadido antes.

Esta se incluye en un array y se guarda en el localstorage para que siempre se quede esa información guardada aunque reinicies el navegador.

Es importante mencionar que una vez la película es guardada en favoritos , navegues donde navegues el botón de dicha película seguirá con el estado de "añadida a favoritos" hasta que esta sea eliminada.

Me habria gustado utilizar mas a fondo la API y crear una LOGIN/REGISTER y poder guardar películas como favoritas de forma mas real pero por tiempo me he visto obligado a "fakearlo" con el localStorage.
