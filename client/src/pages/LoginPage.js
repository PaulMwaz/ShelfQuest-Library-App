const LoginPage = () => {
  const div = document.createElement("div");
  div.classList.add("auth_wrapper");

  div.innerHTML = `
    <div class="auth_box">
      <h2>Login</h2>
      <form id="loginForm">
        <div class="input_group">
          <input type="text" id="loginUsername" placeholder="Username" required />
        </div>
        <div class="input_group">
          <input type="password" id="loginPassword" placeholder="Password" required />
        </div>
        <div class="input_group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  `;

  return div;
};

const setupLogin = () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;

      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (response.ok) {
          localStorage.setItem("token", result.token);
          alert("Login successful!");
          navigateTo("home");
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please try again.");
      }
    });
  }
};

export { LoginPage, setupLogin };
