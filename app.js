// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
let amigos = [];

function registrar() {
    let nuevoAmigo = (document.getElementById('amigo').value);
    if (nuevoAmigo == '') {
        alert('No se puede ingresar un amigo vacio');
        return;
    }

    if (amigos.includes(nuevoAmigo)) {
        alert('El amigo que quiere ingresar ya esta registrado.');
        return;
    } else {
        amigos.push(nuevoAmigo);  
    }
   
    mostrarListaDeAmigos();
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarListaDeAmigos() {
    lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((item) => {
        lista.innerHTML += `<li>${item}</li>`;
    });
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('No tenes amigos registrados');
        return;
    }

    resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const random = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li>${amigos[random]}</li>`;

    alert('Felicidades!');
}