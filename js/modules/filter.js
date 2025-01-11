export function initFilter() {
  const filterInput = document.getElementById("filterInput");
  const usersList = document.getElementById("usersList");
  let users = [];

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      users = await response.json();
      displayUsers(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      usersList.innerHTML =
        "<p>Failed to load users. Please try again later.</p>";
    }
  }

  function displayUsers(filteredUsers) {
    usersList.innerHTML = filteredUsers
      .map(
        (user) => `
          <div class="user-item">
              <h3>${user.name}</h3>
              <p>${user.email}</p>
              <p>${user.company.name}</p>
          </div>
      `
      )
      .join("");
  }

  filterInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.company.name.toLowerCase().includes(searchTerm)
    );
    displayUsers(filteredUsers);
  });

  fetchUsers();
}
