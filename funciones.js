/* :Funcion EnviarFormulario: Creada Por Palacios Fernando */

function EnviarFormulario() {
    const form = document.getElementById('formulario-contacto');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        // Muestra los valores capturados en la consola
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);

    
        alert('¡El Formulario se envio correctamente!');
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', EnviarFormulario);
