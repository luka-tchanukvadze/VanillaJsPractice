export function initForm() {
  const form = document.getElementById("registrationForm");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.querySelector(".toggle-password");

  const validation = {
    username: /^[a-zA-Z0-9]{3,20}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };

  function validateField(field, regex) {
    const value = field.value;
    const errorElement = field.nextElementSibling;

    if (!value) {
      errorElement.textContent = "This field is required";
      return false;
    }

    if (!regex.test(value)) {
      errorElement.textContent = "Invalid format";
      return false;
    }

    errorElement.textContent = "";
    return true;
  }

  togglePassword.addEventListener("click", () => {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "🔒";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isUsernameValid = validateField(form.username, validation.username);
    const isEmailValid = validateField(form.email, validation.email);
    const isPasswordValid = validateField(form.password, validation.password);

    if (isUsernameValid && isEmailValid && isPasswordValid) {
      console.log("Form submitted successfully");
      form.reset();
    }
  });
}
