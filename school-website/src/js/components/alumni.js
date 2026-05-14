import { t } from '../utils/language.js';

export function renderAlumni(container) {
    const items = t('alumni_items');
    container.innerHTML = `
        <h2 class="section-title">${t('alumni_title')}</h2>
        <div class="alumni-hero" 
             style="background:url('../../assets/images/6.jpeg') center/cover no-repeat; 
                    border-radius:20px; height:300px; margin-bottom:2rem;">
        </div>
        <div class="card-grid alumni-gallery">
            ${items.map(a => `
                <div class="card">
                    <img src="${a.photo}" alt="alumni">
                </div>
            `).join('')}
        </div>
    `;
}
