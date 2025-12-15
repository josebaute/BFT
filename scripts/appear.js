gsap.registerPlugin(ScrollTrigger);

// Selecciona todos los títulos
const titles = document.querySelectorAll(".reveal-title");

titles.forEach(title => {

    // Dividir texto en letras
    let letters = title.textContent.split("");

    // Vaciar el contenido
    title.textContent = "";

    // Crear spans por letra
    letters.forEach(letter => {
        let span = document.createElement("span");
        span.style.display = "inline-block";
        span.style.opacity = 0;

        // Manejar espacios correctamente
        if (letter === " ") {
            span.innerHTML = "&nbsp;";
        } else {
            span.textContent = letter;
        }

        title.appendChild(span);
    });

    // Animación GSAP letra por letra
    gsap.to(title.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
            scrub: 1,
            trigger: title,
            start: "top 100%",
        }
    });

});
