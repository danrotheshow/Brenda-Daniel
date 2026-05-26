const countdown = document.getElementById("countdown");

const weddingDate = new Date("May 15, 2027 17:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  countdown.innerHTML = `
    ${days} días 
    ${hours} horas 
    ${minutes} minutos 
    ${seconds} segundos
  `;

}, 1000);