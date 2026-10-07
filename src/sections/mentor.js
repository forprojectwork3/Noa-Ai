/**
 * mentor.js — Academic Mentor Spotlight for T. Naga Jyothi
 * Government Polytechnic, Proddatur
 */
import { MENTOR } from '../data/mentor.js';
import { SITE_NAME } from '../config/site.js';

export function initMentor() {
  const root = document.getElementById('mentor');
  if (!root) return;

  root.className = 'mentor-section';

  const avatarHTML = MENTOR.photo
    ? `<img src="${MENTOR.photo}" alt="${MENTOR.name}" class="mentor-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
       <div class="mentor-avatar-fallback" style="display:none;">
         <span class="mentor-initials">TNJ</span>
       </div>`
    : `
      <div class="mentor-avatar-fallback">
        <span class="mentor-initials">TNJ</span>
      </div>
    `;

  root.innerHTML = `
    <div class="container">
      <div class="mentor__header">
        <div class="mentor__category">✦ Faculty Mentorship & Project Leadership</div>
        <h2 class="mentor__title">Guided by Academic & Technical Excellence</h2>
        <p class="mentor__subtitle">
          The research direction, learning pedagogy, and software architecture behind ${SITE_NAME} were engineered under the continuous guidance and mentorship of our esteemed faculty advisor at 
          <a href="${MENTOR.institutionUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--clr-primary); text-decoration: underline; text-underline-offset: 4px;">${MENTOR.institution}</a>.
        </p>
      </div>

      <div class="mentor-card" id="mentor-spotlight-card">
        <!-- Left: Portrait & Halo -->
        <div class="mentor-portrait-wrap">
          <div class="mentor-halo">
            ${avatarHTML}
          </div>
          <span class="mentor-badge-advisor">
            <span>🎓</span>
            <span>Project Mentor · Team 3</span>
          </span>
          <div style="margin-top: 1rem; text-align: center;">
            <a href="${MENTOR.institutionUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost" style="padding: 0.4rem 0.9rem; font-size: var(--fs-xs); border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 0.4rem;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              <span>College Portal</span>
            </a>
          </div>
        </div>

        <!-- Right: Information & Quote -->
        <div class="mentor-content">
          <div class="mentor-meta">
            <h3 class="mentor-name">
              <span>${MENTOR.name}</span>
              <span style="font-size: var(--fs-sm); font-weight: 500; color: #D8B4FE; margin-left: 0.5rem;">${MENTOR.qualification}</span>
            </h3>
            <div class="mentor-title-role">${MENTOR.designation} • ${MENTOR.department}</div>
            <div class="mentor-institution">
              <a href="${MENTOR.institutionUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>🏛️ ${MENTOR.institution} (DTE / SBTET AP)</span>
              </a>
            </div>
          </div>

          <div class="mentor-quote-box">
            <p class="mentor-quote-text">${MENTOR.quote}</p>
          </div>

          <!-- Verified Experience & Pillar Badges -->
          <div class="mentor-pillars">
            <div class="mentor-pillar-item">
              <div class="mentor-pillar-title"><span>⏳</span> 12+ Years Experience</div>
              <div class="mentor-pillar-desc">Over a decade lecturing Computer Engineering across Government Polytechnics in AP.</div>
            </div>
            <div class="mentor-pillar-item">
              <div class="mentor-pillar-title"><span>📊</span> Technical Specialization</div>
              <div class="mentor-pillar-desc">Advanced certifications in Python, Data Analytics, IoT, and Cloud Computing (NITTTR & NPTEL).</div>
            </div>
            <div class="mentor-pillar-item">
              <div class="mentor-pillar-title"><span>🎯</span> Project Team 3 Mentorship</div>
              <div class="mentor-pillar-desc">Directing student engineers to solve real classroom learning challenges with AI.</div>
            </div>
          </div>

          <div style="margin-top: 1.5rem; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
            <a href="${MENTOR.bioPdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost" style="font-size: var(--fs-xs); padding: 0.5rem 1rem; color: #C084FC;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <span>View Official Faculty Bio-Data (PDF)</span>
            </a>
            <span style="font-size: var(--fs-xs); color: var(--clr-text-dim);">
              Employee ID: 1250205 • Dept. of Computer Engineering
            </span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Gentle 3D lighting sheen on mousemove
  const card = root.querySelector('#mentor-spotlight-card');
  if (card && window.matchMedia('(pointer: fine)').matches) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = ((y - centerY) / centerY) * -2;
      const rotY = ((x - centerX) / centerX) * 2;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }
}
