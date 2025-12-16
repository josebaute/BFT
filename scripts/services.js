// Animaciones para la página de Servicios
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    // Hero section animations
    gsap.from('#title', { duration: 0.9, y: 30, opacity: 0, ease: 'power3.out' });
    gsap.from('#subtitle', { duration: 1, y: 20, opacity: 0, delay: 0.15, ease: 'power3.out' });

    // Service detailed cards animation (staggered from both sides)
    gsap.utils.toArray('.service-detailed').forEach((card, i) => {
      const isAlternate = card.classList.contains('alternate');
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        x: isAlternate ? 50 : -50,
        opacity: 0,
        ease: 'power2.out'
      });
    });

    // Process timeline animation
    gsap.utils.toArray('.process-step').forEach((step, i) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: '.services-process',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        y: 30,
        opacity: 0,
        delay: i * 0.1,
        ease: 'power2.out'
      });
    });

    // Tech grid animation
    gsap.utils.toArray('.tech-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: '.services-tech',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        scale: 0.9,
        opacity: 0,
        delay: i * 0.08,
        ease: 'back.out(1.2)'
      });
    });

    // Service image hover effect
    gsap.utils.toArray('.service-image').forEach(img => {
      img.addEventListener('mouseenter', () => {
        gsap.to(img, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      img.addEventListener('mouseleave', () => {
        gsap.to(img, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

    // CTA section animation
    gsap.from('.services-cta h2', {
      scrollTrigger: {
        trigger: '.services-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: 'power2.out'
    });

    gsap.from('.services-cta p', {
      scrollTrigger: {
        trigger: '.services-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 0.15,
      ease: 'power2.out'
    });

    gsap.from('.services-cta .btn', {
      scrollTrigger: {
        trigger: '.services-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      scale: 0.9,
      opacity: 0,
      delay: 0.3,
      ease: 'elastic.out(1, 0.6)'
    });
  }
});
