# Mision 2- Async-Odyssey

# Buscador de ofertas de videojuegos
He decidido hacer un buscador de ofertas de videojuegos utilizando la API pública CheapShark.

## Descripción 
Se trata de una web en la que podemos ver diferentes videojuegos en oferta. Usamos una api para conseguir los videojuegos con sus ofertas y usarlos en la página.
## Lenguajes utilizados
- HTML
- CSS
- JavaScript

## Uso de IA
Utilicé ChatGPT como herramienta de inteligencia artificial para ayudarme.
Principalmente la utilicé para que me explicara cómo funcionan y cómo podía implementar cosas que todavía no habíamos llegado a ver en clase o que no entendía del todo bien.
Me ayudó mucho con el CSS, ya que entiendo como funciona, pero no soy muy creativo.

### Prompt 1: 
"El bonus de la mision es este: Añade una caché en localStorage para no repetir peticiones ya hechas."
### Resultado 1 : 
ChatGPT propuso implementar una caché utilizando localStorage, JSON.stringify(), JSON.parse() y una fecha de caducidad.
La implementé en api.js y comprobé mediante las herramientas de desarrollo de Chrome que las ofertas se almacenaban y podían reutilizarse sin repetir la petición.

### Prompt 2: 
En el CSS tenemos que aprovechar los id y las clases de los elementos del HTML.
### Resultado 2: 
Al principio la IA usaba selectores CSS como nth-of-type() para diferenciar los precios y descuentos de cada tarjeta.
Después cambiamos el código para usar las clases específicas como .precio-actual, .precio-original y .descuento.

## Autopsia

### Decisión 1:
Para el buscador uso filter() sobre los videojuegos que ya hemos descargado. Gracias a esto no hay que hacer una nueva petición a la API cada vez que se escribe una letra.

### Decisión 2:
Inicialmente, ChatGPT utilizó innerHTML para mostrar los títulos de los videojuegos, pero decidí cambiarlo por textContent. El motivo es que innerHTML interpreta el contenido como código HTML, lo que podría provocar ataques XSS si los datos recibidos de la API contienen código malicioso. En cambio, textContent muestra el contenido como texto plano, sin interpretarlo como HTML. Como únicamente necesitamos mostrar los nombres de los videojuegos, considero que es una opción más segura.

### Decisión 3:
Una alternativa que planteó ChatGPT para calcular el ahorro total era utilizar map() para obtener el ahorro de cada videojuego y después sumar todos los resultados. No embobstante, preferí utilizar directamente reduce(), ya que permite recorrer el array e ir acumulando el ahorro en un único valor. De esta manera no hace falta crear un array intermedio y el código queda más sencillo.

### Decisión 4:
En la evaluación del proyecto, la IA me propuso utilizar map() y replaceChildren() para generar las tarjetas de los videojuegos. Aunque map() también sería una opción válida porque podemos transformar las ofertas en elementos HTML, decidí mantener for...of porque me permite crear y añadir cada tarjeta directamente al contenedor sin tener que guardar previamente todos los elementos en otro array. Para las 20 ofertas que mostramos, me parece una solución sencilla y suficiente.





  
