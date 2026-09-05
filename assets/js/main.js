/* =========================================================
   Helena Holanda 5508 — interações da landing page
   ========================================================= */
(function () {
  'use strict';

  var header = document.getElementById('header');
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  /* ---- 1. Fundo do cabeçalho ao rolar ---- */
  function onScroll() {
    header.classList.toggle('is-stuck', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- 2. Menu mobile ---- */
  function closeMenu() {
    nav.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---- 3. Link ativo conforme a seção visível ----
     Só vale para âncoras da própria página; nas páginas internas de proposta
     os links apontam para ../index.html#… e devem ser ignorados aqui. */
  var links = Array.prototype.slice.call(nav.querySelectorAll('.nav__link'))
    .filter(function (a) { return a.getAttribute('href').charAt(0) === '#'; });

  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- 4. Revelar elementos ao entrar na tela ---- */
  var revealables = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var reveal = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry, i) {
      if (!entry.isIntersecting) return;
      entry.target.style.transitionDelay = (i * 90) + 'ms';
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -60px 0px' });

  revealables.forEach(function (el) { reveal.observe(el); });
})();
