export function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollToTop");
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    // Show/hide scroll to top button
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }

    // Change header background on scroll
    if (window.scrollY > 50) {
      header.style.background = "var(--bg-secondary)";
    } else {
      header.style.background = "var(--bg-primary)";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
