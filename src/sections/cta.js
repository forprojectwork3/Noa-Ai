/**
 * cta.js — Interactive FAQ Accordion & Official APK Download Banner
 * Project Team 3 • Government Polytechnic Proddatur
 */
import {
  SITE_NAME,
  COLLEGE_NAME,
  COLLEGE_URL,
  TEAM_NAME,
  MENTOR_NAME,
  APK_DOWNLOAD_URL,
  APP_VERSION,
  APP_SIZE,
  APP_MIN_OS
} from '../config/site.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initCta() {
  const root = document.getElementById('download') || document.getElementById('contact');
  if (!root) return;

  root.className = 'cta-section';
  root.id = 'download';

  const FAQS = [
    {
      q: 'Is Noa Ai a website or an Android mobile application?',
      a: `Noa Ai is an Android mobile application (.apk) designed and developed as an academic project by ${TEAM_NAME} at ${COLLEGE_NAME} under the guidance of ${MENTOR_NAME}. The web page you are viewing is the official project showcase and APK download hub.`
    },
    {
      q: 'How do I install the Noa Ai APK on my Android device?',
      a: 'Tap the "Download APK" button above to download NoaAi_v1.0.0.apk (~28 MB). Once downloaded, open the file from your notifications or Files app. If Android prompts you with "Install unknown apps", tap Settings and allow installation for your browser/file manager. Then tap Install and open Noa Ai!'
    },
    {
      q: 'Can I upload my own recorded lecture files from my phone?',
      a: 'Yes! The app supports on-device audio and video files. You can select MP4, MP3, WAV, MKV, or recorded voice notes up to 2GB directly from your phone storage, or paste public/unlisted YouTube video links.'
    },
    {
      q: 'Who mentored and guided this project?',
      a: `${SITE_NAME} was developed under the academic mentorship of T. Naga Jyothi, M.Tech (Distinction, JNTUA), Lecturer (Senior Scale) in the Computer Engineering Section at Government Polytechnic, Proddatur.`
    },
    {
      q: 'What collateral can I export from the app?',
      a: 'From the Noa Ai app, you can export formatted PDF Study Guides with LaTeX math, Markdown notes, text summaries, and spaced-repetition flashcards directly to your phone storage to study offline.'
    },
    {
      q: `Is ${SITE_NAME} free to use?`,
      a: `Yes! ${SITE_NAME} is 100% free and open for students and educators. There are no paywalls, subscriptions, or credit card requirements.`
    }
  ];

  const faqHTML = FAQS.map(
    (item, index) => `
    <div class="faq__item ${index === 0 ? 'is-open' : ''}">
      <button type="button" class="faq__trigger" aria-expanded="${index === 0 ? 'true' : 'false'}" id="faq-trigger-${index}">
        <span>${item.q}</span>
        <svg class="faq__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq__answer" id="faq-answer-${index}" role="region" aria-labelledby="faq-trigger-${index}">
        <div class="faq__answer-inner">
          <p>${item.a}</p>
        </div>
      </div>
    </div>
  `
  ).join('');

  root.innerHTML = `
    <div class="container">
      <!-- ── Final Conversion / APK Download Banner ── -->
      <div class="cta-banner" style="margin-bottom: 5.5rem;">
        <div class="cta-banner__badge">
          <span>✦ Official Android Release · ${APP_VERSION}</span>
        </div>
        <h2 class="cta-banner__title">
          Download <span class="text-gradient">Noa Ai</span> for Android
        </h2>
        <p class="cta-banner__desc">
          Get the complete lecture companion on your smartphone. Engineered by <strong>${TEAM_NAME}</strong> (${COLLEGE_NAME}) under the mentorship of <strong>${MENTOR_NAME}</strong>.
        </p>

        <!-- Download Action Block -->
        <div class="cta-banner__actions" style="margin-bottom: 2rem;">
          <a href="${APK_DOWNLOAD_URL}" download="NoaAi_v1.0.0.apk" class="btn btn--primary" id="cta-download-btn" style="padding: 1rem 2.75rem; font-size: 1.05rem; box-shadow: 0 12px 36px rgba(168, 85, 247, 0.5);">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9996.4482.9996.9993 0 .5511-.4486.9997-.9996.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9996.4482.9996.9993 0 .5511-.4485.9997-.9996.9997m11.4045-6.02l1.996-3.456c.1462-.2533.0594-.5763-.1939-.7225-.2533-.1462-.5763-.0594-.7225.1939l-2.0232 3.5042C15.334 8.2435 13.7226 7.915 12 7.915c-1.7226 0-3.334.3285-4.938 1.0263L5.0388 5.437c-.1462-.2533-.4692-.3401-.7225-.1939-.2533.1462-.3401.4692-.1939.7225l1.996 3.456C2.6876 11.2335.3444 14.928.001 19.2635h23.998c-.3434-4.3355-2.6866-8.03-6.1185-9.9421"/>
            </svg>
            <span>Download Noa Ai APK (${APP_SIZE})</span>
          </a>
          <a href="#docs" class="btn btn--ghost" style="padding: 1rem 1.85rem; font-size: 0.95rem;">
            <span>Explore Documentation</span>
          </a>
        </div>

        <!-- Android Quick Install Steps -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--clr-border); border-radius: var(--radius-lg); padding: 1.5rem; max-width: 720px; margin: 0 auto 2rem; text-align: left;">
          <div style="font-size: var(--fs-xs); font-weight: 700; color: #D8B4FE; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>📋</span><span>Quick Android Installation Steps</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; font-size: 0.775rem; color: var(--clr-text-muted);">
            <div><strong style="color: #FFFFFF;">1. Tap Download</strong><br/>Get NoaAi_v1.0.0.apk (~28 MB) to your device.</div>
            <div><strong style="color: #FFFFFF;">2. Open File</strong><br/>Tap the downloaded file from Chrome or Files.</div>
            <div><strong style="color: #FFFFFF;">3. Allow Unknown Apps</strong><br/>Enable permission if Android prompts.</div>
            <div><strong style="color: #FFFFFF;">4. Start Learning</strong><br/>Launch Noa Ai and paste your lecture link!</div>
          </div>
        </div>

        <div class="cta-banner__trust">
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--clr-success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> No Registration Required</span>
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--clr-success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> ${APP_MIN_OS} Compatibility</span>
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--clr-success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Offline PDF & Flashcards</span>
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--clr-success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Free Academic Release</span>
        </div>
      </div>

      <!-- ── FAQ Section ── -->
      <div class="faq__header">
        <div class="faq__category">✦ Project Details & FAQ</div>
        <h2 class="faq__title">Frequently Asked Questions</h2>
        <p class="faq__subtitle">
          Everything you need to know about the ${SITE_NAME} Android application, academic origins at ${COLLEGE_NAME}, and offline study capabilities.
        </p>
      </div>

      <div class="faq__list">
        ${faqHTML}
      </div>
    </div>
  `;

  // ── FAQ Accordion Toggle Logic ──
  const triggers = root.querySelectorAll('.faq__trigger');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq__item');
      const isOpen = item.classList.contains('is-open');

      // Close other items
      root.querySelectorAll('.faq__item').forEach((i) => {
        i.classList.remove('is-open');
        const t = i.querySelector('.faq__trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── GSAP ScrollTrigger entrance animations ──
  const faqHeader = root.querySelector('.faq__header');
  const faqItems  = root.querySelectorAll('.faq__item');
  const ctaBanner = root.querySelector('.cta-banner');

  if (faqHeader) {
    gsap.from(faqHeader, {
      opacity: 0, y: 40,
      duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: faqHeader, start: 'top 88%', once: true }
    });
  }

  if (faqItems.length) {
    gsap.from(faqItems, {
      opacity: 0, y: 30,
      duration: 0.6, ease: 'power3.out',
      stagger: 0.09,
      scrollTrigger: { trigger: faqItems[0], start: 'top 85%', once: true }
    });
  }

  if (ctaBanner) {
    gsap.from(ctaBanner, {
      opacity: 0, y: 50, scale: 0.98,
      duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: ctaBanner, start: 'top 82%', once: true }
    });
  }
}
