export function initCookieNotice() {
  const cookieNotice = document.getElementById("cookieNotice");
  const acceptButton = document.getElementById("acceptCookies");

  // Check if user has already accepted cookies
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieNotice.style.display = "flex";
  }

  acceptButton.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieNotice.style.display = "none";
  });
}
