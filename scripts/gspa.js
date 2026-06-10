// Animaciones GSAP
gsap.from("#title", { duration: 1.2, y: 40, opacity: 0, ease: "power3.out" });
gsap.from("#subtitle", {
  duration: 1.2,
  y: 20,
  opacity: 0,
  delay: 0.3,
  ease: "power3.out",
});

// Animación para las tarjetas de servicio
const serviceCards = gsap.utils.toArray(".service-card");

serviceCards.forEach((card, i) => {
  // Animación inicial de entrada
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none none",
    },
    duration: 0.6,
    y: 30,
    opacity: 0,
    delay: i * 0.1,
    ease: "power2.out",
  });

  // Efecto de relleno y brillo al pasar (aparece más antes)
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      end: "top 50%",
      scrub: 1,
      markers: false,
    },
    duration: 0.8,
    backgroundColor: "rgba(255, 214, 66, 0.15)",
    borderColor: "#ffd642",
    ease: "power2.out",
  });
});
/*
        gsap.to(".floating-img", {
          y: 20, // cantidad de movimiento hacia abajo
          duration: 2, // duración de un ciclo
          yoyo: true, // vuelve al inicio suavemente
          repeat: -1, // repetir infinitamente
          ease: "power1.inOut",
        });*/

// Partículas
/*
        const canvas = document.getElementById("particles");
        const ctx = canvas.getContext("2d");

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        const particles = [];

        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5
            });
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

                ctx.fillStyle = "rgba(0, 255, 255, 0.7)";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
*/

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#slide-right", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#slide-right",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});
