// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Carousel scrolling logic (casco & trajes)
    window.scrollSlide = function (containerId, direction) {
      const container = document.getElementById(containerId);
      const item = container.querySelector(".helmet-card");
      if (!item) return;
  
      const itemStyle = window.getComputedStyle(item);
      const gap = parseInt(itemStyle.marginRight || 24);
      const scrollAmount = item.offsetWidth + gap;
  
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    };
  
    // Optional: Auto-scroll behavior
    const autoScrollContainers = ["cascoInner", "trajesInner"];
  
    autoScrollContainers.forEach((id) => {
      const container = document.getElementById(id);
      let autoScroll = setInterval(() => scrollSlide(id, 1), 7000);
  
      container.addEventListener("mouseenter", () => clearInterval(autoScroll));
      container.addEventListener("mouseleave", () => {
        autoScroll = setInterval(() => scrollSlide(id, 1), 7000);
      });
    });
  });
  