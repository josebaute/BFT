// Animaciones y manejo del formulario en la página de contacto
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    gsap.from('#title', { duration: 0.9, y: 30, opacity: 0, ease: 'power3.out' });
    gsap.from('#subtitle', { duration: 1, y: 20, opacity: 0, delay: 0.15, ease: 'power3.out' });

    gsap.from('.contact-image', { duration: 1, x: -30, opacity: 0, delay: 0.2, ease: 'power2.out' });
    gsap.from('.contact-card', { duration: 1, x: 30, opacity: 0, delay: 0.25, ease: 'power2.out' });

    // Animación de los campos del formulario
    gsap.utils.toArray('#contact-form input, #contact-form textarea, #contact-form .btn').forEach((el, i) => {
      gsap.from(el, { duration: 0.6, y: 12, opacity: 0, delay: 0.35 + i * 0.06, ease: 'power2.out' });
    });
  }

  // Manejo de envío (simulado) con feedback y animación
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.style.display = 'block';
      status.textContent = 'Enviando...';

      // pequeña animación de confirmación
      gsap.to(status, { opacity: 1, duration: 0.3 });

      // Simulamos envío (aquí podrías llamar a tu API)
      setTimeout(() => {
        status.textContent = '¡Gracias! Tu mensaje ha sido recibido.';
        gsap.fromTo(status, { scale: 0.95 }, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.6)' });
        form.reset();
      }, 900);
    });
  }
});
