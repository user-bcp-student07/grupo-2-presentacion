/* Billetera Digital — comportamiento compartido de todas las pantallas.
   - Indicador de carga de 0,5 s al abrir una pantalla y al pulsar cualquier botón.
   - Foco automático en el primer campo al entrar a una pantalla.
   - Navegación entre páginas con data-ir y estado simple en sessionStorage. */
(function () {
  'use strict';

  var RETARDO = 500;
  var loader = document.querySelector('.loader');
  if (!loader) {
    loader = document.createElement('div');
    loader.className = 'loader on';
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-label', 'Cargando');
    loader.innerHTML = '<div class="spinner"></div>';
    (document.querySelector('.pantalla') || document.body).appendChild(loader);
  }

  // Hora actual en la barra de estado del celular
  var reloj = document.querySelector('[data-hora]');
  if (reloj) {
    var d = new Date();
    reloj.textContent = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }

  function mostrar() { loader.classList.add('on'); }
  function ocultar() { loader.classList.remove('on'); }

  function enfocar() {
    var el = document.querySelector('[data-foco]') ||
      document.querySelector('input:not([type=hidden]):not([disabled]):not([readonly]), select, textarea');
    if (el) { el.focus({ preventScroll: true }); }
  }

  function ir(destino) {
    if (destino === 'atras') { history.back(); return; }
    window.location.href = destino;
  }

  function esperar(fn) { mostrar(); setTimeout(fn, RETARDO); }

  // Carga inicial de la pantalla
  setTimeout(function () { ocultar(); enfocar(); }, RETARDO);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) { ocultar(); enfocar(); }
  });

  // Clic en botones y enlaces internos
  document.addEventListener('click', function (e) {
    var el = e.target.closest('button, a[href], [data-ir]');
    if (!el || el.disabled) { return; }
    if (el.type === 'submit' && el.form) { return; } // lo gestiona el evento submit

    var destino = el.getAttribute('data-ir');
    var href = el.getAttribute('href');
    if (!destino && href && !/^(https?:|mailto:|tel:|#)/.test(href)) { destino = href; }

    if (destino) {
      e.preventDefault();
      esperar(function () { ir(destino); });
    } else if (el.tagName === 'BUTTON') {
      esperar(function () {
        ocultar();
        el.dispatchEvent(new CustomEvent('accion', { bubbles: true }));
      });
    }
  });

  // Envío de formularios: valida, simula demora y navega
  document.addEventListener('submit', function (e) {
    var form = e.target;
    e.preventDefault();
    if (!form.reportValidity()) { return; }
    var destino = form.getAttribute('data-ir');
    esperar(function () {
      if (destino) { ir(destino); return; }
      ocultar();
      form.dispatchEvent(new CustomEvent('enviado', { bubbles: true }));
    });
  });

  // Estado entre pantallas (datos de demostración)
  var formatoSoles = new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' });
  window.BD = {
    get: function (clave, porDefecto) {
      var v = sessionStorage.getItem('bd.' + clave);
      return v === null ? porDefecto : JSON.parse(v);
    },
    set: function (clave, valor) { sessionStorage.setItem('bd.' + clave, JSON.stringify(valor)); },
    soles: function (n) { return formatoSoles.format(n); }
  };

  // Rellena elementos con data-bd="clave" (y data-soles para dar formato de moneda)
  document.querySelectorAll('[data-bd]').forEach(function (el) {
    var v = window.BD.get(el.getAttribute('data-bd'), null);
    if (v === null) { return; }
    el.textContent = el.hasAttribute('data-soles') ? window.BD.soles(v) : v;
  });
})();
