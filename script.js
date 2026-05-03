// script.js - Small scripts for HubPort portfolio
// Features:
// - Hero typing animation for "Gabriel S. Mariano"
// - Dark/Light theme toggle with persistence via localStorage

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Typing animation ---------- */
  const typingEl = document.getElementById('typingText');
  const cursorEl = document.querySelector('.cursor');
  if (typingEl) {
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
  }

  /* ---------- Theme toggle (dark / light) ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function setTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark');
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
      }
    } else {
      body.classList.remove('dark');
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore if storage is unavailable
      // console.warn('Could not persist theme preference', e);
    }
  }

  // Initialize theme from localStorage or system preference
  (function initTheme() {
    let stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) { stored = null; }
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
    } else {
      setTheme(prefersDark ? 'dark' : 'light');
    }
  })();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  /* ---------- accessibility: keyboard toggle ---------- */
  if (themeToggle) {
    themeToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        themeToggle.click();
      }
    });
  }

});
