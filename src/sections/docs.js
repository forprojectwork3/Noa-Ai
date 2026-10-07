/**
 * docs.js — Project Documentation & Engineering Case Study Section
 * Renders System Architecture, Tools & Approaches, Challenges & Solutions,
 * and Downloadable Academic Documentation card.
 */
import {
  SITE_NAME,
  TEAM_NAME,
  COLLEGE_NAME,
  MENTOR_NAME,
  docUrl,
  DOC_FILE_TYPE,
  DOC_SIZE,
  DOC_VERSION
} from '../config/site.js';

import {
  architectureFlow,
  toolsAndApproaches,
  challengesAndSolutions,
  reportDetails
} from '../data/docs.js';

export function initDocs() {
  const root = document.getElementById('docs') || document.getElementById('tech');
  if (!root) return;

  root.id = 'docs';
  root.className = 'docs-section';

  root.innerHTML = `
    <div class="container">
      <div class="docs__header">
        <div class="docs__category">✦ Engineering Case Study &amp; Architecture</div>
        <h2 class="docs__title">Project Documentation</h2>
        <p class="docs__subtitle">
          How we built Noa Ai: the tools we explored, the problems we hit, and how we solved them.
        </p>
      </div>

      <!-- Glass Container with Dashed Violet Border -->
      <div class="docs__container-card">

        <!-- Pill Tabs Navigation -->
        <div class="docs__tabs" role="tablist" aria-label="Project Documentation Categories">
          <button type="button" class="docs__tab-btn is-active" id="tab-arch" data-tab="arch" role="tab" aria-selected="true" aria-controls="pane-arch" tabindex="0">
            <span>🏗️</span><span>System Architecture</span>
          </button>
          <button type="button" class="docs__tab-btn" id="tab-tools" data-tab="tools" role="tab" aria-selected="false" aria-controls="pane-tools" tabindex="-1">
            <span>⚡</span><span>Tools &amp; Approaches</span>
          </button>
          <button type="button" class="docs__tab-btn" id="tab-challenges" data-tab="challenges" role="tab" aria-selected="false" aria-controls="pane-challenges" tabindex="-1">
            <span>🛠️</span><span>Challenges &amp; Solutions</span>
          </button>
          <button type="button" class="docs__tab-btn" id="tab-report" data-tab="report" role="tab" aria-selected="false" aria-controls="pane-report" tabindex="-1">
            <span>📄</span><span>Project Report</span>
          </button>
        </div>

        <!-- ── Pane 1: System Architecture ── -->
        <div class="docs__pane is-active" id="pane-arch" role="tabpanel" aria-labelledby="tab-arch" tabindex="0">
          <div class="arch-diagram">
            <!-- Animated SVG / CSS Flow -->
            <div class="arch-flow-main">
              <!-- Node 1: User -->
              <div class="arch-node">
                <div class="arch-node__header">
                  <div class="arch-node__icon-wrap" style="color: #A855F7;">👤</div>
                  <span class="arch-node__step">STEP 01</span>
                </div>
                <div class="arch-node__title">User / Student</div>
                <div class="arch-node__subtitle">Lecture Ingestion</div>
                <div class="arch-node__desc">
                  Student pastes any YouTube lecture URL or inputs an offline audio lecture stream.
                </div>
              </div>

              <!-- Node 2: Android App -->
              <div class="arch-node">
                <div class="arch-node__header">
                  <div class="arch-node__icon-wrap" style="color: #C084FC;">📱</div>
                  <span class="arch-node__step">STEP 02</span>
                </div>
                <div class="arch-node__title">Android App</div>
                <div class="arch-node__subtitle">Kotlin &amp; Media3</div>
                <div class="arch-node__desc">
                  Native 60fps client with ExoPlayer playback, Room SQLite offline cache, and UI state.
                </div>
              </div>

              <!-- Node 3: AI Engine -->
              <div class="arch-node">
                <div class="arch-node__header">
                  <div class="arch-node__icon-wrap" style="color: #FFD21F;">🧠</div>
                  <span class="arch-node__step">STEP 03</span>
                </div>
                <div class="arch-node__title">AI Engine</div>
                <div class="arch-node__subtitle">Gemini Flash &amp; Ollama</div>
                <div class="arch-node__desc">
                  Hybrid intelligence: Google Gemini Flash for cloud speed + Ollama Llama 3 for local offline inference.
                </div>
              </div>

              <!-- Node 4: Outputs -->
              <div class="arch-node">
                <div class="arch-node__header">
                  <div class="arch-node__icon-wrap" style="color: #4ADE80;">📚</div>
                  <span class="arch-node__step">STEP 04</span>
                </div>
                <div class="arch-node__title">Outputs &amp; Study Tools</div>
                <div class="arch-node__subtitle">Notes, Transcripts &amp; Cards</div>
                <div class="arch-node__desc">
                  Instant smart notes, timestamped transcripts, auto flashcards, and printable PDF documents.
                </div>
              </div>
            </div>

            <!-- SVG Data Stream Connector -->
            <div class="arch-connector" aria-hidden="true" style="width: 100%; height: 28px;">
              <svg width="100%" height="28" viewBox="0 0 800 28" fill="none" preserveAspectRatio="none">
                <path d="M 0 14 L 800 14" stroke="rgba(168, 85, 247, 0.4)" stroke-width="2" class="arch-stream-line" />
                <circle cx="200" cy="14" r="4" fill="#A855F7" />
                <circle cx="400" cy="14" r="4" fill="#FFD21F" />
                <circle cx="600" cy="14" r="4" fill="#4ADE80" />
              </svg>
            </div>

            <!-- Cloud & Auth Subsystem -->
            <div class="arch-cloud-band">
              <div class="arch-cloud-band__info">
                <div class="arch-cloud-band__icon">⚡</div>
                <div>
                  <div class="arch-cloud-band__title">Supabase Identity, Database &amp; Cloud Microservices</div>
                  <div class="arch-cloud-band__desc">
                    Row Level Security (RLS) PostgreSQL for student privacy, Render Python FastAPI for audio extraction, and Resend for transactional email.
                  </div>
                </div>
              </div>
              <div class="arch-cloud-badges">
                <span class="arch-cloud-pill">🔒 Supabase Auth (JWT)</span>
                <span class="arch-cloud-pill">🗄️ PostgreSQL RLS</span>
                <span class="arch-cloud-pill">☁️ Render Backend</span>
                <span class="arch-cloud-pill">✉️ Resend SMTP</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Pane 2: Tools & Approaches ── -->
        <div class="docs__pane" id="pane-tools" role="tabpanel" aria-labelledby="tab-tools" tabindex="0">
          <div class="tools-grid">
            ${toolsAndApproaches.map((tool) => `
              <div class="tool-card ${tool.status === 'dropped' ? 'tool-card--dropped' : 'tool-card--chosen'}">
                <div class="tool-card__header">
                  <div class="tool-card__title-wrap">
                    <span class="tool-card__icon">${tool.icon}</span>
                    <div>
                      <h3 class="tool-card__name">${tool.name}</h3>
                      <div class="tool-card__category">${tool.category}</div>
                    </div>
                  </div>
                  <span class="tool-badge ${tool.status === 'dropped' ? 'tool-badge--dropped' : 'tool-badge--chosen'}">
                    ${tool.statusLabel}
                  </span>
                </div>
                <p class="tool-card__desc">${tool.description}</p>
                <div class="tool-card__reason">${tool.reason}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- ── Pane 3: Challenges & Solutions ── -->
        <div class="docs__pane" id="pane-challenges" role="tabpanel" aria-labelledby="tab-challenges" tabindex="0">
          <div class="challenges-list">
            ${challengesAndSolutions.map((item) => `
              <div class="challenge-row" id="challenge-${item.id}">
                <div class="challenge-row__head">
                  <div class="challenge-row__title-wrap">
                    <span class="challenge-row__num">0${item.challengeNum}</span>
                    <h3 class="challenge-row__title">${item.title}</h3>
                  </div>
                  <span class="challenge-row__category">${item.category}</span>
                </div>
                <div class="challenge-two-col">
                  <div class="challenge-box challenge-box--problem">
                    <strong>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      Problem Encountered
                    </strong>
                    ${item.problem}
                  </div>
                  <div class="challenge-box challenge-box--solution">
                    <strong>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Engineered Solution
                    </strong>
                    ${item.solution}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- ── Pane 4: Project Report & Download ── -->
        <div class="docs__pane" id="pane-report" role="tabpanel" aria-labelledby="tab-report" tabindex="0">
          <div class="report-card">
            <div class="report-card__icon">📚</div>
            <div class="report-card__badge">${reportDetails.cardBadge}</div>
            <h3 class="report-card__title">${reportDetails.title}</h3>
            <p class="report-card__subtitle">
              This technical document serves as the academic record and engineering thesis for <strong>${TEAM_NAME}</strong> at <strong>${COLLEGE_NAME}</strong>, under the guidance of <strong>${MENTOR_NAME}</strong>.
            </p>

            <div class="report-card__actions">
              <!-- Primary Gradient Download Documentation Button -->
              <a href="${docUrl}" download="Noa-Ai-Documentation.pdf" class="btn btn--primary" id="doc-download-btn" style="padding: 0.95rem 2.2rem; font-size: 0.95rem; box-shadow: 0 8px 26px rgba(168, 85, 247, 0.45);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span id="doc-btn-text">Download Documentation (PDF)</span>
              </a>

              <!-- Meet Project Team 3 Button -->
              <a href="#team" class="btn btn--ghost" id="doc-meet-team-btn" style="padding: 0.95rem 1.85rem; font-size: 0.95rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Meet Project Team 3</span>
              </a>
            </div>

            <!-- Metadata Line -->
            <div class="report-meta-line" id="doc-meta-line">
              <span>📄 Type: ${DOC_FILE_TYPE}</span>
              <span>•</span>
              <span>📦 Approx. Size: ${DOC_SIZE}</span>
              <span>•</span>
              <span>🔖 Release: ${DOC_VERSION}</span>
              <span id="doc-status-indicator" style="display:none; color: #FBBF24;">• (Coming Soon)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  // ── Keyboard-Friendly Animated Tab Switching ──
  const tabButtons = Array.from(root.querySelectorAll('.docs__tab-btn'));
  const panes = Array.from(root.querySelectorAll('.docs__pane'));

  function activateTab(targetBtn) {
    if (!targetBtn) return;
    const tabId = targetBtn.getAttribute('data-tab');

    tabButtons.forEach((btn) => {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-selected', 'false');
      btn.setAttribute('tabindex', '-1');
    });

    panes.forEach((pane) => {
      pane.classList.remove('is-active');
    });

    targetBtn.classList.add('is-active');
    targetBtn.setAttribute('aria-selected', 'true');
    targetBtn.setAttribute('tabindex', '0');
    targetBtn.focus();

    const activePane = root.querySelector(`#pane-${tabId}`);
    if (activePane) {
      activePane.classList.add('is-active');
    }
  }

  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => activateTab(btn));

    // Keyboard navigation (ArrowLeft, ArrowRight, Home, End)
    btn.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowRight') {
        targetIndex = (index + 1) % tabButtons.length;
      } else if (e.key === 'ArrowLeft') {
        targetIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      } else if (e.key === 'Home') {
        targetIndex = 0;
      } else if (e.key === 'End') {
        targetIndex = tabButtons.length - 1;
      }

      if (targetIndex !== null) {
        e.preventDefault();
        activateTab(tabButtons[targetIndex]);
      }
    });
  });

  // ── Meet Team 3 Smooth Scroll with Lenis ──
  const meetTeamBtn = root.querySelector('#doc-meet-team-btn');
  if (meetTeamBtn) {
    meetTeamBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const teamSection = document.getElementById('team');
      if (teamSection) {
        if (window.__lenis) {
          window.__lenis.scrollTo(teamSection, { offset: -70 });
        } else {
          teamSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // ── Step 4: Check if Documentation PDF Exists via HEAD Request ──
  const docDownloadBtn = root.querySelector('#doc-download-btn');
  const docBtnText = root.querySelector('#doc-btn-text');
  const docStatusIndicator = root.querySelector('#doc-status-indicator');

  const checkDocAvailability = async () => {
    if (!docDownloadBtn) return;
    try {
      const response = await fetch(docUrl, { method: 'HEAD' });
      if (!response.ok) {
        setDocComingSoon();
      }
    } catch {
      setDocComingSoon();
    }
  };

  function setDocComingSoon() {
    if (!docDownloadBtn) return;
    docDownloadBtn.removeAttribute('href');
    docDownloadBtn.removeAttribute('download');
    docDownloadBtn.classList.add('btn--disabled');
    docDownloadBtn.setAttribute('aria-disabled', 'true');
    docDownloadBtn.setAttribute('title', 'Documentation PDF upload is coming soon');
    if (docBtnText) {
      docBtnText.textContent = 'Documentation Coming Soon (PDF)';
    }
    if (docStatusIndicator) {
      docStatusIndicator.style.display = 'inline';
    }
  }

  // Execute HEAD verification
  checkDocAvailability();
}
