const clock = document.querySelector("#clock");

function clockOn() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
clockOn();
setInterval(clockOn, 1000);

/*
date.getHours();
date.getMinutes();
date.getSeconds(); */
