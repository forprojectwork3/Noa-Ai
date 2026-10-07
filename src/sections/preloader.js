/**
 * preloader.js — Elegant logo reveal with smooth progress bar
 */
import { gsap } from 'gsap';

export function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const fill = preloader.querySelector('.preloader__fill');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isRepeatVisit = sessionStorage.getItem('noa_preloader_seen') === 'true';

  const dismiss = () => {
    sessionStorage.setItem('noa_preloader_seen', 'true');
    gsap.to(preloader, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        preloader.classList.add('is-hidden');
        preloader.setAttribute('aria-hidden', 'true');
        // Trigger initial scroll triggers / reveal events
        window.dispatchEvent(new CustomEvent('noa:preloader-done'));
      }
    });
  };

  // Immediate dismiss if reduced motion or repeat visit
  if (prefersReducedMotion || isRepeatVisit) {
    if (fill) fill.style.width = '100%';
    setTimeout(dismiss, prefersReducedMotion ? 50 : 250);
    return;
  }

  // First visit animation sequence
  if (fill) {
    gsap.to(fill, {
      width: '100%',
      duration: 0.9,
      ease: 'power2.inOut',
      onComplete: () => {
        setTimeout(dismiss, 120);
      }
    });
  } else {
    setTimeout(dismiss, 600);
  }

  // Safety fallback: guaranteed dismiss after 1.8s
  setTimeout(() => {
    if (!preloader.classList.contains('is-hidden')) {
      dismiss();
    }
  }, 1800);
}
