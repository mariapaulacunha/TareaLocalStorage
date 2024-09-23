document.addEventListener('DOMContentLoaded', function() {
    const Datos = localStorage.getItem('Datos');
    document.getElementById('data').textContent = Datos;
    console.log(Datos);
});