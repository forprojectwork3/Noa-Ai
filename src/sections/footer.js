/**
 * footer.js — Clean dark footer with site map, college attribution, and back-to-top
 */
import {
  SITE_NAME,
  LOGO_PATH,
  COLLEGE_NAME,
  COLLEGE_URL,
  TEAM_NAME,
  MENTOR_NAME,
  APK_DOWNLOAD_URL,
  APK_FILENAME,
  APP_VERSION
} from '../config/site.js';

export function initFooter() {
  const root = document.getElementById('footer-root');
  if (!root) return;

  const currentYear = new Date().getFullYear();

  root.innerHTML = `
    <footer class="footer" id="footer">
      <div class="container footer__container">
        <div class="footer__top">
          <!-- Brand Column -->
          <div class="footer__brand-col">
            <a href="#home" class="footer__brand" aria-label="${SITE_NAME} Home">
              <img src="${LOGO_PATH}" alt="${SITE_NAME} logo" class="footer__logo" width="38" height="38" />
              <span class="footer__brand-name">Noa <em>Ai</em></span>
            </a>
            <p class="footer__tagline">
              Noa Ai is an Android mobile app turning lectures and video recordings into structured study notes, timestamped transcripts, and AI learning guidance.
            </p>
            <div class="footer__badge" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span class="footer__badge-dot"></span>
              <span>${TEAM_NAME} • Android Application</span>
            </div>
            <div>
              <a href="${COLLEGE_URL}" target="_blank" rel="noopener noreferrer" style="font-size: var(--fs-xs); color: #C084FC; text-decoration: underline; text-underline-offset: 3px;">
                🏛️ ${COLLEGE_NAME} Official Website
              </a>
            </div>
          </div>

          <!-- Links Grid -->
          <div class="footer__links-grid">
            <div class="footer__col">
              <h4 class="footer__heading">App & Tour</h4>
              <ul class="footer__links">
                <li><a href="${APK_DOWNLOAD_URL}" download="${APK_FILENAME}" class="footer__link" style="color: #4ADE80; font-weight: 600;">📥 Download APK (${APP_VERSION})</a></li>
                <li><a href="#features" class="footer__link">Smart Notes</a></li>
                <li><a href="#how-it-works" class="footer__link">How It Works</a></li>
                <li><a href="#docs" class="footer__link">Documentation</a></li>
              </ul>
            </div>

            <div class="footer__col">
              <h4 class="footer__heading">College & Team</h4>
              <ul class="footer__links">
                <li><a href="${COLLEGE_URL}" target="_blank" rel="noopener noreferrer" class="footer__link">Govt Polytechnic Proddatur</a></li>
                <li><a href="#team" class="footer__link">${TEAM_NAME}</a></li>
                <li><a href="#mentor" class="footer__link">Mentor (${MENTOR_NAME})</a></li>
                <li><a href="https://govtpolyproddatur.ac.in//media/govtpolyproddatur_ac_in/NAGA%20JYOTHI_BIO%20DATA.pdf" target="_blank" rel="noopener noreferrer" class="footer__link">Mentor Bio-Data (PDF)</a></li>
              </ul>
            </div>

            <div class="footer__col">
              <h4 class="footer__heading">Quick Navigation</h4>
              <ul class="footer__links">
                <li><a href="#home" class="footer__link">Back to Top</a></li>
                <li><a href="#download" class="footer__link">Installation Guide</a></li>
                <li><a href="#download" class="footer__link">Project FAQs</a></li>
                <li><a href="/verify" class="footer__link">Student Auth Portal</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <div class="footer__credits">
            <p>© ${currentYear} ${SITE_NAME}. Academic Project by <strong>${TEAM_NAME}</strong>, Computer Engineering Section.</p>
            <p class="footer__mentorship">
              Affiliated with <strong><a href="${COLLEGE_URL}" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:underline;">${COLLEGE_NAME}</a></strong> · Guided by <strong>${MENTOR_NAME}</strong>
            </p>
          </div>

          <button class="footer__back-to-top" id="back-to-top" aria-label="Scroll back to top">
            <span>Back to Top</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  `;

  // Back to top click handler
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Smooth scroll for internal links in footer
  root.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        if (window.__lenis) {
          window.__lenis.scrollTo(targetEl, { offset: -72 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}
