// Animaciones para la página de Nosotros
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    // Hero section animations
    gsap.from('#title', { duration: 0.9, y: 30, opacity: 0, ease: 'power3.out' });
    gsap.from('#subtitle', { duration: 1, y: 20, opacity: 0, delay: 0.15, ease: 'power3.out' });

    // About wrapper animation (staggered)
    gsap.utils.toArray('.about-wrapper > div').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 40,
        opacity: 0,
        delay: i * 0.15,
        ease: 'power2.out'
      });
    });

    // Values cards animation with stagger
    gsap.utils.toArray('.value-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: '.about-values',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        y: 30,
        opacity: 0,
        delay: i * 0.1,
        ease: 'power2.out'
      });
    });

    // Team members animation
    gsap.utils.toArray('.team-member').forEach((member, i) => {
      gsap.from(member, {
        scrollTrigger: {
          trigger: '.about-team',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.7,
        y: 40,
        opacity: 0,
        delay: i * 0.12,
        ease: 'power2.out'
      });
    });

    // Hover effect on team members and value cards
    gsap.utils.toArray('.team-member, .value-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(el, { y: -8, duration: 0.3, ease: 'power2.out' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { y: 0, duration: 0.3, ease: 'power2.out' });
      });
    });

    // CTA section animation
    gsap.from('.about-cta h2', {
      scrollTrigger: {
        trigger: '.about-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: 'power2.out'
    });

    gsap.from('.about-cta p', {
      scrollTrigger: {
        trigger: '.about-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 0.15,
      ease: 'power2.out'
    });

    gsap.from('.about-cta .btn', {
      scrollTrigger: {
        trigger: '.about-cta',
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
