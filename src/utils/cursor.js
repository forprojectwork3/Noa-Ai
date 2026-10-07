/**
 * cursor.js — Custom trailing cursor for pointer:fine devices
 */
export function initCursor() {
  if (typeof window === 'undefined') return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const cursorEl = document.getElementById('cursor');
  if (!cursorEl) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isVisible = false;

  const updatePosition = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      isVisible = true;
      cursorEl.style.opacity = '1';
    }
  };

  window.addEventListener('mousemove', updatePosition, { passive: true });

  // Animation loop with lerping
  let rafId;
  const loop = () => {
    // Lerp ring towards mouse with smooth damping
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    cursorEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

    rafId = requestAnimationFrame(loop);
  };
  rafId = requestAnimationFrame(loop);

  // Hover states on interactive elements
  const interactiveSelector = 'a, button, input, textarea, select, [role="button"], label, .interactive';

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      if (target.matches('input[type="text"], input[type="email"], input[type="password"], textarea')) {
        cursorEl.classList.add('is-text');
      } else {
        cursorEl.classList.add('is-hovering');
      }
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      cursorEl.classList.remove('is-hovering', 'is-text');
    }
  });

  document.addEventListener('mousedown', () => cursorEl.classList.add('is-clicking'));
  document.addEventListener('mouseup', () => cursorEl.classList.remove('is-clicking'));

  document.documentElement.addEventListener('mouseleave', () => {
    cursorEl.style.opacity = '0';
    isVisible = false;
  });

  document.documentElement.addEventListener('mouseenter', () => {
    cursorEl.style.opacity = '1';
    isVisible = true;
  });
}
