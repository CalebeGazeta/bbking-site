// Função que muda o texto e a cor quando clica no botão
function mostrarMensagem() {
  // Pega o parágrafo da seção "Sobre"
  const sobre = document.querySelector('section.container.text-center.my-4 p');
  
  // Muda o texto para algo divertido
  sobre.textContent = "🎵 B.B. King vive na música! 🎵";
  
  // Muda a cor do texto para dourado
  sobre.style.color = "#ffd700";
}
