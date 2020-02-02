// Get a random word and show it
let randomNumber = 0;
let newWordBtn = document.querySelector('.btn-new-word');
newWordBtn.addEventListener('click', getWord);
function getWord() {
  fetch(wordLength)
    .then(res => res.json())
    .then(array => {
      randomNumber = Math.floor(Math.random() * array.length);
      showLetter(array[randomNumber]);
    });
}

// Replay word
let replayBtn = document.querySelector('.btn-replay');
replayBtn.addEventListener('click', replayWord);
function replayWord() {
  fetch(wordLength)
    .then(res => res.json())
    .then(array => showLetter(array[randomNumber]));
}

// Mode
let currentMode = 'text';
let modeBtn = document.querySelector('.btn-mode');
modeBtn.addEventListener('click', changeMode);
function checkMode(mode) {
  if (mode === 'text') {
    modeBtn.innerHTML = "<img src='img/a.png'/>";
  } else {
    modeBtn.innerHTML = "a";
  }
}
function changeMode() {
  if (currentMode === 'text') {
    currentMode = 'image';
  } else {
    currentMode = 'text';
  }
  checkMode(currentMode);
}

// Cheatsheet
let cheatSheetMode = 'open';
let cheatSheet = document.querySelector('.cheat-sheet');
cheatSheet.addEventListener('click', toggleCheatSheet);
function toggleCheatSheet() {
  if (cheatSheetMode === 'open') {
    cheatSheetMode = 'close';
    cheatSheet.innerHTML = "<i class='fas fa-arrow-down'></i>";
    cheatSheet.classList.add("border-transition");
  } else {
    cheatSheetMode = 'open';
    cheatSheet.innerHTML = "<img src='img/cheat-sheet.png'/>";
    cheatSheet.classList.remove("border-transition");
  }
}

// Input
let wordForm = document.querySelector('form');
let wordInput = document.querySelector('.input-word');
let letter = document.querySelector('.letter');
wordForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let input = wordInput.value;
  fetch(wordLength)
    .then(res => res.json())
    .then(array => {
      if (input === array[randomNumber]) {
        letter.innerHTML = "<i class='fas fa-check'></i>";
      } else {
        letter.innerHTML = "<i class='fas fa-times'></i>";
      }
    });
  wordInput.value = "";
});

// Default Speed
let slowerSpeed = 1300;
let slowSpeed = 1000;
let fastSpeed = 700;
let fasterSpeed = 300;
let speedBtn = document.querySelector('.btn-speed');
let currentSpeed = speedBtn.textContent;
checkSpeed(currentSpeed);
function checkSpeed(speed) {
  if (speed === 'Slower') {
    time = slowerSpeed;
  } else if (speed === 'Slow') {
    time = slowSpeed;
  } else if (speed === 'Fast') {
    time = fastSpeed;
  } else if (speed === 'Faster') {
    time = fasterSpeed;
  }
}
speedBtn.addEventListener('click', () => {
  switch (currentSpeed) {
    case 'Slower':
      currentSpeed = 'Slow';
      break;
    case 'Slow':
      currentSpeed = 'Fast';
      break;
    case 'Fast':
      currentSpeed = 'Faster';
      break;
    case 'Faster':
      currentSpeed = 'Slower';
  }
  speedBtn.textContent = currentSpeed;
  checkSpeed(currentSpeed);
});

// Control length of word
let shortWords = "words/words-short.txt";
let mediumWords = "words/words-medium.txt";
let longWords = "words/words-long.txt";
let lenBtn = document.querySelector('.btn-length');
let currentLength = lenBtn.textContent;
checkLength(currentLength);
function checkLength(len) {
  switch (len) {
    case 'Short':
      wordLength = shortWords;
      break;
    case 'Medium':
      wordLength = mediumWords;
      break;
    case 'Long':
      wordLength = longWords;
  } 
}
lenBtn.addEventListener('click', () => {
  switch (currentLength) {
    case 'Short':
      currentLength = 'Medium';
      break;
    case 'Medium':
      currentLength = 'Long';
      break;
    case 'Long':
      currentLength = 'Short';
  }
  lenBtn.textContent = currentLength;
  checkLength(currentLength);
});

// Show each letter of a word
let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function showLetter(word) {
  for (let i = 0, len = word.length; i < len; i++) {
    if (currentMode === 'text') {
      letter.textContent = word[i];
    } else {
      letter.innerHTML = "<img src='img/" + word[i] + ".png'/>";
    }
    checkTime();
    await wait(time);
  }
  letter.textContent = "";
}
let checkTime = () => { if (time <= 0) time = 100; }

