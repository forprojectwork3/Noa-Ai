/**
 * howItWorks.js — 3-Step Interactive Workflow with live interactive simulations
 */
import { SITE_NAME } from '../config/site.js';

export function initHowItWorks() {
  const root = document.getElementById('how-it-works');
  if (!root) return;

  root.className = 'how-it-works-section';

  root.innerHTML = `
    <div class="container">
      <div class="how__header">
        <div class="how__category">✦ Android App Workflow</div>
        <h2 class="how__title">How the Noa Ai Mobile App Works</h2>
        <p class="how__subtitle">
          Engineered for smartphone simplicity. Install the APK on your Android device, import any lecture, and transform hours of video into clear study collateral in three steps.
        </p>
      </div>

      <div class="how__steps">
        <!-- ── Step 1: Input Ingestion ── -->
        <div class="step-card">
          <div>
            <div class="step-card__top">
              <span class="step-card__num">01</span>
              <span class="step-card__tag">Install & Ingest</span>
            </div>
            <h3 class="step-card__title">Install APK & Share Lecture</h3>
            <p class="step-card__desc">
              Install the Noa Ai Android APK on your phone. Paste any YouTube lecture link, tap "Share" directly from the YouTube app, or select recorded lecture audio from your mobile storage.
            </p>
          </div>

          <div class="mockup-input">
            <div class="mockup-dropzone" id="step1-dropzone">
              <div class="mockup-dropzone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <div class="mockup-dropzone-text" id="step1-filename">Select lecture audio / video file</div>
              <div class="mockup-dropzone-sub">MP4, MP3, WAV, MKV from phone</div>
            </div>

            <div class="mockup-link-pill">
              <span>youtube.com/watch?v=...</span>
              <button type="button" class="mockup-link-btn" id="step1-simulate-btn">Test Link</button>
            </div>
          </div>
        </div>

        <!-- ── Step 2: Synthesis Pipeline ── -->
        <div class="step-card">
          <div>
            <div class="step-card__top">
              <span class="step-card__num">02</span>
              <span class="step-card__tag">Synthesize</span>
            </div>
            <h3 class="step-card__title">Speech & Concept Processing</h3>
            <p class="step-card__desc">
              The AI engine isolates audio, generates millisecond-accurate timestamps, and synthesizes key formulas, theorems, and definitions into structured sections.
            </p>
          </div>

          <div class="mockup-pipeline">
            <div class="pipeline-node is-completed">
              <span class="pipeline-status-icon">✓</span>
              <span>1. Audio Separation & Noise Filter</span>
            </div>
            <div class="pipeline-node is-completed">
              <span class="pipeline-status-icon">✓</span>
              <span>2. Word-Level Timestamp Alignment</span>
            </div>
            <div class="pipeline-node is-processing" id="step2-node3">
              <span class="pipeline-status-icon">⚡</span>
              <span id="step2-node3-text">3. Theorem & Hierarchy Synthesis</span>
            </div>
          </div>
        </div>

        <!-- ── Step 3: Interactive Mastery ── -->
        <div class="step-card">
          <div>
            <div class="step-card__top">
              <span class="step-card__num">03</span>
              <span class="step-card__tag">Study On Mobile</span>
            </div>
            <h3 class="step-card__title">Read Notes, Quiz & Export</h3>
            <p class="step-card__desc">
              Read formatted notes offline on your device, practice auto-generated Anki-style flashcards, ask the Socratic AI companion questions, and export to PDF.
            </p>
          </div>

          <div class="mockup-mastery">
            <div class="mastery-chips" role="group" aria-label="Sample questions">
              <button type="button" class="mastery-chip is-active" data-query="proof">Explain Dijkstra</button>
              <button type="button" class="mastery-chip" data-query="quiz">Quick Quiz</button>
              <button type="button" class="mastery-chip" data-query="takeaway">Slide 14 Summary</button>
            </div>

            <div class="mastery-bubble" id="mastery-bubble-content">
              <strong>Dijkstra Invariant:</strong> The algorithm maintains that shortest paths to all visited vertices are guaranteed minimal before advancing.
            </div>

            <div class="mastery-export-row">
              <span style="font-size:0.75rem; color:var(--clr-text-muted);">Ready to study offline?</span>
              <button type="button" class="mastery-pdf-btn" id="mastery-pdf-btn">
                <span>📄 PDF Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // ── Step 1 Interactivity: File Drop / Test Link Simulation ──
  const dropzone = root.querySelector('#step1-dropzone');
  const filename = root.querySelector('#step1-filename');
  const simulateBtn = root.querySelector('#step1-simulate-btn');

  const triggerUploadAnim = (name) => {
    if (!filename) return;
    filename.innerHTML = `<span style="color:var(--clr-primary);">Uploading ${name}...</span>`;
    setTimeout(() => {
      filename.innerHTML = `<span style="color:var(--clr-success);">✓ ${name} (Parsed)</span>`;
      if (dropzone) dropzone.classList.add('is-active');
    }, 800);
  };

  if (dropzone) {
    dropzone.addEventListener('click', () => {
      triggerUploadAnim('CS50_Lecture_02.mp4');
    });
  }

  if (simulateBtn) {
    simulateBtn.addEventListener('click', () => {
      triggerUploadAnim('MIT-Algorithms-Lecture.mp4');
    });
  }

  // ── Step 3 Interactivity: Mastery Chips Switcher ──
  const masteryChips = root.querySelectorAll('.mastery-chip');
  const bubbleContent = root.querySelector('#mastery-bubble-content');
  const pdfBtn = root.querySelector('#mastery-pdf-btn');

  const responses = {
    proof: `<strong>Dijkstra Invariant:</strong> The algorithm maintains that shortest paths to all visited vertices are guaranteed minimal before advancing.`,
    quiz: `<strong>Q:</strong> What is the time complexity when using a binary heap?<br><strong>A:</strong> O((V + E) log V). Excellent for sparse graphs!`,
    takeaway: `<strong>Slide 14 Key Concept:</strong> The Relaxation step safely decreases the distance estimate only when a shorter route is verified.`
  };

  masteryChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      masteryChips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');

      const query = chip.getAttribute('data-query');
      if (bubbleContent && responses[query]) {
        bubbleContent.innerHTML = responses[query];
      }
    });
  });

  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
      const orig = pdfBtn.innerHTML;
      pdfBtn.innerHTML = `<span>✓ Generated!</span>`;
      pdfBtn.style.background = 'var(--clr-success)';
      pdfBtn.style.color = '#000000';

      setTimeout(() => {
        pdfBtn.innerHTML = orig;
        pdfBtn.style.background = '';
        pdfBtn.style.color = '';
      }, 1500);
    });
  }
}
