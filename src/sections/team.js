/**
 * team.js — 3D Coverflow Team Showcase Section using Swiper
 */
import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { TEAM } from '../data/team.js';
import { SITE_NAME, TEAM_NAME, COLLEGE_NAME, COLLEGE_URL, MENTOR_NAME } from '../config/site.js';

export function initTeam() {
  const root = document.getElementById('team');
  if (!root) return;

  root.className = 'team-section';

  const getInitials = (name, id) => {
    if (!name) return `T${id}`;
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const slidesHTML = TEAM.map((member) => {
    const initials = getInitials(member.name, member.id);
    const avatarHTML = member.photo
      ? `<img src="${member.photo}" alt="${member.name}" class="team-avatar-img" />`
      : `<div class="team-avatar-fallback">${initials}</div>`;

    return `
      <div class="swiper-slide">
        <div class="team-card">
          <div class="team-avatar-wrap">
            ${avatarHTML}
          </div>
          <div>
            ${member.domain ? `<div class="team-domain">${member.domain}</div>` : ''}
            <h3 class="team-name">${member.name}</h3>
            <span class="team-role">${member.role}</span>
          </div>
          <div class="team-socials">
            ${
              member.linkedin
                ? `<a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="team-social-link" aria-label="${member.name} on LinkedIn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>`
                : ''
            }
            ${
              member.github
                ? `<a href="${member.github}" target="_blank" rel="noopener noreferrer" class="team-social-link" aria-label="${member.name} on GitHub">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>`
                : ''
            }
          </div>
        </div>
      </div>
    `;
  }).join('');

  root.innerHTML = `
    <div class="container">
      <div class="team__header">
        <div class="team__category">✦ Student Engineering Cohort</div>
        <h2 class="team__title">${TEAM_NAME}</h2>
        <p class="team__subtitle">
          Computer Engineering Section · 
          <a href="${COLLEGE_URL}" target="_blank" rel="noopener noreferrer" style="color: var(--clr-primary); text-decoration: underline; text-underline-offset: 4px;">${COLLEGE_NAME}</a>.
          Guided by faculty mentor <strong>${MENTOR_NAME}</strong>.
        </p>
      </div>

      <div class="team-swiper-wrap">
        <div class="swiper team-swiper">
          <div class="swiper-wrapper">
            ${slidesHTML}
          </div>
        </div>

        <!-- Custom Controls -->
        <div class="team-controls">
          <button type="button" class="team-nav-btn team-btn-prev" aria-label="Previous team member">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div class="team-pagination"></div>
          <button type="button" class="team-nav-btn team-btn-next" aria-label="Next team member">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  // Initialize Swiper Coverflow
  try {
    new Swiper('.team-swiper', {
      modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 0,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 140,
        modifier: 1,
        slideShadows: false
      },
      autoplay: {
        delay: 3800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.team-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.team-btn-next',
        prevEl: '.team-btn-prev'
      }
    });
  } catch (err) {
    console.warn('Swiper initialization notice:', err);
  }
}
