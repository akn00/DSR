let intervalId;
let running = false;
let startTime;
let elapsedTime = 0;

const display = document.querySelector('.timer');
const startStopBtn = document.querySelector('#startStop');
const resetBtn = document.querySelector('#reset');
const logTable = document.querySelector('table');

function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;

    return timeString;
}


function updateDisplay() {
    const elapsedTimeMillis = Date.now() - startTime + elapsedTime;
    display.textContent = formatTime(elapsedTimeMillis);
}


  


  function startStop() {
    if (running) {
      // stop button
      clearInterval(intervalId);
      running = false;
      startStopBtn.textContent = 'Start';
  
      // add new row to log table
      const logRow = logTable.insertRow();
      const timeCell = logRow.insertCell();
      const elapsed = Date.now() - startTime; // calculate elapsed time
      elapsedTime += elapsed; 
      timeCell.textContent = formatTime(Date.now() - startTime);
  
    } else {
      // start button
      running = true;
      startStopBtn.textContent = 'Stop';
  
      if (display.innerHTML === '00:00:00:000') {
        startTime = Date.now() - elapsedTime;
      } else {
        // reset elapsed time to zero
        elapsedTime = 0;
      }
  
      intervalId = setInterval(updateDisplay, 10);
    }
  }
  

  

function reset() {
    clearInterval(intervalId);
    running = false;
    startStopBtn.textContent = 'Start';
    display.textContent = '00:00:00:000';
    logTable.innerHTML = '<tr><th>Time</th></tr>';
    elapsedTime = 0;
}