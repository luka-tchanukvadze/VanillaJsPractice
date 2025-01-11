export function initAccordion() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isActive = content.classList.contains("active");

      // Close all accordion items
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.classList.remove("active");
        item.style.maxHeight = null;
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        content.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}
