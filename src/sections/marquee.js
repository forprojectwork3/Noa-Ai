/**
 * marquee.js — Dual-track infinite looping ticker showcasing the engineering stack
 * Supabase, Render, Resend, Gemini Flash, Ollama, Android/Kotlin
 */

const ROW_1_ITEMS = [
  { text: 'Supabase — Backend Database & Auth', icon: '⚡', highlight: true },
  { text: 'Render — Cloud Server Deployment', icon: '☁️', highlight: false },
  { text: 'Google Gemini Flash — Lecture Reasoning AI', icon: '🧠', highlight: true },
  { text: 'Resend — Custom SMTP Transactional Email', icon: '✉️', highlight: false },
  { text: 'Ollama — Local & Open-Source AI Fallback', icon: '🦙', highlight: true },
  { text: 'Android SDK — Native Mobile Application', icon: '📱', highlight: false }
];

const ROW_2_ITEMS = [
  { text: 'FastAPI & Python — Audio Ingestion Pipeline', icon: '🐍', highlight: false },
  { text: 'Supabase Auth — Secure Student Sessions', icon: '🔒', highlight: true },
  { text: 'Render Cloud — 24/7 API & Engine Hosting', icon: '🚀', highlight: false },
  { text: 'Resend SMTP — High-Deliverability Verification', icon: '📬', highlight: false },
  { text: 'Dual-AI Model Switcher — Gemini & Ollama', icon: '🔄', highlight: true },
  { text: 'Offline SQLite & PDF Export Engine', icon: '📄', highlight: false }
];

export function initMarquee() {
  const marqueeSection = document.getElementById('marquee');
  if (!marqueeSection) return;

  marqueeSection.className = 'marquee-section';

  const renderTrackItems = (items) => {
    // Duplicate 2x for seamless continuous loop
    const combined = [...items, ...items];
    return combined
      .map(
        (item) => `
        <div class="marquee__item ${item.highlight ? 'marquee__item--highlight' : ''}">
          <span class="marquee__icon">${item.icon}</span>
          <span>${item.text}</span>
          <span class="marquee__dot" aria-hidden="true"></span>
        </div>
      `
      )
      .join('');
  };

  marqueeSection.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem; font-size: var(--fs-xs); font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--clr-text-dim);">
      <span>✦ Engineered With World-Class Infrastructure & AI Models ✦</span>
    </div>
    <div class="marquee__container" aria-label="Engineering tech stack ticker">
      <div class="marquee__row">
        <div class="marquee__track">
          ${renderTrackItems(ROW_1_ITEMS)}
        </div>
      </div>
      <div class="marquee__row" style="margin-top: 0.75rem;">
        <div class="marquee__track marquee__track--reverse">
          ${renderTrackItems(ROW_2_ITEMS)}
        </div>
      </div>
    </div>
  `;
}
