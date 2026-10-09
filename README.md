# Mision 2- Async-Odyssey

# Buscador de ofertas de videojuegos
He decidido hacer un buscador de ofertas de videojuegos utilizando la API pública CheapShark.

## DescripciónSe 
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







  
