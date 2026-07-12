(function () {
  'use strict';

  const MODE_LABELS = {
    flash: 'Flash · Di algo bueno',
    comparacion: 'Comparación · Otra vez',
    evaluacion: 'Evaluación global',
    tribunal: 'Tribunal · Cada frase',
    ideal: 'Búsqueda del ideal',
    instante: 'Instante en juicio'
  };

  const screens = {
    pick: document.getElementById('screenPick'),
    ready: document.getElementById('screenReady'),
    cut: document.getElementById('screenCut')
  };

  const els = {
    modeList: document.getElementById('modeList'),
    readyTag: document.getElementById('readyTag'),
    triggerText: document.getElementById('triggerText'),
    triggerSub: document.getElementById('triggerSub'),
    btnCutLabel: document.getElementById('btnCutLabel'),
    scoreboard: document.getElementById('scoreboard'),
    meter: document.getElementById('meter'),
    textOld: document.getElementById('textOld'),
    textCut: document.getElementById('textCut'),
    textAnchor: document.getElementById('textAnchor'),
    btnCut: document.getElementById('btnCut'),
    btnBackPick: document.getElementById('btnBackPick'),
    btnDismiss: document.getElementById('btnDismiss'),
    cutPanel: document.getElementById('cutPanel')
  };

  let currentMode = null;
  let cutting = false;
  let timers = [];

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function later(fn, ms) {
    timers.push(setTimeout(fn, ms));
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, el]) => {
      el.classList.toggle('active', key === name);
    });
  }

  function stripHtml(html) {
    const t = document.createElement('div');
    t.innerHTML = html;
    return t.textContent || '';
  }

  function buildModeList() {
    els.modeList.innerHTML = Object.entries(MAPA.cortes).map(([key, c]) => `
      <button class="card" type="button" data-mode="${key}">
        <div class="card-id">${MODE_LABELS[key] || key}</div>
        <div class="card-label">${c.trigger}</div>
        <div class="card-hint">${stripHtml(c.sub)}</div>
      </button>
    `).join('');

    els.modeList.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-mode]');
      if (btn) selectMode(btn.dataset.mode);
    });
  }

  function selectMode(key) {
    if (!MAPA.cortes[key]) return;
    currentMode = key;
    const c = MAPA.cortes[key];

    els.readyTag.textContent = MODE_LABELS[key] || key;
    els.triggerText.textContent = c.trigger;
    els.triggerSub.textContent = stripHtml(c.sub);
    els.btnCutLabel.textContent = c.btn;

    showScreen('ready');
  }

  function clearCutAnimations() {
    clearTimers();
    els.textOld.classList.remove('show');
    els.textCut.classList.remove('show');
    els.textAnchor.classList.remove('show');
    els.btnDismiss.classList.remove('show');
    els.scoreboard.classList.remove('cut');
    els.meter.classList.remove('cut');
  }

  function resetCutVisuals() {
    clearCutAnimations();
    cutting = false;
    els.scoreboard.classList.add('is-hidden');
    els.meter.classList.add('is-hidden');
  }

  function runCut() {
    if (cutting || !currentMode) return;

    const c = MAPA.cortes[currentMode];
    cutting = true;
    clearCutAnimations();

    els.textOld.textContent = c.old;
    els.textCut.innerHTML = c.cut;
    els.textAnchor.textContent = c.anchor;

    const showScore = c.visual === 'scoreboard';
    const showMeter = c.visual === 'meter';

    els.scoreboard.classList.toggle('is-hidden', !showScore);
    els.meter.classList.toggle('is-hidden', !showMeter);

    showScreen('cut');

    later(() => {
      if (showScore) later(() => els.scoreboard.classList.add('cut'), 180);
      if (showMeter) later(() => els.meter.classList.add('cut'), 180);
      later(() => els.textOld.classList.add('show'), 320);
      later(() => els.textCut.classList.add('show'), 460);
      later(() => {
        els.textAnchor.classList.add('show');
        els.btnDismiss.classList.add('show');
      }, 580);
    }, 40);
  }

  function dismissCut() {
    if (!cutting) return;
    resetCutVisuals();
    showScreen('ready');
  }

  function backToPick() {
    resetCutVisuals();
    currentMode = null;
    showScreen('pick');
  }

  // Evitar doble disparo en táctil (Android Chrome)
  function bindTap(el, handler) {
    let lastTouch = 0;
    el.addEventListener('touchstart', () => {}, { passive: true });
    el.addEventListener('touchend', (e) => {
      lastTouch = Date.now();
      e.preventDefault();
      handler(e);
    }, { passive: false });
    el.addEventListener('click', (e) => {
      if (Date.now() - lastTouch < 500) return;
      handler(e);
    });
  }

  bindTap(els.btnCut, runCut);
  bindTap(els.btnDismiss, dismissCut);
  bindTap(els.btnBackPick, backToPick);

  buildModeList();
  SISTEMA.injectNav('cortar.html');

  const pre = SISTEMA.qs('modo');
  if (pre && MAPA.cortes[pre]) {
    selectMode(pre);
  }
})();
