// Mantém o ano do rodapé sempre atualizado, sem precisar editar o HTML.
document.getElementById('year').textContent = new Date().getFullYear();

// Efeitos que seguem o cursor nos cards do portfólio:
//   1. um brilho de acento posicionado onde o ponteiro está (--mx/--my);
//   2. uma leve inclinação 3D do card em direção ao cursor.
const cards = document.querySelectorAll('.portfolio .card');
const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;   // 0 a 1 na horizontal
    const py = (e.clientY - r.top) / r.height;   // 0 a 1 na vertical

    // Posição do brilho (lida pelo radial-gradient no CSS).
    card.style.setProperty('--mx', `${px * 100}%`);
    card.style.setProperty('--my', `${py * 100}%`);

    // Inclinação sutil em direção ao cursor. Desligada quando o usuário
    // pede menos movimento nas preferências do sistema.
    if (!semMovimento) {
      const tiltX = (0.5 - py) * 6;
      const tiltY = (px - 0.5) * 6;
      card.style.transform =
        `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
    }
  });

  // Ao sair, remove o transform inline e deixa o CSS retomar o estado normal.
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
