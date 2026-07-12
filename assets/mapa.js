/** Mapa personal — editar con experiencia */
window.MAPA = {
  nuclear: {
    vieja: 'Hay una versión ideal de mí. Este instante debería parecerse más a ella.',
    nueva: 'Este instante no es una búsqueda de la versión ideal de mí.'
  },

  ciclo: [
    { t: 'Estás bien — sin juez, sin "di algo bueno"' },
    { t: 'Flash: miedo a perderlo', hi: true },
    { t: 'Te empujas: "Di algo bueno" — aceleras' },
    { t: 'Todo se vuelve evaluación — de golpe' },
    { t: '"Otra vez…" — fuera del cristal' },
    { t: 'Análisis sobre ti: ¿cómo recupero al ideal?' },
    { t: 'Espeso. Tribunal. Pierdes lo que querías guardar' }
  ],

  router: [
    {
      id: 'flash',
      href: 'modulo-5.html',
      label: 'Miedo a perderlo',
      hint: 'Notaste el flash. Impulso de acelerar y "di algo bueno".'
    },
    {
      id: 'fuera',
      href: 'modulo-2.html',
      label: '"Otra vez…" — mirando desde fuera',
      hint: 'Envidia. Decepción. El marcador corriendo.'
    },
    {
      id: 'espeso',
      href: 'modulo-4.html',
      label: 'Espeso — juzgando lo que diría',
      hint: 'Sin claridad. Analizando en vez de estar.'
    },
    {
      id: 'bucle',
      href: 'modulo-4.html?freno=analisis',
      label: 'Análisis sobre mí — el bucle',
      hint: '"¿Cómo recupero la versión ideal?"'
    },
    {
      id: 'cortar',
      href: 'cortar.html',
      label: 'Necesito cortar ya',
      hint: 'Elegir qué orden revocar en este instante.'
    }
  ],

  cortes: {
    flash: {
      trigger: 'Miedo a perderlo',
      sub: 'Impulso de acelerar. Orden interna antes del filtro.',
      btn: 'No acelerar',
      old: 'Di algo bueno.',
      cut: 'No me empujo a ser <em>nadie</em> ahora.',
      anchor: 'No sostener. No aprovechar. No evaluar.'
    },
    comparacion: {
      trigger: 'Otra vez…',
      sub: 'Mirando desde fuera. Él conecta. Yo en la grada.',
      btn: 'Cortar marcador',
      old: 'Si no destaco, no valgo.',
      cut: 'Mi valor no depende de <em>ganar la comparación</em>.',
      anchor: 'No entres en batalla. No te rindas. Deja de medir.',
      visual: 'scoreboard'
    },
    evaluacion: {
      trigger: 'Todo es examen',
      sub: 'El filtro global cayó. Nada es situación — todo es prueba.',
      btn: 'Revocar examen',
      old: 'Tengo que aprobar este instante.',
      cut: 'Nada de esto es una evaluación <em>ahora</em>.',
      anchor: 'No compruebes si funcionó. Eso es otra prueba.'
    },
    tribunal: {
      trigger: 'Tribunal activo',
      sub: 'Auditando cada frase antes de soltarla.',
      btn: 'Soltar juez',
      old: 'Esta frase tiene que ser buena.',
      cut: 'Este instante no es un caso <em>sobre mí</em>.',
      anchor: 'No resuelvas. No analices. No produzcas.',
      visual: 'meter'
    },
    ideal: {
      trigger: 'Buscando al ideal',
      sub: 'Quieres recuperar la versión highlight. Solo highlights, nunca errores.',
      btn: 'Soltar búsqueda',
      old: 'Tengo que volver a ser esa versión.',
      cut: 'No tengo que <em>recuperar</em> nada ahora.',
      anchor: 'Lo que funcionó: imperfecto, te reíste, auténtico. Sin juez.'
    },
    instante: {
      trigger: 'Demasiado peso',
      sub: 'El pasado como veredicto. Exiges claridad a este momento.',
      btn: 'Soltar exigencia',
      old: 'Este instante me debe claridad.',
      cut: 'Este instante <em>no está en juicio</em>.',
      anchor: 'El pasado no vota aquí. No necesita ser entendido ahora.'
    }
  },

  ramas: {
    a: {
      tag: 'Rama A · Ya la di por perdida',
      truth: 'No fallaste. <em>No empezaste.</em>',
      insight: 'Él va bien — riendo, fluido. Tú fuera, rígido. El tribunal cerró sin juicio. Diste por perdida basándote en su highlight reel, no en datos tuyos.',
      link: 'cortar.html?modo=comparacion'
    },
    b: {
      tag: 'Rama B · Vi mi oportunidad',
      truth: 'No entraste a conectar. <em>Entraste porque el marcador se inclinó.</em>',
      insight: 'Él falló — ahí "volviste a la batalla". Sentirte bien no valida el sistema. Prueba que estar dentro alivia, pero el ranking sigue siendo la brújula.',
      link: 'cortar.html?modo=comparacion'
    }
  },

  frenos: {
    espeso: {
      tag: 'Tu freno · Tribunal antes de hablar',
      truth: 'No estás bloqueado. Estás <em>auditando cada frase</em>.',
      insight: '"Di algo bueno" antes de abrir la boca. Cada palabra pasa filtro de highlight reel. Por eso espeso, sin originalidad.',
      cut: 'tribunal',
      link: 'cortar.html?modo=tribunal'
    },
    analisis: {
      tag: 'Tu freno · El bucle de entender',
      truth: 'No necesitas más mapa. Estás <em>investigándote en vivo</em>.',
      insight: '"¿Qué me pasa para que no pase más?" — entender se convirtió en control. El análisis sobre ti ES el bucle. Tu señal de entrada: solo notas el análisis, no el cuerpo.',
      cut: 'ideal',
      link: 'cortar.html?modo=ideal'
    },
    evaluacion: {
      tag: 'Tu freno · Filtro global',
      truth: 'No es una situación. Es <em>todo convertido en examen</em>.',
      insight: 'Cae de golpe — no una conversación, el ambiente entero. Vigilancia sin objeto. Miedo a perder lo bueno → todo es prueba.',
      cut: 'evaluacion',
      link: 'cortar.html?modo=evaluacion'
    },
    comparar: {
      tag: 'Tu freno · La grada',
      truth: 'Mirando desde fuera. <em>"Otra vez…"</em>',
      insight: 'No mides una conversación — mides posición. Él arriba, tú abajo. Envidia como termómetro del ranking.',
      cut: 'comparacion',
      link: 'modulo-2.html'
    }
  },

  evidencia: {
    ancla: 'Sin tribunal: imperfecto → te reíste → corregiste → conectaste. La gente lo apreció.',
    tipos: [
      { id: 'rigid', label: 'Juez activo' },
      { id: 'solté', label: 'Solté el juez' },
      { id: 'flash', label: 'Corté el flash' },
      { id: 'tarde', label: 'Noté tarde' }
    ]
  }
};

window.SISTEMA = {
  navItems: [
    { href: 'index.html', num: '0', label: 'Inicio' },
    { href: 'cortar.html', num: '1', label: 'Cortar' },
    { href: 'modulo-2.html', num: '2', label: 'Ramas' },
    { href: 'modulo-3.html', num: '3', label: 'Log' },
    { href: 'modulo-4.html', num: '4', label: 'Frenos' },
    { href: 'modulo-5.html', num: '5', label: 'Flash' }
  ],

  renderNav(activeHref) {
    const path = activeHref || location.pathname.split('/').pop() || 'index.html';
    return `<nav class="bottom-nav" aria-label="Módulos">${this.navItems.map(item => `
      <a class="nav-item${item.href === path ? ' active' : ''}" href="${item.href}">
        <span class="nav-num">${item.num}</span>${item.label}
      </a>`).join('')}</nav>`;
  },

  injectNav(activeHref) {
    document.body.insertAdjacentHTML('beforeend', this.renderNav(activeHref));
  },

  qs(name) {
    return new URLSearchParams(location.search).get(name);
  }
};
