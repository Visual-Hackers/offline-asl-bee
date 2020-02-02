// replay-word.js
// Replay a word
var replay_btn = document.querySelector('btn-replay');
replay_btn.addEventListener('click', replay_word);
function replay_word() {
  fetch(word_length)
    .then(array => {
      array = array.json();
      show_letter(array[random_index]));
    }
}
