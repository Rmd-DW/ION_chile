document.addEventListener("DOMContentLoaded", function () {
  function scrollSlide(containerId, direction) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const card = container.querySelector(".helmet-card");
    if (!card) return;

    // Usamos el ancho real más el gap manualmente
    const cardWidth = card.offsetWidth;
    const gap = 24; // en píxeles (equivale a 1.5rem aprox)
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }

  // Exponer globalmente la función para los botones onclick
  window.scrollSlide = scrollSlide;

  // Auto-scroll
  const autoScrollContainers = ["cascoInner", "trajesInner"];
  autoScrollContainers.forEach((id) => {
    const container = document.getElementById(id);
    if (!container) return;

    let autoScroll = setInterval(() => scrollSlide(id, 1), 7000);

    container.addEventListener("mouseenter", () => clearInterval(autoScroll));
    container.addEventListener("mouseleave", () => {
      autoScroll = setInterval(() => scrollSlide(id, 1), 7000);
    });
  });
});
