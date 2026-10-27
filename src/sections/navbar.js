/**
 * navbar.js — Sticky dynamic header with mobile drawer & smooth scroll
 */
import { SITE_NAME, COLLEGE_URL, LOGO_PATH, APK_DOWNLOAD_URL, APK_FILENAME } from '../config/site.js';

export function initNavbar() {
  const root = document.getElementById('navbar-root');
  if (!root) return;

  root.innerHTML = `
    <header class="navbar" id="navbar">
      <div class="navbar__container">
        <a href="#home" class="navbar__brand" aria-label="${SITE_NAME} Home">
          <img src="${LOGO_PATH}" alt="${SITE_NAME} logo" class="navbar__logo" width="34" height="34" />
          <span class="navbar__brand-name">Noa <em>Ai</em></span>
        </a>

        <nav class="navbar__nav" id="primary-nav" aria-label="Main Navigation">
          <ul class="navbar__menu">
            <li><a href="#home" class="navbar__link is-active">Home</a></li>
            <li><a href="#how-it-works" class="navbar__link">How It Works</a></li>
            <li><a href="#docs" class="navbar__link">Documentation</a></li>
            <li><a href="#team" class="navbar__link">Team</a></li>
            <li><a href="#mentor" class="navbar__link">Mentor</a></li>
          </ul>
        </nav>

        <div class="navbar__actions">
          <a href="${APK_DOWNLOAD_URL}" download="${APK_FILENAME}" class="btn btn--primary navbar__btn-cta">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9996.4482.9996.9993 0 .5511-.4486.9997-.9996.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9996.4482.9996.9993 0 .5511-.4485.9997-.9996.9997m11.4045-6.02l1.996-3.456c.1462-.2533.0594-.5763-.1939-.7225-.2533-.1462-.5763-.0594-.7225.1939l-2.0232 3.5042C15.334 8.2435 13.7226 7.915 12 7.915c-1.7226 0-3.334.3285-4.938 1.0263L5.0388 5.437c-.1462-.2533-.4692-.3401-.7225-.1939-.2533.1462-.3401.4692-.1939.7225l1.996 3.456C2.6876 11.2335.3444 14.928.001 19.2635h23.998c-.3434-4.3355-2.6866-8.03-6.1185-9.9421"/>
            </svg>
            <span>Download APK</span>
          </a>
          <button class="navbar__hamburger" id="nav-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="navbar__mobile" id="mobile-nav" aria-hidden="true">
        <div class="navbar__mobile-backdrop" id="mobile-backdrop"></div>
        <div class="navbar__mobile-content">
          <ul class="navbar__mobile-menu">
            <li><a href="#home" class="navbar__mobile-link is-active">Home</a></li>
            <li><a href="#how-it-works" class="navbar__mobile-link">How It Works</a></li>
            <li><a href="#docs" class="navbar__mobile-link">Documentation</a></li>
            <li><a href="#download" class="navbar__mobile-link">Download APK</a></li>
            <li><a href="#team" class="navbar__mobile-link">Project Team 3</a></li>
            <li><a href="#mentor" class="navbar__mobile-link">Mentor (T. Naga Jyothi)</a></li>
          </ul>
          <div class="navbar__mobile-actions">
            <a href="${APK_DOWNLOAD_URL}" download="${APK_FILENAME}" class="btn btn--primary btn--full mobile-cta">
              <span>Download Android APK (v1.0.0)</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  `;

  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('mobile-backdrop');
  const allNavLinks = root.querySelectorAll('a[href^="#"]');

  // ── Smart Scroll Hide / Show & Glass Background ──
  let lastScrollY = window.scrollY;
  let isNavOpen = false;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Glass style on scroll
    if (currentScrollY > 20) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }

    // Don't hide navbar if mobile drawer is currently open
    if (isNavOpen) return;

    // Hide on scroll down, show on scroll up
    if (currentScrollY > 120 && currentScrollY > lastScrollY + 6) {
      navbar.classList.add('is-hidden');
    } else if (currentScrollY < lastScrollY - 6 || currentScrollY <= 120) {
      navbar.classList.remove('is-hidden');
    }

    lastScrollY = Math.max(0, currentScrollY);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ── Mobile Menu Toggle ──
  const openMenu = () => {
    isNavOpen = true;
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
    if (window.__lenis) window.__lenis.stop();
  };

  const closeMenu = () => {
    isNavOpen = false;
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
    if (window.__lenis) window.__lenis.start();
  };

  toggleBtn.addEventListener('click', () => {
    if (isNavOpen) closeMenu();
    else openMenu();
  });

  if (backdrop) backdrop.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isNavOpen) closeMenu();
  });

  // ── Smooth Anchor Scroll with Lenis ──
  allNavLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        closeMenu();

        if (window.__lenis) {
          window.__lenis.scrollTo(targetEl, { offset: -72 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ── Active Link Highlighting on Scroll ──
  const sections = document.querySelectorAll('main > section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const matchingLinks = root.querySelectorAll(`a[href="#${id}"]`);

            root.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach((l) => {
              l.classList.remove('is-active');
            });

            matchingLinks.forEach((l) => l.classList.add('is-active'));
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
}
