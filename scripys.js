// Función para navegar hacia las bebidas calientes
document.querySelector('.menu-btn[href="#hot-drinks"]').addEventListener('click', function() {
  // Mostrar la sección de bebidas calientes
  document.getElementById('hot-drinks').style.display = 'block'; 
  document.getElementById('cold-drinks').style.display = 'none'; 
});

// Función para navegar hacia las bebidas frías
document.querySelector('.menu-btn[href="#cold-drinks"]').addEventListener('click', function() {
  // Mostrar la sección de bebidas frías
  document.getElementById('cold-drinks').style.display = 'block';
  document.getElementById('hot-drinks').style.display = 'none';
});

// Mostrar las bebidas calientes por defecto cuando la página se carga
window.onload = function() {
  document.getElementById('hot-drinks').style.display = 'block'; 
  document.getElementById('cold-drinks').style.display = 'none';
};
