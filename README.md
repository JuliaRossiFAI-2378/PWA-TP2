# TP 2 - Grupo Piedra

## Integrantes del grupo

FAI-2378 Rossi Julia <br/>
FAI-2948 Lores Federico <br/>

## Dominio
Elegimos [pokeapi](https://pokeapi.co) como nuestra API.</br>
Se puede encontrar la documentacion [aquí](https://pokeapi.co/docs/v2)



## Descripción básica de la aplicación 

La app es un gestor personal de pokemones, los cuales se pueden marcar o desmarcar como favoritos.<br/><br/>
Otras funcionalidades: <br/>
- Paginación (sin scroll infinito)<br/>
- Se puede cambiar el idioma en cualquier momento y afecta todo (incluyendo información recibida de la API)<br/>
- Resolución casi completamente responsive (a excepcion de la resolución mas pequeña para telefonos)

## Instalacion

1.Clonar el repositorio<br/>
2.Utilizar el comando "npm install -D vite"<br/>
3.Utilizar el comando "npm install tailwindcss @tailwindcss/vite"<br/>
4.Utilizar el comando "npm install react-i18next i18next --save"<br/>
5.Utilizar el comando "npm i react-router"<br/>
6.Listo para ejecutar con "npm run dev"<br/>

## Demo

https://pwa-tp-2-nine.vercel.app/ <br/>
Creemos que esto cumple y supera el proposito de incluir capturas de pantalla

## Decisiones Relevantes
Algo notable de la API es que no posee un endpoint con un array que contenga todos los pokemones, por lo cual debemos hacer fetch individual para cada uno.<br/><br/>
Ya que tenemos que hacer fetch individual para cada pokemon, decidimos paginar por generaciones pokemon, con un aproximado de 120 pokemon por pagina. Por lo cual la búsqueda solo revisa por página. Entendemos que una posible solución es tener un fetch secundario de todos los pokemon, pero cada uno pesa mas de un mb y son 1025. También consideramos que la busqueda revise un array con todos los pokemon (el cual ya tenemos), pero no logramos utilizar eso manteniendo la busqueda dinamica (que se actualizen los pokemon en la pagina apenas se escribe).<br/><br/>
Al definir la ruta de las imagenes pokemon agregamos Math.random() como parametro al final de la ruta, esto es necesario para evitar que el navegador utilize la version cacheada de la imagen (la cual puede ser una carga fallida).<br/><br/>
Se nos dijo en clases que la cache se borra al recargar la pagina pero entre nuestra experiencia personal y una pequeña investigación quedamos en que no lo hace, puede borrar algo de la cache, pero no toda, para eso existen las recargas forzadas (generalmente realizadas con ctrl+f5). En caso de dudas, probar eliminar esos parametros agregados muestra que las imagenes a veces no cargan, pero el navegador las considera cargadas por lo que no se dispara onError.