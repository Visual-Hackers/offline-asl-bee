// show-random-word.js
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
