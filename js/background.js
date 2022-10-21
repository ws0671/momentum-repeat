const img = [
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.jpg",
  "11.png",
  "12.png",
  "13.png",
  "14.jpg",
  "15.png",
];

const todaysImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${todaysImg}`;
bgImg.style.width = "100vw";
bgImg.style.height = "100vh";
bgImg.style.position = "absolute";
bgImg.style.top = 0;
bgImg.style.left = 0;
bgImg.style.zIndex = -1;

function bgInsert() {
  document.body.appendChild(bgImg);
}
if (savedUserName) {
  document.body.appendChild(bgImg);
}

loginForm.addEventListener("submit", bgInsert);
