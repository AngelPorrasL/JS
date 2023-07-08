// Obtiene el elemento del botón y el contador del HTML
const clickButton = document.getElementById('clickButton');
const counter = document.getElementById('counter');

let count = 0;

// Añade un evento de clic al botón
clickButton.addEventListener('click', () => {
  count++; // Incrementa el contador
  counter.textContent = count; // Actualiza el valor del contador en el HTML
});
