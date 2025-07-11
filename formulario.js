document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contacto');

    form.addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        e.preventDefault();
    } else {
        alert('Formulario enviado correctamente.');
    }
    });
});
