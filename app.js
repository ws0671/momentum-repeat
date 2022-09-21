const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form > input");
const title = document.getElementById("title");

function handleLoginForm(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  title.innerText = `Welcome ${username}`;
  title.classList.remove("hidden");
}

loginForm.addEventListener("submit", handleLoginForm);
