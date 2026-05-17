// Portfolio Page Filter Functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".portfolio-filter-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      // Actualizar botón activo
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Filtrar tarjetas
      portfolioCards.forEach((card) => {
        const categories = card.getAttribute("data-category").split(",");

        if (filterValue === "all" || categories.includes(filterValue)) {
          card.style.display = "block";
          card.style.animation = "none";
          setTimeout(() => {
            card.style.animation = "portfolioFadeIn 0.6s ease-out";
          }, 10);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
