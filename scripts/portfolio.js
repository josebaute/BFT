const track = document.querySelector(".portfolio-track");
const cards = document.querySelectorAll(".portfolio-card");
const next = document.querySelector(".arrow.right");
const prev = document.querySelector(".arrow.left");

let currentIndex = 0;
let cardWidth = 0; // se calcula dinámicamente
const totalCards = cards.length;

if (!track || totalCards === 0) {
  // nada que hacer
  console.warn("Portfolio: no se encontraron elementos necesarios.");
} else {
  function updateCardWidth() {
    const cardRect = cards[0].getBoundingClientRect();
    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.gap) || 20;
    cardWidth = Math.round(cardRect.width + gap);
  }

  function clampIndex(i) {
    return Math.max(0, Math.min(i, totalCards - 1));
  }

  function goToSlide(index) {
    currentIndex = clampIndex(index);
    gsap.to(track, {
      x: -cardWidth * currentIndex,
      duration: 0.6,
      ease: "power3.out"
    });
  }

  // Autoplay timeline
  const autoplay = gsap.timeline({ repeat: -1, paused: false });
  for (let i = 1; i <= totalCards; i++) {
    autoplay.to({}, {
      duration: 4,
      onComplete: () => {
        if (currentIndex < totalCards - 1) goToSlide(currentIndex + 1);
        else goToSlide(0);
      }
    });
  }

  // Inicializar ancho y posicion
  function refresh() {
    const prevX = -cardWidth * currentIndex;
    updateCardWidth();
    // reposicionar inmediatamente acorde al nuevo ancho
    gsap.set(track, { x: -cardWidth * currentIndex });
  }

  window.addEventListener("load", refresh);
  window.addEventListener("resize", refresh);

  // Botones siguiente/anterior
  if (next) next.addEventListener("click", () => { goToSlide(currentIndex + 1); });
  if (prev) prev.addEventListener("click", () => { goToSlide(currentIndex - 1); });

  // Pausar autoplay al hover / touch
  track.addEventListener("mouseenter", () => autoplay.pause());
  track.addEventListener("mouseleave", () => autoplay.resume());
  track.addEventListener("touchstart", () => autoplay.pause(), { passive: true });
  track.addEventListener("touchend", () => autoplay.resume());

  // Soporte táctil: drag / swipe con pointer events
  let pointerActive = false;
  let startX = 0;
  let currentTranslate = 0;

  track.addEventListener("pointerdown", (e) => {
    pointerActive = true;
    startX = e.clientX;
    currentTranslate = -cardWidth * currentIndex;
    track.setPointerCapture(e.pointerId);
    autoplay.pause();
  });

  track.addEventListener("pointermove", (e) => {
    if (!pointerActive) return;
    const delta = e.clientX - startX;
    gsap.set(track, { x: currentTranslate + delta });
  });

  function endPointer(e) {
    if (!pointerActive) return;
    pointerActive = false;
    const delta = e.clientX - startX;
    const threshold = Math.max(40, cardWidth * 0.15);
    if (delta < -threshold) goToSlide(currentIndex + 1);
    else if (delta > threshold) goToSlide(currentIndex - 1);
    else gsap.to(track, { x: -cardWidth * currentIndex, duration: 0.3 });
    try { track.releasePointerCapture(e.pointerId); } catch (err) {}
    autoplay.resume();
  }

  track.addEventListener("pointerup", endPointer);
  track.addEventListener("pointercancel", endPointer);

  // Inicializar primer ancho
  updateCardWidth();
  gsap.set(track, { x: -cardWidth * currentIndex });
}
