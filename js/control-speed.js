// control-speed.js
// Control rate of fingerspelling a word
var slow_speed = 1000;
var medium_speed = 650;
var fast_speed = 300;
var speed_btn = document.querySelector('.btn-speed');
var speed_multiple = 1;
check_speed(speed_btn.textContent);
function check_speed(speed) {
  if (speed === '1x') {
    time = slow_speed;
  } else if (speed === '2x') {
    time = medium_speed;
  } else {
    time = fast_speed;
  }
}
speed_btn.addEventListener('click', () => {
  if (speed_multiple < 3) {
    speed_btn.textContent = ++speed_multiple + 'x';
  } else {
    speed_multiple = 1;
    speed_btn.textContent = speed_multiple + 'x';
  }
  check_speed(speed_btn.textContent);
});
