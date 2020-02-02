// show-letter.js
// Show each letter of a word
let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function showLetter(word) {
  for (let i = 0, len = word.length; i < len; i++) {
    letter.textContent = word[i];
    checkTime();
    await wait(time);
  }
  letter.textContent = "";
}
let checkTime = () => { if (time <= 0) time = 100; }

