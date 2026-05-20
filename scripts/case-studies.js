// Case Studies Filter Functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const caseStudyCards = document.querySelectorAll(".case-study-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      // Actualizar botón activo
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Filtrar tarjetas
      caseStudyCards.forEach((card) => {
        const categories = card.getAttribute("data-category").split(",");

        if (filterValue === "all" || categories.includes(filterValue)) {
          card.style.display = "grid";
          card.style.animation = "none";
          setTimeout(() => {
            card.style.animation = "fadeInUp 0.6s ease-out";
          }, 10);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Manejar clics en botones "Ver caso completo"
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtns = document.querySelectorAll(".read-more-btn");

  readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "/proyectos.html";
    });
  });

  const viewMoreBtn = document.querySelector(".view-more-btn");
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", function () {
      window.location.href = "/proyectos.html";
    });
  }
});
