const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form > input");
const title = document.getElementById("title");

// 같은 문자열을 두 번 이상 사용할 경우 변수로 만들어주면 좋음.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginForm(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintingTitle(username);
}

function paintingTitle(username) {
  title.innerText = `Welcome ${username}`;
  title.classList.remove(HIDDEN_CLASSNAME);
}

let savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginForm);
} else {
  paintingTitle(savedUserName);
}
