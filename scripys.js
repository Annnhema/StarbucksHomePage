// Manejo de visibilidad de bebidas calientes y frías
document.getElementById('hot').addEventListener('click', function() {
  document.getElementById('hot-drinks').style.display = 'block';
  document.getElementById('cold-drinks').style.display = 'none';
});

document.getElementById('cold').addEventListener('click', function() {
  document.getElementById('cold-drinks').style.display = 'block';
  document.getElementById('hot-drinks').style.display = 'none';
});

// Mostrar bebidas calientes por defecto
window.onload = function() {
  document.getElementById('hot-drinks').style.display = 'block';
  document.getElementById('cold-drinks').style.display = 'none';
};
