const img = ["10.jpg", "11.png", "12.png", "13.png", "14.jpg"];

const todaysImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${todaysImg}`;
bgImg.style.width = "100vw";
bgImg.style.height = "100vh";
bgImg.style.position = "absolute";
bgImg.style.top = 0;
bgImg.style.left = 0;
bgImg.style.zIndex = -1;

if (savedUserName !== null) {
  document.body.appendChild(bgImg);
}
