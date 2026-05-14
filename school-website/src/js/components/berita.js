import { t } from '../utils/language.js';

export async function renderBerita(container, isPreview = false) {
    let items = t('berita_items');
    if (isPreview) items = items.slice(0, 2);
    let html = `<h2  class= "section-title">${t('berita_title')}</h2><div class="card-grid">`;
    items.forEach(berita => {
        html += `<div class="card"><img src="${berita.img}" alt="news"><div class="card-content"><h3 class="card-title">${berita.title}</h3><p>${berita.desc}</p></div></div>`;
    });
    html += `</div>`;
    container.insertAdjacentHTML('beforeend', html);
}