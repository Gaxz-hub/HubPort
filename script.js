// script.js - Small scripts for HubPort portfolio
// Features:
// - Hero typing animation for "Gabriel S. Mariano"
// - Dark/Light theme toggle with persistence via localStorage
// - Animated skill progress bars that fill when the Skills section scrolls into view
// - Projects carousel controls: prev/next buttons, keyboard arrows, and touch swipe support
// - Smooth fade-in animations for sections and cards (accessible, respects prefers-reduced-motion)

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

  /* ---------- Animated skill progress bars on scroll ---------- */
  (function progressBarsOnScroll() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fills = Array.from(document.querySelectorAll('.progress-fill'));
    if (!fills.length) return;

    // Read target widths from inline style or data attribute, then reset width to 0
    fills.forEach((el) => {
      const inline = el.style.width && el.style.width.trim();
      const dataAttr = el.getAttribute('data-target');
      const target = dataAttr || inline || '';
      // store the target on the element for later
      el.dataset.targetWidth = target || '0%';
      // initialize to zero for animation (unless reduced motion)
      if (!prefersReduced) {
        el.style.width = '0%';
      } else {
        // if reduced motion, set immediately
        el.style.width = el.dataset.targetWidth;
      }
    });

    if (prefersReduced) return; // don't animate if user prefers reduced motion

    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // animate fills with a stagger
          fills.forEach((el, i) => {
            const target = el.dataset.targetWidth || '0%';
            // stagger each fill a bit
            setTimeout(() => {
              // add animate class for transition (CSS handles transition)
              el.classList.add('animate');
              el.style.width = target;
            }, i * 120);
          });
          obs.unobserve(skillsSection);
        }
      });
    }, { threshold: 0.18 });

    observer.observe(skillsSection);
  })();

  /* ---------- Projects carousel controls (prev/next, keyboard, swipe) ---------- */
  (function projectsCarouselControls() {
    const carousel = document.getElementById('projectsCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (!carousel) return;

    // helper to compute scroll amount (card width + gap)
    function getScrollAmount() {
      const card = carousel.querySelector('.project-card');
      const gap = 18; // should match CSS grid gap
      const cardWidth = card ? card.getBoundingClientRect().width : carousel.clientWidth;
      return Math.round(cardWidth + gap);
    }

    function scrollByAmount(amount) {
      carousel.scrollBy({ left: amount, behavior: 'smooth' });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => scrollByAmount(-getScrollAmount()));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollByAmount(getScrollAmount()));

    // keyboard navigation (left/right) when carousel is focused or in view
    document.addEventListener('keydown', (e) => {
      // don't interfere with typing in inputs or textareas
      const active = document.activeElement;
      if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollByAmount(-getScrollAmount());
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollByAmount(getScrollAmount());
      }
    });

    // Touch / swipe support for mobile
    let startX = 0;
    let isDragging = false;

    carousel.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length === 1) {
        startX = e.touches[0].clientX;
        isDragging = true;
      }
    }, { passive: true });

    carousel.addEventListener('touchmove', (e) => {
      // allow native scrolling horizontally
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      const endX = (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientX) || 0;
      const diff = startX - endX;
      const threshold = 40; // px to qualify as a swipe
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // swipe left -> next
          scrollByAmount(getScrollAmount());
        } else {
          // swipe right -> prev
          scrollByAmount(-getScrollAmount());
        }
      }
      isDragging = false;
    }, { passive: true });

    // Optional: update aria-disabled on buttons based on scroll position
    function updateButtons() {
      if (!prevBtn || !nextBtn) return;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      prevBtn.disabled = carousel.scrollLeft <= 4;
      nextBtn.disabled = carousel.scrollLeft >= maxScroll - 4;
    }

    // initial update and on scroll
    updateButtons();
    carousel.addEventListener('scroll', () => {
      // throttle using requestAnimationFrame
      window.requestAnimationFrame(updateButtons);
    });

  })();

  /* ---------- Smooth fade-in for sections and cards ---------- */
  (function fadeInOnScroll() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // elements to animate — pick semantic groups
    const selectors = [
      'section',
      '.project-card',
      '.skill-category',
      '.experience-item',
      '.education-card',
      '.testimonial-card',
      '.contact-form'
    ];

    const nodes = selectors.flatMap(sel => Array.from(document.querySelectorAll(sel)));
    // dedupe
    const elems = Array.from(new Set(nodes));
    if (!elems.length) return;

    // add the helper class if not present
    elems.forEach(el => {
      if (!el.classList.contains('fade-in')) el.classList.add('fade-in');
    });

    if (prefersReduced) {
      // immediately reveal all
      elems.forEach(el => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // can stagger children for nicer feel
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elems.forEach(el => observer.observe(el));
  })();

});
