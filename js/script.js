// script.js
// Control length of a word
var short_words = "text-files/easy-difficulty.txt";
var medium_words = "text-files/medium-difficulty.txt";
var long_words = "text-files/hard-difficulty.txt";
var difficulty_btn = document.querySelector('.btn-difficulty');
check_difficulty(difficulty_btn.childNodes);
function check_difficulty(difficulty) {
  if (difficulty.length === 1) {
    word_length = short_words;
  } else if (difficulty.length === 2) {
    word_length = medium_words;
  } else {
    word_length = long_words;
  }
}
difficulty_btn.addEventListener('click', () => {
  var i = document.createElement('i');
  i.className = 'fas fa-fist-raised';
  if (difficulty_btn.childNodes.length < 3) {
    difficulty_btn.appendChild(i);
  } else {
    difficulty_btn.removeChild(difficulty_btn.childNodes[0]);
    difficulty_btn.remoteChild(difficulty_btn.childNodes[1]);
  }
  check_difficulty(difficulty_btn.childNodes);
});

// Control rate of fingerspelling a word
var slower_speed = 1400;
var slow_speed = 1000;
var medium_speed = 650;
var fast_speed = 300;
var speed_btn = document.querySelector('.btn-speed');
var speed_multiple = 1;
check_speed(speed_btn.textContent);
function check_speed(speed) {
  if (speed === 'slower') {
    time = slower_speed;
  } else if (speed === 'slow') {
    time = slow_speed;
  } else if (speed === 'medium') {
    time = medium_speed;
  } else {
    time = fast_speed;
  }
}
speed_btn.addEventListener('click', change_speed);
function change_speed() => {
  switch(speed) {
    case 'slower':
      speed = 'slow';
      break;
    case 'slow':
      speed = 'medium';
      break;
    case 'medium':
      speed = 'fast';
      break;
    case 'fast':
      speed = 'slower';
      break;
    default:
      speed = 'slower';
  }
  speed_btn.textContent = speed;
  check_speed(speed_btn.textContent);
});

// Type in a word
var word_form = document.querySelector('form');
var word_input = document.querySelector('.input-word');
var letter = document.querySelector('.letter');
word_form.addEventListener('submit', function(e) {
  e.preventDefault();
  var input = word_input.value;
  fetch(word_length)
    .then(array => {
      array = array.json;
      if (input === array[random_index]) {
        letter.innerHTML = "<i class='fas fa-check'></i>";
      } else {
        letter.innerHTML = "<i class='fas fa-times'></i>";
      }
    });
  word_input.value = "";
});

// Replay a word
var replay_btn = document.querySelector('btn-replay');
replay_btn.addEventListener('click', replay_word);
function replay_word() {
  fetch(word_length)
    .then(array => {
      array = array.json();
      show_letter(array[random_index]);
  });
}

// Show each letter of a word
var wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
async function show_letter(word) {
  for (var i = 0; i < word.length; i++) {
    letter.textContent = word[i];
    check_time();
    await wait(time);
  }
  letter.textContent = "";
}
let check_time = () => {
  if (time <= 0) 
    time = 100;
}

// Show a random word
var random_index = 0;
var new_word_btn = document.querySelector('.btn-new-word');
new_word_btn.addEventListener('click', get_word);
function get_word() {
  fetch(word_length)
    .then(array => {
      array = array.json;
      random_index = Math.floor(Math.random() * array.length);
      show_letter(array[random_index]);
    });
}
