document.addEventListener("DOMContentLoaded", function () {
  // ==== SCROLL CAROUSEL ====
  function scrollSlide(containerId, direction) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const card = container.querySelector(".helmet-card");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 24; // 1.5rem aprox.
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }

  window.scrollSlide = scrollSlide;

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

  // ==== MODAL ZOOM ====
  const modal = new bootstrap.Modal(document.getElementById("mediaModal"));
  const modalContent = document.getElementById("modalBodyContent");

  document.querySelectorAll('#fotos img, #videos video').forEach(el => {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', () => {
      if (el.tagName === 'IMG') {
        modalContent.innerHTML = `<img src="${el.src}" class="img-fluid">`;
      } else if (el.tagName === 'VIDEO') {
        const videoSrc = el.querySelector('source')?.src || el.src;
        modalContent.innerHTML = `
          <video class="w-100" controls autoplay>
            <source src="${videoSrc}" type="video/mp4">
            Tu navegador no soporta el video.
          </video>
        `;
      }
      modal.show();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});