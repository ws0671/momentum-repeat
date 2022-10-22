const changeBg = document.querySelector(".change-bg");
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
function selectImg() {
  const todaysImg = img[Math.floor(Math.random() * img.length)];
  const bgImg = document.createElement("img");
  bgImg.classList.add("bg-image");
  bgImg.src = `img/${todaysImg}`;
  bgImg.style.width = "100vw";
  bgImg.style.height = "100vh";
  bgImg.style.position = "absolute";
  bgImg.style.top = 0;
  bgImg.style.left = 0;
  bgImg.style.zIndex = -1;
  return bgImg;
}

function bgInsert() {
  const bgImg = selectImg();
  const bgTag = document.querySelector(".bg-image");
  if (bgTag) {
    bgTag.parentNode.replaceChild(bgImg, bgTag);
  } else document.body.appendChild(bgImg);
}

if (savedUserName) {
  const bgImg = selectImg();
  document.body.appendChild(bgImg);
}

loginForm.addEventListener("submit", bgInsert);
changeBg.addEventListener("click", bgInsert);
