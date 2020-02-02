// show-letter.js
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
