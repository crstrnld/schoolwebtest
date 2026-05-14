import { t } from '../utils/language.js';

export function renderEkstrakurikuler(container) {
    const items = t('ekskul_items');
    let html = `<h2  class= "section-title">${t('ekskul_title')}</h2><div class="card-grid">`;
    items.forEach(item => {
        html += `<div class="card"><img src="${item.img}" alt="ekskul"><div class="card-content"><h3>${item.name}</h3><p>${item.desc}</p></div></div>`;
    });
    html += `</div>`;
    container.innerHTML = html;
}