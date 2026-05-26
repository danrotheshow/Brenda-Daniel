const countdown = document.getElementById("countdown");

const weddingDate = new Date("May 15, 2027 17:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  countdown.innerHTML = `Faltan ${days} días`;

}, 1000);