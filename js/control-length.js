// control-length.js
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

