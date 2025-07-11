// Validación básica de formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        alert('Por favor, ingrese su nombre.');
        e.preventDefault();
    }
    });
});