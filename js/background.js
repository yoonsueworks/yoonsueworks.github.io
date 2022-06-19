const images = ["0.JPEG", "1.JPEG", "2.JPEG", "3.JPEG", "4.JPEG", "5.JPEG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

const insbf = document.createElement("img");
bgImage.before(insbf);
