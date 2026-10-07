/**
 * main.js — Noa Ai entry point
 * Imports styles, initialises Lenis smooth scroll synced with GSAP ScrollTrigger,
 * then bootstraps all sections.
 */

// ── Styles ──
import './styles/base.css';
import './styles/cursor.css';
import './styles/preloader.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/marquee.css';
import './styles/features.css';
import './styles/howItWorks.css';
import './styles/docs.css';
import './styles/cta.css';
import './styles/team.css';
import './styles/mentor.css';
import './styles/footer.css';

// ── Libraries ──
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Config ──
import { SITE_NAME } from './config/site.js';

// ── Utilities ──
import { initCursor } from './utils/cursor.js';

// ── Sections ──
import { initPreloader } from './sections/preloader.js';
import { initNavbar }    from './sections/navbar.js';
import { initHero }      from './sections/hero.js';
import { initMarquee }   from './sections/marquee.js';
import { initFeatures }  from './sections/features.js';
import { initHowItWorks }from './sections/howItWorks.js';
import { initDocs }      from './sections/docs.js';
import { initCta }       from './sections/cta.js';
import { initTeam }      from './sections/team.js';
import { initMentor }    from './sections/mentor.js';
import { initFooter }    from './sections/footer.js';

// ── Lenis smooth scroll ──
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
});

// Sync Lenis RAF with GSAP ticker
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// Expose lenis so sections can use it
window.__lenis = lenis;

// ── Bootstrap ──
function bootstrap() {
  // Mark HTML as JS-ready — enables CSS reveal animations.
  document.documentElement.classList.add('js-ready');

  console.log(`%c${SITE_NAME} ✦`, 'color:#A855F7;font-size:18px;font-weight:800;');

  const safeInit = (fn, name) => {
    try {
      fn();
    } catch (err) {
      console.error(`Error initializing ${name}:`, err);
    }
  };

  safeInit(initCursor, 'Cursor');
  safeInit(initPreloader, 'Preloader');
  safeInit(initNavbar, 'Navbar');
  safeInit(initHero, 'Hero');
  safeInit(initMarquee, 'Marquee');
  safeInit(initFeatures, 'Features');
  safeInit(initHowItWorks, 'HowItWorks');
  safeInit(initCta, 'Cta');
  safeInit(initDocs, 'Docs');
  safeInit(initTeam, 'Team');
  safeInit(initMentor, 'Mentor');
  safeInit(initFooter, 'Footer');

  // ScrollTrigger refresh after all sections mount
  // Double-trigger: once immediately, once after fonts/images settle
  ScrollTrigger.refresh();
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
