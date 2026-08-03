/* ============================================================
   MEDIÇÃO — GA4, Meta Pixel e Microsoft Clarity
   ============================================================
   Esta página vende medição, então ela precisa medir a si mesma.
   Além do argumento comercial, os dados daqui viram case: dá pra
   mostrar ao cliente a gravação da sessão dele mesmo.

   ⚠️ PREENCHER os IDs abaixo. Enquanto ficarem vazios, nenhum script
   externo é carregado — a página não gera erro no console nem cookie.
   ============================================================ */

const MEDICAO = {
  ga4: '',        // ex.: 'G-XXXXXXXXXX'   — analytics.google.com
  clarity: '',    // ex.: 'abcdefghij'     — clarity.microsoft.com
  metaPixel: ''   // ex.: '1234567890123'  — business.facebook.com
};

/* ------------------------------------------------------------
   Carregamento das ferramentas (só o que estiver configurado)
   ------------------------------------------------------------ */

function carregarGA4(id) {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id);
}

function carregarClarity(id) {
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', id);
}

function carregarMetaPixel(id) {
  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
    t = b.createElement(e); t.async = true;
    t.src = 'https://connect.facebook.net/en_US/fbevents.js';
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  })(window, document, 'script');
  window.fbq('init', id);
  window.fbq('track', 'PageView');
}

if (MEDICAO.ga4) carregarGA4(MEDICAO.ga4);
if (MEDICAO.clarity) carregarClarity(MEDICAO.clarity);
if (MEDICAO.metaPixel) carregarMetaPixel(MEDICAO.metaPixel);

/* ------------------------------------------------------------
   Disparo de eventos
   Envia para o que estiver disponível e ignora o resto em silêncio,
   então os eventos abaixo funcionam mesmo antes de configurar os IDs.
   ------------------------------------------------------------ */

function registrar(evento, parametros = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', evento, parametros);
  }
  if (typeof window.clarity === 'function') {
    window.clarity('event', evento);
  }
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', evento, parametros);
  }
}

/* ------------------------------------------------------------
   Cliques marcados no HTML com data-track
   Basta adicionar data-track="nome_do_evento" em qualquer link.
   ------------------------------------------------------------ */
document.querySelectorAll('[data-track]').forEach((el) => {
  el.addEventListener('click', () => {
    const parametros = {};
    if (el.dataset.projeto) parametros.projeto = el.dataset.projeto;
    registrar(el.dataset.track, parametros);
  });
});

/* ------------------------------------------------------------
   Profundidade de leitura — mede se o visitante chegou ao fim.
   Cada marco dispara uma única vez por sessão de página.
   ------------------------------------------------------------ */
const marcos = [25, 50, 75, 100];
const jaRegistrados = new Set();

function medirScroll() {
  const alturaRolavel = document.documentElement.scrollHeight - window.innerHeight;
  if (alturaRolavel <= 0) return;

  const percentual = (window.scrollY / alturaRolavel) * 100;

  marcos.forEach((marco) => {
    if (percentual >= marco && !jaRegistrados.has(marco)) {
      jaRegistrados.add(marco);
      registrar(`scroll_${marco}`);
    }
  });

  if (jaRegistrados.size === marcos.length) {
    window.removeEventListener('scroll', aoRolar);
  }
}

// Throttle via requestAnimationFrame: o handler de scroll roda no máximo
// uma vez por frame, em vez de dezenas de vezes por segundo.
let aguardandoFrame = false;
function aoRolar() {
  if (aguardandoFrame) return;
  aguardandoFrame = true;
  requestAnimationFrame(() => {
    medirScroll();
    aguardandoFrame = false;
  });
}

window.addEventListener('scroll', aoRolar, { passive: true });

/* ------------------------------------------------------------
   Visualização das seções que carregam o argumento de venda.
   Responde "o cliente chegou a ver o diferencial?".
   ------------------------------------------------------------ */
const secoesObservadas = ['portfolio', 'servicos', 'processo', 'contato'];

if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      registrar('secao_vista', { secao: entrada.target.id });
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.4 });

  secoesObservadas.forEach((id) => {
    const secao = document.getElementById(id);
    if (secao) observador.observe(secao);
  });
}
