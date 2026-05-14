import { t } from '../utils/language.js';

export function renderFasilitas(container) {
    const items = t('fasilitas_items'); // array fasilitas dari language.js
    let html = `<h2 class="section-title">${t('fasilitas_title')}</h2><div class="card-grid">`;
    items.forEach(f => {
        html += `
          <div class="card" style="text-align:center; background:white; padding:1rem; border-radius:15px;">
            <img src="${f.photo}" alt="fasilitas" style="width:200px; height:200px; border-radius:12px; object-fit:cover; margin-bottom:1rem;">
            <div class="card-content">
              <h3 class="card-title">${f.name}</h3>
              <p>${f.desc}</p>
            </div>
          </div>`;
    });
    html += `</div>`;
    container.innerHTML = html;
}
