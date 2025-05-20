// clickCounter.js
console.log('Script cargado correctamente');

const btn = document.getElementById('counterBtn');
const display = document.getElementById('count');
let count = 0;

if (btn && display) {
  console.log('Elementos encontrados');
  btn.addEventListener('click', function() {
    count += 1;
    display.textContent = count;
    console.log('Click registrado, contador:', count);
  });
} else {
  console.error('No se encontraron los elementos necesarios:', {
    btn: btn,
    display: display
  });
}