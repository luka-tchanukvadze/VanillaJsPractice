export function initSlider() {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  let currentSlide = 0;

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();

      users.forEach((user) => {
        const slide = document.createElement("div");
        slide.className = "slider-item";
        slide.innerHTML = `
                  <h3>${user.name}</h3>
                  <p>${user.email}</p>
                  <p>${user.company.name}</p>
              `;
        sliderWrapper.appendChild(slide);
      });
      updateSlider();
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  function updateSlider() {
    const slides = document.querySelectorAll(".slider-item");
    if (slides.length > 0) {
      sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }

  prevBtn.addEventListener("click", () => {
    const slides = document.querySelectorAll(".slider-item");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    const slides = document.querySelectorAll(".slider-item");
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  });

  fetchUsers();
}
