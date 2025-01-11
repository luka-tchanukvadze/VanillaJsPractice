export function initForm() {
  const form = document.getElementById("registrationForm");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.querySelector(".toggle-password");

  const validation = {
    username: {
      regex: /^[a-zA-Z0-9]{3,20}$/,
      error:
        "Username must be 3-20 characters long and contain only letters and numbers.",
    },
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      error: "Please enter a valid email address.",
    },
    password: {
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      error:
        "Password must be at least 8 characters long and contain at least one letter and one number.",
    },
  };

  function validateField(field, validationRule) {
    const value = field.value;
    const errorElement = field.nextElementSibling;

    if (!value) {
      showError(errorElement, "This field is required");
      return false;
    }

    if (!validationRule.regex.test(value)) {
      showError(errorElement, validationRule.error);
      return false;
    }

    hideError(errorElement);
    return true;
  }

  function showError(element, message) {
    element.textContent = message;
    element.classList.add("visible");
  }

  function hideError(element) {
    element.textContent = "";
    element.classList.remove("visible");
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
      alert("Registration successful!");
    }
  });

  // Real-time validation
  Object.keys(validation).forEach((fieldName) => {
    const field = form[fieldName];
    field.addEventListener("blur", () => {
      validateField(field, validation[fieldName]);
    });
  });
}
