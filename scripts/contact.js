// Contact page animations
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') {
    console.error('GSAP library not loaded');
    return;
  }

  // Hero animations
  gsap.to('#title', { 
    duration: 0.9, 
    y: 0,
    opacity: 1, 
    ease: 'power3.out',
    from: { y: 30, opacity: 0 }
  });

  gsap.to('#subtitle', { 
    duration: 1, 
    y: 0,
    opacity: 1, 
    delay: 0.15, 
    ease: 'power3.out',
    from: { y: 20, opacity: 0 }
  });

  // Animación de tarjetas de contacto con stagger
  const contactCards = gsap.utils.toArray('.contact-card');
  if (contactCards.length > 0) {
    contactCards.forEach((card, i) => {
      gsap.to(card, {
        duration: 0.7,
        y: 0,
        opacity: 1,
        stagger: 0.12,
        delay: 0.35 + (i * 0.12),
        ease: 'power2.out',
        from: { y: 30, opacity: 0 }
      });
    });
  }

  // Animación sección social
  gsap.to('.contact-social', { 
    duration: 0.8, 
    y: 0,
    opacity: 1, 
    delay: 0.8, 
    ease: 'power2.out',
    from: { y: 30, opacity: 0 }
  });

  // Hover effects en botones sociales
  gsap.utils.toArray('.social-link').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { 
        scale: 1.08, 
        duration: 0.3, 
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { 
        scale: 1, 
        duration: 0.3, 
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });
  });

  // Hover effects en tarjetas
  gsap.utils.toArray('.contact-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -12,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });
  });

  console.log('Contact page animations loaded');
});
