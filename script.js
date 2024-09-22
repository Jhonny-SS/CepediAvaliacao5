document.querySelectorAll('.menu-toggle').forEach(button => {
  button.addEventListener('click', () => {
      const menu = button.nextElementSibling; // Seleciona a lista de menu
      menu.classList.toggle('hidden'); // Alterna a visibilidade do menu
  });
});

// Calculadora de IMC
const calcularButton = document.getElementById('calcular');
if (calcularButton) {
  calcularButton.addEventListener('click', function() {
      const peso = parseFloat(document.getElementById('peso').value);
      const altura = parseFloat(document.getElementById('altura').value);
      
      if (!peso || !altura) {
          document.getElementById('resultado').textContent = 'Por favor, insira peso e altura válidos.';
          return;
      }
      
      const imc = peso / (altura * altura);
      document.getElementById('resultado').textContent = `Seu IMC é: ${imc.toFixed(2)}`;
  });
}
