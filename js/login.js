const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector("#login-form > input");
const title = document.getElementById("title");
const loginTitle = document.querySelector(".login-form__title");
const middle = document.querySelector(".middle");
const middleImg = document.querySelectorAll(".middle img");

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
  title.innerText = `안녕! ${username}`;
  title.classList.remove(HIDDEN_CLASSNAME);
  title.style.animation = "fadeIn 1.5s";
  setTimeout(hideTitle, 1500);
}

function hideTitle() {
  title.style.animation = "fadeOut 1.5s";
  setTimeout(() => {
    title.classList.add(HIDDEN_CLASSNAME);
    showContent();
  }, 1500);
}

function showContent() {
  main.classList.remove("hidden");
  article.classList.remove("hidden");
  middle.classList.remove("hidden");
  main.style.animation = "fadeIn4 1.5s";
  article.style.animation = "fadeIn4 1.5s";
  middleImg[0].style.animation = "fadeIn4 1.5s";
  middleImg[1].style.animation = "fadeIn4 1.5s";
}

let savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginForm);
} else {
  paintingTitle(savedUserName);
}
