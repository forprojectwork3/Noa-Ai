/**
 * features.js — Bento Grid Features section with 3D card tilt & interactive tabs
 */
import { SITE_NAME } from '../config/site.js';

export function initFeatures() {
  const root = document.getElementById('features');
  if (!root) return;

  root.className = 'features-section';

  root.innerHTML = `
    <div class="container">
      <div class="features__header">
        <div class="features__category">✦ Comprehensive Intelligence Engine</div>
        <h2 class="features__title">Engineered For High-Velocity Mastery</h2>
        <p class="features__subtitle">
          ${SITE_NAME} decomposes lengthy technical lectures and complex videos into clear, structured knowledge assets designed for immediate retention.
        </p>
      </div>

      <div class="features__grid">
        <!-- ── Card 1: Hierarchical Smart Notes (Col 8) ── -->
        <div class="bento-card bento-card--col-8" data-tilt>
          <div class="bento-card__head">
            <div class="bento-card__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <span class="bento-card__badge">Auto-Hierarchical</span>
          </div>
          <h3 class="bento-card__title">Structured Smart Notes & Mind Maps</h3>
          <p class="bento-card__desc">
            Automatically parses lecture flow into bulleted hierarchies, mathematical proofs, definitions, and exam-ready review sheets.
          </p>

          <div class="notes-preview">
            <div class="notes-tabs" role="tablist">
              <button class="notes-tab-btn is-active" data-tab="summary">Executive Summary</button>
              <button class="notes-tab-btn" data-tab="theorems">Theorems & Math</button>
              <button class="notes-tab-btn" data-tab="takeaways">Action Items</button>
            </div>

            <!-- Tab 1: Summary -->
            <div class="notes-pane is-active" id="pane-summary">
              <div class="notes-item">
                <span class="notes-check">✓</span>
                <div><strong>Greedy Invariant:</strong> Dijkstra maintains that once a node is settled, its shortest path from the source is immutable.</div>
              </div>
              <div class="notes-item">
                <span class="notes-check">✓</span>
                <div><strong>Heap Optimization:</strong> Using a Fibonacci or Binary Min-Heap reduces complexity from quadratic to logarithmic vertex updates.</div>
              </div>
              <div class="notes-formula-pill">Formula: T(V, E) = O((V + E) \log V)</div>
            </div>

            <!-- Tab 2: Theorems -->
            <div class="notes-pane" id="pane-theorems">
              <div class="notes-item">
                <span class="notes-check">✦</span>
                <div><strong>Theorem 4.1 (Optimal Substructure):</strong> Any subpath P_xy of a shortest path P_xz is itself a shortest path between x and y.</div>
              </div>
              <div class="notes-formula-pill">Proof Invariant: d[v] \le d[u] + w(u, v)</div>
            </div>

            <!-- Tab 3: Takeaways -->
            <div class="notes-pane" id="pane-takeaways">
              <div class="notes-item">
                <span class="notes-check">→</span>
                <div>Use Bellman-Ford or Johnson’s algorithm whenever negative edge weights may occur.</div>
              </div>
              <div class="notes-item">
                <span class="notes-check">→</span>
                <div>Review Lecture Problem Set 3 for Fibonacci heap pointer manipulation questions.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Card 2: Timestamped Full Transcript (Col 4) ── -->
        <div class="bento-card bento-card--col-4" data-tilt>
          <div class="bento-card__head">
            <div class="bento-card__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </div>
            <span class="bento-card__badge">99.4% Phonetic Sync</span>
          </div>
          <h3 class="bento-card__title">Synchronized Transcript</h3>
          <p class="bento-card__desc">
            Exact word-by-word speaker transcription with clickable timestamps. Jump to any moment instantly.
          </p>

          <div class="transcript-preview">
            <!-- Animated Equalizer Waveform -->
            <div class="waveform-box" aria-hidden="true" id="waveform-box">
              ${Array.from({ length: 24 })
                .map(
                  (_, i) =>
                    `<div class="waveform-bar" style="animation-delay: ${(i * 0.08).toFixed(2)}s; animation-duration: ${(0.8 + (i % 5) * 0.15).toFixed(2)}s;"></div>`
                )
                .join('')}
            </div>

            <!-- Clickable Transcript Lines -->
            <div class="transcript-list">
              <div class="transcript-line is-active" data-time="04:12">
                <span class="transcript-time">04:12</span>
                <span>"Let's formalize why priority queues are essential here..."</span>
              </div>
              <div class="transcript-line" data-time="09:45">
                <span class="transcript-time">09:45</span>
                <span>"Observe what happens when we decrease key in the binary heap."</span>
              </div>
              <div class="transcript-line" data-time="18:30">
                <span class="transcript-time">18:30</span>
                <span>"This brings us directly to Theorem 4.1 in the handouts."</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Card 3: Context-Aware Socratic AI Chat (Col 4) ── -->
        <div class="bento-card bento-card--col-4" data-tilt>
          <div class="bento-card__head">
            <div class="bento-card__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <span class="bento-card__badge">Live Socratic</span>
          </div>
          <h3 class="bento-card__title">Conversational AI Tutor</h3>
          <p class="bento-card__desc">
            Stuck on a tricky concept? Ask questions grounded specifically in the lecture's audio and slides.
          </p>

          <div class="chat-preview">
            <div class="chat-bubble chat-bubble--user">
              "Why does Dijkstra fail on negative cycles?"
            </div>
            <div class="chat-bubble chat-bubble--ai">
              "Because it assumes edge weights can only increase path distance. Once a vertex is settled, it never revisits it."
            </div>
            <div class="chat-typing">
              <span class="chat-typing-dot"></span>
              <span class="chat-typing-dot"></span>
              <span class="chat-typing-dot"></span>
            </div>
          </div>
        </div>

        <!-- ── Card 4: Sub-Second Vector Search (Col 4) ── -->
        <div class="bento-card bento-card--col-4" data-tilt>
          <div class="bento-card__head">
            <div class="bento-card__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <span class="bento-card__badge">0.03s Retrieval</span>
          </div>
          <h3 class="bento-card__title">Semantic Vector Search</h3>
          <p class="bento-card__desc">
            Instantly query across 40+ hours of lecture videos to find exact equations, definitions, or slide moments.
          </p>

          <div class="search-mockup">
            <div class="search-input-box">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>"Fibonacci heap amortized analysis"</span>
            </div>
            <div class="search-results">
              <div class="search-result-pill">✦ Match 1: Slide 18 • [24:15] Potential function Φ</div>
              <div class="search-result-pill">✦ Match 2: Slide 22 • [31:40] Cascading cut rule</div>
            </div>
          </div>
        </div>

        <!-- ── Card 5: 1-Click Study Kits (Col 4) ── -->
        <div class="bento-card bento-card--col-4" data-tilt>
          <div class="bento-card__head">
            <div class="bento-card__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
            <span class="bento-card__badge">Multi-Format</span>
          </div>
          <h3 class="bento-card__title">One-Click Export Kits</h3>
          <p class="bento-card__desc">
            Export formatted study collateral directly to your favorite learning environments in seconds.
          </p>

          <div class="export-grid">
            <div class="export-item" data-format="PDF Guide">
              <span>📄</span>
              <span>PDF Guide</span>
            </div>
            <div class="export-item" data-format="Notion Page">
              <span>📝</span>
              <span>Notion Page</span>
            </div>
            <div class="export-item" data-format="Markdown">
              <span>⚡</span>
              <span>Markdown</span>
            </div>
            <div class="export-item" data-format="Anki Deck">
              <span>🗂️</span>
              <span>Anki Deck</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // ── Tab Switching Logic for Card 1 ──
  const tabBtns = root.querySelectorAll('.notes-tab-btn');
  const panes = root.querySelectorAll('.notes-pane');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabBtns.forEach((b) => b.classList.remove('is-active'));
      panes.forEach((p) => p.classList.remove('is-active'));

      btn.classList.add('is-active');
      const activePane = root.querySelector(`#pane-${target}`);
      if (activePane) activePane.classList.add('is-active');
    });
  });

  // ── Transcript Line Click Logic for Card 2 ──
  const transcriptLines = root.querySelectorAll('.transcript-line');
  transcriptLines.forEach((line) => {
    line.addEventListener('click', () => {
      transcriptLines.forEach((l) => l.classList.remove('is-active'));
      line.classList.add('is-active');
    });
  });

  // ── Export Item Feedback for Card 5 ──
  const exportItems = root.querySelectorAll('.export-item');
  exportItems.forEach((item) => {
    item.addEventListener('click', () => {
      const format = item.getAttribute('data-format');
      const originalText = item.innerHTML;
      item.innerHTML = `<span>✓</span><span>Exported!</span>`;
      item.style.borderColor = 'var(--clr-success)';
      item.style.color = 'var(--clr-success)';

      setTimeout(() => {
        item.innerHTML = originalText;
        item.style.borderColor = '';
        item.style.color = '';
      }, 1500);
    });
  });

  // ── 3D Tilt Physics on Bento Cards (Desktop only) ──
  if (window.matchMedia('(pointer: fine)').matches) {
    const cards = root.querySelectorAll('.bento-card[data-tilt]');

    cards.forEach((card) => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set css variables for radial glow
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Compute 3D rotation angles (subtle max 4deg)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotX = ((y - centerY) / centerY) * -3.5;
        const rotY = ((x - centerX) / centerX) * 3.5;

        card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-2px)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }
}
