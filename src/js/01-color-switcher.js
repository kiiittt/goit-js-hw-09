const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
    startBtn.disabled = true; 
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.disabled = false; 
});