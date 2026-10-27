/**
 * hero.js — Hero section with Three.js 3D orb, APK download, and quick navigation
 * Developed by Project Team 3, Government Polytechnic Proddatur
 * Mentored by T. Naga Jyothi
 */
import { gsap } from 'gsap';
import {
  SITE_NAME,
  COLLEGE_NAME,
  COLLEGE_URL,
  TEAM_NAME,
  MENTOR_NAME,
  APK_DOWNLOAD_URL,
  APK_FILENAME,
  APP_VERSION,
  APP_SIZE,
  APP_MIN_OS,
  APK_SHA256
} from '../config/site.js';
import { initHeroScene } from '../scenes/heroScene.js';

export function initHero() {
  const heroSection = document.getElementById('home') || document.getElementById('hero');
  if (!heroSection) return;
  heroSection.id = 'home';
  heroSection.className = 'hero-section';

  heroSection.innerHTML = `
    <!-- Three.js 3D Canvas -->
    <canvas id="hero-canvas" aria-hidden="true"></canvas>

    <!-- Radial Glow Background -->
    <div class="hero__glow" aria-hidden="true"></div>

    <!-- Floating Insight Card Left -->
    <div class="hero__floating-card hero__floating-card--left" aria-hidden="true">
      <div class="hero__card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9996.4482.9996.9993 0 .5511-.4486.9997-.9996.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9996.4482.9996.9993 0 .5511-.4485.9997-.9996.9997m11.4045-6.02l1.996-3.456c.1462-.2533.0594-.5763-.1939-.7225-.2533-.1462-.5763-.0594-.7225.1939l-2.0232 3.5042C15.334 8.2435 13.7226 7.915 12 7.915c-1.7226 0-3.334.3285-4.938 1.0263L5.0388 5.437c-.1462-.2533-.4692-.3401-.7225-.1939-.2533.1462-.3401.4692-.1939.7225l1.996 3.456C2.6876 11.2335.3444 14.928.001 19.2635h23.998c-.3434-4.3355-2.6866-8.03-6.1185-9.9421"/>
        </svg>
      </div>
      <div class="hero__card-body">
        <div class="hero__card-title">Android Application</div>
        <div class="hero__card-sub">${TEAM_NAME} • GPT Proddatur</div>
      </div>
    </div>

    <!-- Floating Insight Card Right -->
    <div class="hero__floating-card hero__floating-card--right" aria-hidden="true">
      <div class="hero__card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      </div>
      <div class="hero__card-body">
        <div class="hero__card-title">Faculty Mentorship</div>
        <div class="hero__card-sub"><span class="hero__card-dot"></span> ${MENTOR_NAME}</div>
      </div>
    </div>

    <div class="container hero__content">
      <!-- Slogan / Agenda Badge -->
      <div class="hero__agenda hero-anim" style="display:inline-flex; align-items:center; gap:0.5rem; font-size: 0.8125rem; font-weight:700; color:#FFD21F; letter-spacing:0.12em; text-transform:uppercase; margin-bottom: 0.75rem; padding: 0.35rem 0.95rem; background: rgba(255, 210, 31, 0.08); border: 1px solid rgba(255, 210, 31, 0.28); border-radius: var(--radius-full);">
        <span>✦</span>
        <span>Noa Ai — New Way Of Learning</span>
        <span>✦</span>
      </div>

      <!-- Minimal College & Team Attribution -->
      <div class="hero__badge hero-anim" style="margin-bottom: 1.35rem;">
        <span class="hero__badge-sparkle">🎓</span>
        <span>Academic Project · <strong>${TEAM_NAME}</strong> (${COLLEGE_NAME})</span>
      </div>

      <!-- Main Headline (Balanced & Properly Aligned) -->
      <h1 class="hero__title hero-anim" style="max-width: 840px; margin-inline: auto; margin-bottom: 1.25rem;">
        Turn Any Lecture Into <span class="text-gradient">Structured Knowledge</span>
      </h1>

      <!-- Subtitle -->
      <p class="hero__subtitle hero-anim" style="max-width: 640px; margin-inline: auto; margin-bottom: 1.75rem;">
        An Android application engineered for diploma and engineering students. Paste any YouTube lecture or audio recording to generate concise notes, verified transcripts, flashcards, and an AI study companion right on your phone.
      </p>

      <!-- Primary Action: APK Download & Preview (Clean 2-button layout) -->
      <div class="hero-anim" style="display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
        <a href="${APK_DOWNLOAD_URL}" download="${APK_FILENAME}" class="btn btn--primary" id="hero-download-apk-btn" style="padding: 0.95rem 2.25rem; font-size: 1rem; box-shadow: 0 10px 30px rgba(168, 85, 247, 0.45);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9996.4482.9996.9993 0 .5511-.4486.9997-.9996.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9996.4482.9996.9993 0 .5511-.4485.9997-.9996.9997m11.4045-6.02l1.996-3.456c.1462-.2533.0594-.5763-.1939-.7225-.2533-.1462-.5763-.0594-.7225.1939l-2.0232 3.5042C15.334 8.2435 13.7226 7.915 12 7.915c-1.7226 0-3.334.3285-4.938 1.0263L5.0388 5.437c-.1462-.2533-.4692-.3401-.7225-.1939-.2533.1462-.3401.4692-.1939.7225l1.996 3.456C2.6876 11.2335.3444 14.928.001 19.2635h23.998c-.3434-4.3355-2.6866-8.03-6.1185-9.9421"/>
          </svg>
          <span>Download Android APK (${APP_VERSION})</span>
        </a>
        <a href="#how-it-works" class="btn btn--ghost" style="padding: 0.95rem 1.85rem; font-size: 0.95rem;">
          <span>See How It Works</span>
        </a>
      </div>

      <!-- App Highlights Micro-Badges -->
      <div class="hero-anim" style="display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap; font-size: var(--fs-xs); color: var(--clr-text-muted); margin-bottom: 0.75rem;">
        <span>📦 Size: ~${APP_SIZE}</span>
        <span>📱 ${APP_MIN_OS}</span>
        <span>⚡ Gemini &amp; Ollama Powered</span>
        <span>🎓 Guided by ${MENTOR_NAME}</span>
      </div>

      <!-- How to Install + SHA-256 -->
      <div class="hero-anim" style="max-width: 640px; margin-inline: auto; margin-bottom: 1.25rem;">
        <details style="background: rgba(255,255,255,0.03); border: 1px solid var(--clr-border, rgba(255,255,255,0.08)); border-radius: 12px; padding: 0.75rem 1rem; text-align: left; cursor: pointer;">
          <summary style="font-size: 0.775rem; font-weight: 600; color: #D8B4FE; display: flex; align-items: center; gap: 0.4rem;">
            <span>📋</span> How to Install on Android
          </summary>
          <ol style="font-size: 0.75rem; color: var(--clr-text-muted, #94a3b8); margin: 0.75rem 0 0.5rem 1.25rem; padding: 0; line-height: 1.7;">
            <li>Tap <strong style="color:#fff;">Download Android APK</strong> above.</li>
            <li>If Chrome warns <em>"Harmful file"</em>, tap <strong style="color:#fff;">Download anyway</strong>.</li>
            <li>Open the file from notifications or your <strong style="color:#fff;">Downloads</strong> folder.</li>
            <li>When prompted, allow <strong style="color:#fff;">Install unknown apps</strong> for Chrome/your browser.</li>
            <li>Tap <strong style="color:#fff;">Install</strong> and launch Noa Ai!</li>
          </ol>
          <div style="font-size: 0.675rem; color: var(--clr-text-muted, #64748b); margin-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.5rem;">
            <strong style="color:#94a3b8;">SHA-256:</strong>
            <code style="font-size: 0.625rem; word-break: break-all; color: #86efac;">${APK_SHA256}</code>
          </div>
        </details>
      </div>

      <!-- Feature Highlight Pills -->
      <div class="hero__pills hero-anim">
        <span class="hero__pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          Structured Notes
        </span>
        <span class="hero__pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Timestamped Transcripts
        </span>
        <span class="hero__pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Socratic AI Companion
        </span>
        <span class="hero__pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Exportable PDF &amp; Flashcards
        </span>
      </div>
    </div>

    <!-- Scroll Down Prompt -->
    <a href="#features" class="hero__scroll-indicator" id="hero-scroll-btn" aria-label="Scroll down to features">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
      <span>Scroll to explore</span>
    </a>
  `;

  // ── Three.js Scene Setup ──
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    initHeroScene(canvas);
  }


  // ── Smooth Scroll for Scroll Down Indicator ──
  const scrollIndicator = document.getElementById('hero-scroll-btn');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', (e) => {
      e.preventDefault();
      const nextSection = document.getElementById('marquee') || document.getElementById('features');
      if (nextSection) {
        if (window.__lenis) {
          window.__lenis.scrollTo(nextSection, { offset: -70 });
        } else {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // ── GSAP Entrance Sequence ──
  const runEntranceAnim = () => {
    const animEls = heroSection.querySelectorAll('.hero-anim');
    if (animEls.length === 0) return;

    gsap.fromTo(
      animEls,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1
      }
    );
  };

  // Wait for preloader dismissal event, or run immediately if preloader was already dismissed
  const preloader = document.getElementById('preloader');
  if (!preloader || preloader.classList.contains('is-hidden')) {
    runEntranceAnim();
  } else {
    window.addEventListener('noa:preloader-done', runEntranceAnim, { once: true });
    // Safety fallback
    setTimeout(runEntranceAnim, 1600);
  }
}
