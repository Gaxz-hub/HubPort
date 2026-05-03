// script.js - Small scripts for HubPort portfolio
// Current feature: Hero typing animation for "Gabriel S. Mariano"

document.addEventListener('DOMContentLoaded', () => {
  const typingEl = document.getElementById('typingText');
  const cursorEl = document.querySelector('.cursor');
  if (!typingEl) return;

  const fullText = 'Gabriel S. Mariano';
  let index = 0;
  const minSpeed = 80; // ms
  const maxSpeed = 140; // ms

  function randSpeed() {
    return Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
  }

  function typeChar() {
    if (index < fullText.length) {
      typingEl.textContent += fullText.charAt(index);
      index += 1;
      // slightly variable typing speed to look natural
      setTimeout(typeChar, randSpeed());
    } else {
      // finished typing — keep cursor blinking
      if (cursorEl) {
        cursorEl.style.opacity = '1';
        cursorEl.style.animation = 'blink 1s steps(2,end) infinite';
      }
    }
  }

  // small delay before starting for effect
  setTimeout(typeChar, 500);
});
