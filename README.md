
# Challenge-AmigoSecreto
<p align="left">
   <img src="https://img.shields.io/badge/Status-Finalizado-green">
  <img src="https://img.shields.io/badge/Mes-Febrero-green">
   </p>

## Descripción
Este proyecto es una aplicación web sencilla para gestionar un sorteo de "Amigo Secreto". Permite a los usuarios ingresar nombres en una lista y luego seleccionar aleatoriamente un amigo secreto. Está diseñado para facilitar la organización de este juego en reuniones y eventos.

## Estructura del Proyecto
El proyecto consta de tres archivos principales:

- **index.html**: Contiene la estructura HTML de la aplicación.
- **style.css**: Define los estilos y la apariencia de la aplicación.
- **app.js**: Contiene la lógica del sorteo y la manipulación del DOM.

## Instalación y Configuración
No se requiere instalación especial para ejecutar la aplicación. Simplemente descarga los archivos y ábrelos en un navegador web compatible.

### Pasos:
1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en un navegador.
3. ¡Listo! Puedes comenzar a agregar nombres y realizar el sorteo.

## Uso
1. Ingresar el nombre de un amigo en el campo de texto.
2. Hacer clic en el botón "Añadir" para agregar el nombre a la lista.
3. Repetir el proceso para agregar más amigos.
4. Hacer clic en el botón "Sortear amigo" para seleccionar aleatoriamente un nombre de la lista.
5. El nombre del amigo secreto se mostrará en pantalla.

## Funcionalidades
- **Validación de entrada**: No permite ingresar nombres vacíos ni duplicados.
- **Interfaz interactiva**: Muestra la lista de amigos agregados dinámicamente.
- **Sorteo aleatorio**: Selecciona un nombre al azar y lo muestra en pantalla.
- **Diseño adaptable**: Estilos modernos y responsive para funcionar en distintos dispositivos.
- **Mensajes de alerta**: Notifica al usuario si hay errores o si el sorteo se realizó exitosamente.

## Tecnologías Utilizadas
- **HTML5**: Para la estructura del contenido.
- **CSS3**: Para los estilos y la disposición visual.
- **JavaScript**: Para la manipulación del DOM y la lógica del sorteo.

## Código Destacado
### Registrar un amigo
```js
function registrar() {
    let nuevoAmigo = document.getElementById('amigo').value;
    if (nuevoAmigo === '') {
        alert('No se puede ingresar un amigo vacío');
        return;
    }
    if (amigos.includes(nuevoAmigo)) {
        alert('El amigo que quiere ingresar ya está registrado.');
        return;
    }
    amigos.push(nuevoAmigo);
    mostrarListaDeAmigos();
    limpiarCaja();
}
```
### Sortear un amigo
```js
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No tienes amigos registrados');
        return;
    }
    const random = Math.floor(Math.random() * amigos.length);
    document.querySelector('#resultado').innerHTML = `<li>${amigos[random]}</li>`;
    alert('Felicidades!');
}
```

## Autor

<img src="https://avatars.githubusercontent.com/u/115377503?v=4" width=115><br><sub>Elizabeth Sanchez Teran</sub>
