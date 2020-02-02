// input-word.js
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
