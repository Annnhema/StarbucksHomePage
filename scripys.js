// Función para mostrar las bebidas calientes
document.getElementById('hot').addEventListener('click', function() {
  document.getElementById('hot-drinks').style.display = 'block';  // Mostrar bebidas calientes
  document.getElementById('cold-drinks').style.display = 'none'; // Ocultar bebidas frías
});

// Función para mostrar las bebidas frías
document.getElementById('cold').addEventListener('click', function() {
  document.getElementById('cold-drinks').style.display = 'block'; // Mostrar bebidas frías
  document.getElementById('hot-drinks').style.display = 'none';  // Ocultar bebidas calientes
});

// Mostrar bebidas calientes por defecto cuando la página se carga
window.onload = function() {
  document.getElementById('hot-drinks').style.display = 'block';  // Mostrar bebidas calientes
  document.getElementById('cold-drinks').style.display = 'none'; // Ocultar bebidas frías
};
