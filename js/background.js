const img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const todaysImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${todaysImg}`;

document.body.appendChild(bgImg);
