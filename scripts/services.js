// Animaciones para la página de Servicios
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    // Hero section animations
    gsap.from('#title', { duration: 0.9, y: 30, opacity: 0, ease: 'power3.out' });
    gsap.from('#subtitle', { duration: 1, y: 20, opacity: 0, delay: 0.15, ease: 'power3.out' });

    // Service detailed cards animation (staggered from both sides)
    gsap.utils.toArray('.service-detailed',).forEach((card, i) => {
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

    // Process timeline animation with cascading yellow fill effect
    const processSteps = gsap.utils.toArray('.process-step');
    
    processSteps.forEach((step, i) => {
      // Animación inicial de entrada
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

      // Efecto de relleno cascada individual (una por una, al llegar a mitad del viewport)
      gsap.to(step, {
        scrollTrigger: {
          trigger: step,
          start: 'center center',
          end: 'center 40%',
          scrub: 1,
          markers: false
        },
        duration: 0.8,
        backgroundColor: 'rgba(255, 214, 66, 0.15)',
        borderColor: '#ffd642',
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
