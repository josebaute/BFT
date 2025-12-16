// Esperar a que el DOM esté listo y GSAP esté disponible
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector(".hamburger");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuOverlayNav = document.querySelector(".menu-overlay-nav");
  const menuLinks = document.querySelectorAll(".menu-overlay-nav a");

  let isMenuOpen = false;

  if (!hamburger || !menuOverlay) {
    console.error("Hamburger o menu-overlay no encontrado");
    return;
  }

  // Abrir/cerrar menú
  hamburger.addEventListener("click", toggleMenu);

  // Cerrar menú al hacer clic en un enlace
  menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Cerrar menú al hacer clic fuera (en el overlay)
  menuOverlay.addEventListener("click", (e) => {
    if (e.target === menuOverlay) {
      closeMenu();
    }
  });

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    isMenuOpen = true;
    menuOverlay.style.display = "flex";
    menuOverlay.style.opacity = "0";

    // Animar overlay (fade in)
    gsap.to(menuOverlay, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    });

    // Animar hamburger (cambiar a X)
    gsap.to(".hamburger span:nth-child(1)", {
      rotation: 45,
      y: 10,
      duration: 0.4,
      ease: "power2.out"
    });
    gsap.to(".hamburger span:nth-child(2)", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(".hamburger span:nth-child(3)", {
      rotation: -45,
      y: -10,
      duration: 0.4,
      ease: "power2.out"
    });

    // Animar enlaces (stagger)
    gsap.from(menuLinks, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.08,
      delay: 0.1,
      ease: "power2.out"
    });
  }

  function closeMenu() {
    isMenuOpen = false;

    // Animar overlay (fade out)
    gsap.to(menuOverlay, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        menuOverlay.style.display = "none";
      }
    });

    // Animar hamburger (volver a normal)
    gsap.to(".hamburger span:nth-child(1)", {
      rotation: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
    gsap.to(".hamburger span:nth-child(2)", {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(".hamburger span:nth-child(3)", {
      rotation: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  }
});

