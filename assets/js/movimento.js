/* movimento.js — movimento deste site, do Kit 10skinstudio.com (seção "Movimento").
   A referência não tem entrada animada: títulos e textos já estão no lugar. Aqui, só a opacidade dos cartões e
   fotos (.r → .r--visivel, 0,4 s, sem deslocamento) e nada ligado à rolagem. Hovers e acordeão estão no style.css. */
(function () {
  'use strict';
  var itens = document.querySelectorAll('.r');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    itens.forEach(function (el) { el.classList.add('r--visivel'); });
    return;
  }
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('r--visivel');
      obs.unobserve(en.target);
    });
  }, { threshold: 0.12 });
  itens.forEach(function (el) { obs.observe(el); });
})();
