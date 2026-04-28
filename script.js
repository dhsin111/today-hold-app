const startButton = document.getElementById('startButton');
const timerText = document.getElementById('timer');
const breathMessage = document.getElementById('breathMessage');

const messages = ['Breathe in', 'Hold', 'Breathe out'];

let secondsLeft = 60;
let timerId = null;
let messageIndex = 0;

function updateView() {
  timerText.textContent = `${secondsLeft} seconds`;
}

function startMinute() {
  if (timerId) return;

  startButton.disabled = true;
  breathMessage.textContent = messages[0];

  timerId = setInterval(() => {
    secondsLeft -= 1;
    updateView();

    messageIndex = (messageIndex + 1) % messages.length;
    breathMessage.textContent = messages[messageIndex];

    if (secondsLeft <= 0) {
      clearInterval(timerId);
      timerId = null;
      timerText.textContent = '0 seconds';
      breathMessage.textContent = 'Thank you for staying.';
      startButton.textContent = 'Done';
    }
  }, 1000);
}

startButton.addEventListener('click', startMinute);
updateView();
