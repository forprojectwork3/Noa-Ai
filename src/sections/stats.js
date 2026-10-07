/**
 * stats.js — Animated Impact Statistics & Workflow Comparison Matrix
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_NAME } from '../config/site.js';

export function initStats() {
  const root = document.getElementById('stats');
  if (!root) return;

  root.className = 'stats-section';

  root.innerHTML = `
    <div class="container">
      <div class="stats__header">
        <div class="stats__category">✦ Measurable Impact</div>
        <h2 class="stats__title">Accelerate Your Cognitive Velocity</h2>
        <p class="stats__subtitle">
          See how ${SITE_NAME} converts passive, exhausting video watching into active, high-yield comprehension.
        </p>
      </div>

      <!-- ── 4 Key Metrics Grid ── -->
      <div class="stats__grid">
        <div class="stat-card">
          <div class="stat-card__number-wrap">
            <span class="stat-counter" data-target="10" data-decimals="0">0</span>
            <span>x</span>
          </div>
          <div class="stat-card__label">Faster Study Velocity</div>
          <div class="stat-card__sub">Deconstruct 2-hour university lectures in under 15 minutes of focused review.</div>
        </div>

        <div class="stat-card">
          <div class="stat-card__number-wrap">
            <span class="stat-counter" data-target="85" data-decimals="0">0</span>
            <span>%</span>
          </div>
          <div class="stat-card__label">Note-Taking Time Saved</div>
          <div class="stat-card__sub">Zero time spent manually pausing and scribbling lecture slides.</div>
        </div>

        <div class="stat-card">
          <div class="stat-card__number-wrap">
            <span class="stat-counter" data-target="99.4" data-decimals="1">0</span>
            <span>%</span>
          </div>
          <div class="stat-card__label">Transcription Precision</div>
          <div class="stat-card__sub">Accurately captures complex jargon, math formulas, and fast speakers.</div>
        </div>

        <div class="stat-card">
          <div class="stat-card__number-wrap">
            <span class="stat-counter" data-target="100" data-decimals="0">0</span>
            <span>%</span>
          </div>
          <div class="stat-card__label">Free Academic Release</div>
          <div class="stat-card__sub">Zero paywalls, subscriptions, or hidden costs. Built for students by students.</div>
        </div>
      </div>

      <!-- ── Comparison Matrix ── -->
      <div class="stats__comparison">
        <!-- Old Way -->
        <div class="comparison-card comparison-card--old">
          <div class="comparison-card__head">
            <span class="comparison-card__tag">Traditional Studying</span>
          </div>
          <h3 class="comparison-card__title">Passive & Time-Consuming</h3>
          <ul class="comparison-list">
            <li class="comparison-item">
              <span class="comparison-icon">✗</span>
              <span>2+ hours spent repeatedly scrubbing back and forth through video timelines.</span>
            </li>
            <li class="comparison-item">
              <span class="comparison-icon">✗</span>
              <span>Fragmented notes missing crucial board formulas, proofs, or verbal context.</span>
            </li>
            <li class="comparison-item">
              <span class="comparison-icon">✗</span>
              <span>No instant clarification when stuck on complex math or code concepts.</span>
            </li>
            <li class="comparison-item">
              <span class="comparison-icon">✗</span>
              <span>Low retention rate due to passive watching without structured recall testing.</span>
            </li>
          </ul>
        </div>

        <!-- Noa Ai Way -->
        <div class="comparison-card comparison-card--new">
          <div class="comparison-card__head">
            <span class="comparison-card__tag">The Noa Ai Way</span>
          </div>
          <h3 class="comparison-card__title">Active & High-Yield Mastery</h3>
          <ul class="comparison-list">
            <li class="comparison-item">
              <span class="comparison-icon">✓</span>
              <span>Instant executive summary, key takeaways, and structured hierarchical notes.</span>
            </li>
            <li class="comparison-item">
              <span class="comparison-icon">✓</span>
              <span>Word-for-word transcript with clickable timestamp jumps directly to exact video moments.</span>
            </li>
            <li class="comparison-item">
              <span class="comparison-icon">✓</span>
              <span>24/7 Socratic AI companion ready to explain proofs, generate analogies, or quiz you.</span>
            </li>
            <li class="comparison-item">
              <span class="comparison-icon">✓</span>
              <span>1-click active recall flashcards, practice quizzes, and exportable PDF guides.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;

  // ── GSAP ScrollTrigger Animated Counters ──
  const counters = root.querySelectorAll('.stat-counter');
  if (counters.length > 0 && typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.create({
      trigger: root,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        counters.forEach((el) => {
          const target = parseFloat(el.getAttribute('data-target') || '0');
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          const obj = { val: 0 };

          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = obj.val.toFixed(decimals);
            }
          });
        });
      }
    });
  }
}
